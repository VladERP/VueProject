<template>
  <div class="home">
    
    
    
 <div class="content-window content-window__home" id="left-window">
 	<h1>Задачи</h1>
 	<Filtr/>
 	<TaskList />
 </div>
<div class="content-window content-window__right content-window__home">
        <h1>Баги</h1>
        <Filtr/> 
        <TaskList/>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from '@/components/TaskList.vue'
import Filtr from '@/components/Filtr.vue'
export default {
  name: 'home',
  components: {
    TaskList,
    Filtr,


   
  }

}
</script>

<style scoped lang="sass">
.content-sect
  position: relative
  height: auto
  .content-window__home
    position: absolute
    width: 49%
    height: auto
    margin: 0.7%
  .content-window
    border-radius: 5px
    box-shadow: 0 0 10px rgba(0,0,0,0.5)
    & h1
      font-size: 1.5em
      margin: 0 auto
      text-align: center
      margin-bottom: 5px
    .filter
      float: left 
    .icon-wrap
      position: absolute  
      top: 4px
      right: 15px
      .task-icon__top
        margin-left: 7px
        cursor: pointer
        &:hover
          color: #6B6B6B
  .content-window__right
    right: 0px          
</style>

