<template>
	
		<div class="staff-project container content-window clearfix">
   			<h1>Проекты</h1>
   			<div class="row">
   			<div class="col-md-4 staff-project_wrap" v-for='project in projects'>
				<Project :project="project"/>
			</div>	
			</div>
		</div>
	
</template>
<script>
import Project from '@/components/Project.vue'
import data from '@/utils/data.js'
	export default {
		name: 'ProjectList',
		components: {
 			Project
		 },
		 data(){
  			return data
  
  }
	}
</script>
<style scoped lang="sass">
	.staff-project
		margin-top: 15px
		.staff-project_wrap
			margin-top: 15px
			padding-bottom: 15px
			margin-bottom: 15px
			width: auto
			.wrapper-staff__project
				position: relative
				.staff-project__img
					width: 100%
					height: 320px
					object-fit: cover
				.staff-project__wrap-title
					width: 100%
					height: 70px
					background-color: black
					position: absolute
					z-index: 999
					bottom: 0
					opacity: 0.7
					text-align: center
					padding: 7px
					& a
						color: white
						font-size: 1.2em
						width: 100%
						height: 100%
						display: block
				.staff-project__status
					width: auto
					padding-left: 7px
					padding-right: 7px
					height: 23px
					background-color: black
					position: absolute
					z-index: 999
					top: 7px
					border-radius: 10px
					opacity: 0.7
					text-align: center
					left: 25px
					& p 
						color: white
						font-size: 0.8em	
	</style>