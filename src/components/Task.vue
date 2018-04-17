<template>
		<div class="task">
		<div class="task-wrap">
          <i class="far task-clock" :class = "sostClass"></i>
          <a href="#" class="task-title">{{item.title}}</a>
          <div class="task-staf">
              <p class="task-staf__p">Автор:</p>
              <a href="#" class="task-staf__a">{{item.author}}</a>
          </div>
          <div class="task-type">
              <p class="task-type__p">Тип:</p>
              <p class="task-type__cont">{{item.type}}</p>
          </div>
          <i class="fas fa-lightbulb task-icon__task" :class="priorityClass"></i>
          <div class="task-date">
          	  <i class="far fa-calendar-alt task-date__calend"></i>	
              <p class="task-date__p date-start">{{item.dateStart}}</p>
              <p class="task-date__p date-start"> - </p>
              <p class="task-date__p date-end"> {{item.dateEnd}}</p>
          </div>
      </div>
	</div>
</template>
<script>
// import Task from '@/components/Task.vue'
	export default {

  	props:['item'],

    computed: {
       priorityClass: function() {
           let priority = this.item.priority;
           return {
               [priority]: true
           }
       },
       sostClass: function(){
       	let sost = this.item.sost;
       	return{
       		[sost]: true
       	}
       }

    }
}
</script>
<style scoped lang="sass">
	.task-wrap
			width: 100%
			box-shadow: 0 0 1px rgba(0,0,0,0.5)
			height: 100px
			position: relative
			border-radius: 3px
			display: flex
			align-items: center
			.task-icon__task
				position: absolute
				margin-left: 10px
				font-size: 1.2em
				bottom: 7px
				color: red
			.minor
				color: #6B6B6B
			.major
				color: #FFDD00	
			.blocker
				color: red	
			.normal
				color: #00DD00	
			.task-title
				margin-left: 10px
				font-size: 1em
				width: 75%
			.task-clock
				margin-left: 10px
				width: 20px	
			.task-staf
				position: absolute
				left: 4%
				bottom: 7px
				width: 40%
				& a,p
					font-size: 0.8em 
					width: auto	
					column-width: 50px
					float: left
					color: #6B6B6B
				.task-staf__p
					width: 50px
					margin: 0
			.task-date
				
				width: 15%
				right: 7px
				display: flex
				.task-date__calend
					display: flex
					align-items: center
				.task-date__p
					color: #6B6B6B
					font-size: 0.8em 
					margin: 0
					margin-left: 3px
	.task-fade-enter-active 
		transition: all .3s ease

	.task-fade-leave-active 
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

	.task-fade-enter, .task-fade-leave-to
		transform: translateX(10px)
		opacity: 0
	.task-type
		position: absolute
		left: 20%
		bottom: 7px		
		display: flex	
		& p
			font-size: 0.9em 
			width: auto	
			column-width: 20px
			float: left
			color: #6B6B6B	
			margin: 0 3px		

				
</style>