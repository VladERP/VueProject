<template>
	<div id="addTask" >

<transition name="task-fade">
<Task :items="items"/>
</transition>	
	</div>
</template>
<script>

import Task from '@/components/Task.vue'


export default {
  name: 'TaskList',
 components: {
  Task

 },
  data(){
  	return {

  		items: [
  			{
  				title: 'Реализовать старницу 1',
  				author: 'Иванов В.И.',
  				dateStart: '19.10.2017',
  				dateEnd: '01.01.2018',
  				type: 'bug'



  			},
  			{
  				title: 'Реализовать старницу 2',
  				author: 'Иванов В.И.',
  				dateStart: '19.10.2017',
  				dateEnd: '01.01.2018',
  				type: 'task'



  			},
  			{
  				title: 'Реализовать старницу 3',
  				author: 'Иванов В.И.',
  				dateStart: '19.10.2017',
  				dateEnd: '01.01.2018',
  				type: 'task'



  			},

  		]
  	}
  }
}




</script>
