<template>
  <div class="taskwrap">

 
    <div class="content-window content-window__home" id="left-window">
      <h1>Задачи</h1>
      <div class="dropdown show filter">
        <a class="btn btn-secondary dropdown-toggle sort-link" href="#" role="button" id="sorting" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Сортировка
        </a>

        <div class="dropdown-menu" aria-labelledby="sorting">
          <a class="dropdown-item" href="#">Ожидают выполнение</a>
          <a class="dropdown-item" href="#">В процессе</a>
          <a class="dropdown-item" href="#">Выполненные</a>
        </div>
      </div>
      <div class="dropdown show filter">
        <a class="btn btn-secondary dropdown-toggle sort-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Фильтр
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Критическая</a>
          <a class="dropdown-item" href="#">Значительная</a>
          <a class="dropdown-item" href="#">Незначительная</a>
          <a class="dropdown-item" href="#">Тривиальная</a>

        </div>
      </div>

     <Task/> 

    </div>
    <div class="content-window content-window__right content-window__home">
        <h1>Баги</h1>
        <div class="icon-wrap">   
           <i class="fas fa-expand task-icon__top"></i> 
           <i class="fas fa-question task-icon__top"></i>
      </div> 
      
   
    
     
    </div>
    
    
</div>
</template>

<script>
import Task from '@/components/Task.vue'


export default {
  name: 'Taskwrap',
 components: {
  Task
 }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
