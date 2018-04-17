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
<popup/>

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
import popup from '@/components/popup.vue'
export default {
  name: 'App',
 components: {
  popup
 }
}
</script>
