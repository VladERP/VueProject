<template>
	<div class="task">
		<div class="task-wrap">
          <i class="fas fa-lightbulb fa-2x task-icon__task" style="color: #E7A900;"></i>
          <a href="#" class="task-title">Реализовать платежную систему на странице "name"</a>
          <div class="task-staf">
              <p class="task-staf__p">Автор:</p>
              <a href="#" class="task-staf__a">Иванов И.В.</a>
          </div>
          <div class="task-date">
              <p class="task-date__p date-start">c 14.03.2018 12:00</p>
              <p class="task-date__p date-end">по 15.03.2018 12:00</p>
          </div>
      </div>
	</div>
</template>
<script>
export default {
  name: 'Task'
  
}
</script>
<style scoped lang="sass">
	.task-wrap
			width: 100%
			box-shadow: 0 0 3px rgba(0,0,0,0.5)
			height: 100px
			position: relative
			border-radius: 3px
			display: flex
			align-items: center
			.task-icon__task
				margin-left: 10px
				font-size: 1.8em
				color: red
			.task-title
				margin-left: 10px
				font-size: 0.9em
			.task-staf
				position: absolute
				left: 7px
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
				position: absolute
				right: 7px
				.task-date__p
					color: #6B6B6B
					font-size: 0.6em 
</style>