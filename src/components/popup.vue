<template>
	<div>
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
</div>
</template>
<script>

</script>