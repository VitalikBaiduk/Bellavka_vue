<template>
  <span class="timer">{{
    displayDays + ' : ' + displayHours + ' : ' + displayMinutes + ' : ' + displaySeconds
  }}</span>
</template>

<script>
export default {
  props: {
    time: Date
  },
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0
    }
  },

  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    }
  },
  mounted() {
    this.priceHandler()
  },
  methods: {
    formatDate(date) {
      return date < 10 ? '0' + date : date
    },

    priceHandler() {
      const timer = setInterval(() => {
        const now = new Date()
        const end = new Date(this.time)
        const distance = end.getTime() - now.getTime()

        if (distance < 0) {
          clearInterval(timer)
          return
        }

        const days = Math.floor(distance / this._days)
        const hours = Math.floor((distance % this._days) / this._hours)
        const minutes = Math.floor((distance % this._hours) / this._minutes)
        const seconds = Math.floor((distance % this._minutes) / this._seconds)

        this.displayDays = this.formatDate(days)
        this.displayHours = this.formatDate(hours)
        this.displayMinutes = this.formatDate(minutes)
        this.displaySeconds = this.formatDate(seconds)
      }, 1000)
    }
  }
}
</script>

<style>
.timer {
  margin-left: 5px;
  font-size: 12px;
}
</style>
