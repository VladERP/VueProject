<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a href="#" class="nav-link">Главная</a>
            </li>
            <li class="nav-item">
                <a href="reference.html" class="nav-link">Справка</a>
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
          <a class="dropdown-item" href="PersonalArea.html">Личный кабинет</a>
          <a class="dropdown-item" href="#">Выход</a>
        </div>
    </div> 
    </div>   
</nav>
    <router-view/>
  </div>
</template>

<style lang="sass">

</style>
<script>


</script>
