<template>
  <pot-cascade-picker
    ref="picker"
    v-model="isVisible"
    :data="cascadeData"
    :selected-index="selectedIndex"
    :title="_title"
    :subtitle="subtitle"
    :cancel-txt="_cancelTxt"
    :confirm-txt="_confirmTxt"
    :swipe-time="swipeTime"
    :z-index="zIndex"
    :mask-closable="maskClosable"
    @select="_pickerSelect"
    @cancel="_pickerCancel"
    @change="_pickerChange">
  </pot-cascade-picker>
</template>

<script type="text/ecmascript-6">
  import {
    pad,
    formatDate,
    getZeroStamp,
    getDayDiff,
    DAY_TIMESTAMP,
    HOUR_TIMESTAMP,
    MINUTE_TIMESTAMP
  } from '../../common/lang/date'
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'
  import pickerMixin from '../../common/mixins/picker'
  import localeMixin from '../../common/mixins/locale'
  import potCascadePicker from '../cascade-picker/cascade-picker.vue'
  import { warn } from '../../common/helpers/debug'

  const COMPONENT_NAME = 'pot-time-picker'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  const NOW = {
    value: 'now'
  }

  const INT_RULE = {
    floor: 'floor',
    ceil: 'ceil',
    round: 'round'
  }

  const DEFAULT_STEP = 10

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin, pickerMixin, localeMixin],
    components: {
      potCascadePicker
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      delay: {
        type: Number,
        default: 15
      },
      day: {
        type: Object,
        default() {
          return {
            len: 3
          }
        }
      },
      showNow: {
        type: [Boolean, Object],
        default: true
      },
      minuteStep: {
        type: [Number, Object],
        default: DEFAULT_STEP
      },
      format: {
        type: String,
        default: 'YYYY/M/D hh:mm'
      }
    },
    data() {
      return {
        now: new Date(),
        selectedIndex: [0, 0, 0],
        value: 0
      }
    },
    computed: {
      _title () {
        return this.title || this.$t('selectTime')
      },
      _day () {
        const defaultDay = {
          filter: [this.$t('today')],
          format: this.$t('formatDate')
        }
        return Object.assign({}, defaultDay, this.day)
      },
      nowText() {
        const defaultText = this.$t('now')
        return (this.showNow && this.showNow.text) || defaultText
      },
      minuteStepRule() {
        const minuteStep = this.minuteStep
        return (typeof minuteStep === 'object' && Math[INT_RULE[minuteStep.rule]]) || Math[INT_RULE.floor]
      },
      minuteStepNumber() {
        const minuteStep = this.minuteStep
        return typeof minuteStep === 'number' ? minuteStep : (minuteStep.step || DEFAULT_STEP)
      },
      minTime() {
        let minTimeStamp = +this.now + this.delay * MINUTE_TIMESTAMP

        // Handle the minTime selectable change caused by minute step.
        const minute = new Date(minTimeStamp).getMinutes()
        const intMinute = this.minuteStepRule(minute / this.minuteStepNumber) * this.minuteStepNumber
        if (intMinute >= 60) {
          minTimeStamp += (60 - minute) * MINUTE_TIMESTAMP
        }

        return new Date(minTimeStamp)
      },
      days() {
        const days = []
        const dayDiff = getDayDiff(this.minTime, this.now)

        for (let i = 0; i < this._day.len; i++) {
          const timestamp = +this.minTime + i * DAY_TIMESTAMP
          days.push({
            value: timestamp,
            text: (this._day.filter && this._day.filter[dayDiff + i]) || formatDate(new Date(timestamp), this._day.format)
          })
        }
        return days
      },
      hours() {
        const hours = []
        for (let i = 0; i < 24; i++) {
          hours.push({
            value: i,
            text: `${i}${this.$t('hours')}`,
            children: this.minutes
          })
        }
        return hours
      },
      partHours() {
        const partHours = this.hours.slice(this.minTime.getHours())
        partHours[0] = Object.assign({}, partHours[0], {children: this.partMinutes})

        if (this.showNow) {
          partHours.unshift({
            value: NOW.value,
            text: this.nowText,
            children: []
          })
        }
        return partHours
      },
      minutes() {
        const minutes = []
        for (let i = 0; i < 60; i += this.minuteStepNumber) {
          minutes.push({
            value: i,
            text: `${pad(i)}${this.$t('minutes')}`
          })
        }
        return minutes
      },
      partMinutes() {
        const begin = this.minuteStepRule(this.minTime.getMinutes() / this.minuteStepNumber)
        return this.minutes.slice(begin)
      },
      cascadeData() {
        const data = this.days.slice()
        data.forEach((item, index) => {
          item.children = index ? this.hours : this.partHours
        })
        return data
      }
    },
    methods: {
      show() {
        if (this.isVisible) {
          return
        }
        this.isVisible = true

        this._updateNow()
        this._updateSelectedIndex()
      },
      setTime(value) {
        this.value = value

        this.isVisible && this._updateSelectedIndex()
      },
      _updateSelectedIndex() {
        const value = this.value
        const minTime = this.minTime

        if (value <= +minTime) {
          this.selectedIndex = [0, 0, 0]
        } else {
          // calculate dayIndex
          const valueDate = new Date(value)
          const dayIndex = getDayDiff(valueDate, minTime)

          if (dayIndex >= this.days.length) {
            warn('Use "setTime" to set a time exceeded to the option range do not actually work.', COMPONENT_NAME)
            return
          }

          // calculate hourIndex
          const hour = valueDate.getHours()
          const beginHour = dayIndex === 0
                            ? this.showNow ? this.minTime.getHours() - 1 : this.minTime.getHours()
                            : 0
          const hourIndex = hour - beginHour

          // calculate minuteIndex
          const minute = this.minuteStepRule(valueDate.getMinutes() / this.minuteStepNumber)
          const beginMinute = !dayIndex && (this.showNow ? hourIndex === 1 : !hourIndex)
                              ? this.minuteStepRule(this.minTime.getMinutes() / this.minuteStepNumber)
                              : 0
          const minuteIndex = minute - beginMinute

          this.selectedIndex = [dayIndex, hourIndex, minuteIndex]
        }
      },
      _updateNow() {
        this.now = new Date()
      },
      _pickerChange(i, newIndex) {
        this.$emit(EVENT_CHANGE, i, newIndex)
      },
      _pickerSelect(selectedVal, selectedIndex, selectedText) {
        let timestamp
        let text
        if (selectedVal[1] === NOW.value) {
          timestamp = +new Date()
          text = this.nowText
        } else {
          timestamp = getZeroStamp(new Date(selectedVal[0])) + selectedVal[1] * HOUR_TIMESTAMP + selectedVal[2] * MINUTE_TIMESTAMP
          text = selectedText[0] + ' ' + selectedText[1] + ':' + selectedText[2]
        }

        this.value = timestamp
        const formatedTime = formatDate(new Date(timestamp), this.format)
        this.$emit(EVENT_SELECT, timestamp, text, formatedTime)
      },
      _pickerCancel() {
        this.$emit(EVENT_CANCEL)
      }
    }
  }
</script>
