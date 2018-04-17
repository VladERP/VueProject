<template>
	<div id="app">
		<div class="example">
      <p class="form-task__p">Дата</p>
      <datepicker language="ru" placeholder="Выбрать дату"></datepicker>
    </div>

	</div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
import DateLanguages from '@/utils/DateLanguages'

const state = {
  date1: new Date()
}

export default {
  name: 'app',
  components: {
    Datepicker
  },
  data () {
    return {
      format: 'd MMMM yyyy',
      disabled: {},
      disabledFn: {
        customPredictor (date) {
          if (date.getDate() % 3 === 0) {
            return true
          }
        }
      }}}}
</script>
