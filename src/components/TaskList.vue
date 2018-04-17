<template>
	<div id="addTask" >
		<div v-for="item in taskFilter" :key = "item.id">
			
				<Task :item="item"/>
			
		</div>
	</div>
</template>
<script>

import Task from '@/components/Task.vue'
import data from '@/utils/data.js'
import Filter from '@/components/FilterComp.vue'

export default {

 name: 'TaskList',
 components: {
 Task
 },

  data(){
  return data
  
  },

  computed: {
    taskFilter(){
      return this[this.taskFilterKey]
    },
    all() {
      return this.items
    },
    task(){
      return this.items.filter((item) => item.type == 'Задача')
    },
    bug(){
      return this.items.filter((item) => item.type == 'Баг')
    },
    blocker(){
     return this.items.filter((item) => item.priority == 'blocker')	
    },
    major(){
     return this.items.filter((item) => item.priority == 'major')	
    },
    normal(){
     return this.items.filter((item) => item.priority == 'normal')	
    },
    minor(){
     return this.items.filter((item) => item.priority == 'minor')	
    }
  }
}




</script>
