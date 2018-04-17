<template>
	
<div class="wrapper-staff__project">
        <img :src="project.img" alt="" class="staff-project__img">
        <div class="staff-project__status">
            <p>{{project.status}}</p>
        </div> 
        <div class="staff-project__wrap-title"> 
            <a href="project.html">{{project.title}}</a>
        </div>
      </div>
    
</template>
<script>
	export default {
		props:['project']
	}
</script>      
<style scoped lang="sass">
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