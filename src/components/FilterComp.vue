<template>
  <div>
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
          <a class="dropdown-item" v-on:click="taskFilterKey = 'blocker'" href="#">Критическая</a>
          <a class="dropdown-item" v-on:click="taskFilterKey = 'major'" href="#">Значительная</a>
          <a class="dropdown-item" v-on:click="taskFilterKey = 'normal'" href="#">Незначительная</a>
          <a class="dropdown-item" v-on:click="taskFilterKey = 'minor'" href="#">Тривиальная</a>

        </div>
      </div>
         <div class="dropdown show filter">
        <a class="btn btn-secondary dropdown-toggle sort-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Тип
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#" v-on:click="taskFilterKey = 'all'">Все</a>
          <a class="dropdown-item" href="#" v-on:click="taskFilterKey = 'task'">Задача</a>
          <a class="dropdown-item" href="#" v-on:click="taskFilterKey = 'bug'">Баг</a>

        </div>
      </div>
  </div>   
</template>
<script>
import data from '@/utils/data.js'
export default {

  
data(){
  return data
  }
  }
  
</script>
