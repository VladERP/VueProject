<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Главная</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/reference">Справка</router-link>
            </li>
            <li class="nav-item">
                <a href="#myModal" class="btn btn-primary" data-toggle="modal">Создать задачу</a> 
            </li> 
        </ul>
    </div>
    <div class="user-wrap dropdown">
    <a class="nav-link dropdown-toggle navbar-toggler-right user-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="img/avatar.jfif" alt="Иванов И.И." class="user-img">Иванов И.И.
       <span class="user-staf">Программист</span> </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <router-link  class="dropdown-item" to="/personalarea">Личный кабинет</router-link>
          <a class="dropdown-item" href="#">Выход</a>
        </div>
    </div> 
    </div>   
</nav>
   <div id="myModal" class="modal fade">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <!-- Заголовок модального окна -->
      <div class="modal-header">
        
        <h4 class="modal-title">Создать задачу</h4>
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
      </div>
      <!-- Основное содержимое модального окна -->
      <div class="modal-body">
        <form id="task-form" class="form" method="post" >
          <!-- <p class="form-task__p">Заголовок задачи</p> -->
          <input type="text" class="form-control title-task"  placeholder="Введите заголовок">
          

      <textarea id="summernote" name="editordata"></textarea> 

        <p class="form-task__p">Критичность</p>
    <select name="form-control" id="" class="staf-exe">
            <option>Критическая</option>
            <option>Значительная</option>
            <option>Незначительная</option>
            <option>Тривиальная</option>
          </select>
    <p class="form-task__p">Исполнитель</p>
    <select class="staf-exe">
            <option>Иванов И.В.</option>
            <option>Петров П.И</option>
          </select>

          
 <div class="form-group">
    <p class="form-task__p">Прикрепить файл</p>
    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    <small id="fileHelp" class="form-text text-muted">Ограничения для файлов</small>
  </div>
  <button type="button" role="button" class="btn btn-primary" >Сохранить изменения</button>
    </form>
      </div>
      <!-- Футер модального окна -->
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
        
      </div>
    
    </div>
  </div>
</div>

   <section class="content-sect">
    <router-view></router-view>
</section> 
  </div>

</template>

<style lang="sass">
body
  background-color: #EAEAEA
  font-size: 18px
.user-wrap
  position: relative  
  .user-link
    color: white
    &:hover
      color: rgba(255,255,255,.5)
    .user-img
        width: 50px
        height: 50px
        border-radius: 50%
        object-fit: cover
        margin-right: 5px
    .user-staf
      font-size: 0.7em
      position: absolute
      right: 4.75em
      top: 37px 


</style>
<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

</script>
