<template>
	<div id="addTask" >
		<template v-for="item in items">
			<transition name="task-fade"> 
				<Task :item="item"/>
			</transition> 
		</template>
	</div>
</template>
<script>

import Task from '@/components/Task.vue'
import data from '@/utils/data.js'


export default {
 name: 'TaskList',
 components: {
 Task

 },
  data(){
  return data
  }
}




</script>
