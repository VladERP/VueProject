 <template>
    <div class="personalarea">
 <div class="container content-window clearfix staff-sect" >
    <h1 class="staff-h1">Карточка сотрудника</h1>
    <div class="staff-avatar">
      <img src="img/avatar.jfif" alt="Иванов И.И." class="staff-avatar">
    </div>
  <div class="row">
    <div class="col-sm-6">
      <p class="staff-p"><span class="staff-span">ФИО: </span>Ивавнов Иван Иванович</p>
      <p class="staff-p"><span class="staff-span">Должность: </span>Программист</p>
      <p class="staff-p"><span class="staff-span">Дата рождения: </span>01.01.1990</p>
      <p class="staff-p"><span class="staff-span">Кол-во проектов: </span>5</p>
    </div>
    <div class="col-sm-6">
      <form action="" role="form" class="form-staff">
        <div class="form-group">
            <label for="pass">Пароль</label>
            <input type="password" class="form-control" id="pass" placeholder="Пароль">
        </div>
        <div class="form-group">
            <label for="pass">Пароль еще раз</label>
            <input type="password" class="form-control" id="pass2" placeholder="Пароль еще раз">
        </div>

        <button type="submit" class="btn btn-success">Изменить пароль</button>
      </form> 
    </div>
  </div>

 
 </div> 
 <div class="staff-project container content-window clearfix">
   <h1>Проекты</h1>
   <div class="row staff-project_wrap">
      <div class="col-md-4 wrapper-staff__project">
        <img src="img/project1.jpg" alt="" class="staff-project__img">
        <div class="staff-project__status">
            <p>В разработке</p>
        </div> 
        <div class="staff-project__wrap-title"> 
            <a href="project.html">Пример названия проекта 1</a>
        </div>
      </div>
      <div class="col-md-4 wrapper-staff__project">
        <img src="img/project2.jpg" alt="" class="staff-project__img">
        <div class="staff-project__status">
            <p>Поддержка</p>
        </div> 
        <div class="staff-project__wrap-title"> 
            <a href="project.html">Пример названия проекта 2</a>
        </div>
      </div>
      <div class="col-md-4 wrapper-staff__project">
        <img src="img/project3.jpg" alt="" class="staff-project__img">
        <div class="staff-project__status">
            <p>Закрыт</p>
        </div> 
        <div class="staff-project__wrap-title"> 
            <a href="project.html">Пример названия проекта 3</a>
        </div>
      </div>
   </div>
 </div>
 </div> 
 </template>

 <style scoped lang="sass">

   
 </style>