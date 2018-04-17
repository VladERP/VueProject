import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

 $('#summernote').summernote({
        placeholder: 'Введите описание задачи',
        tabsize: 2,
        height: 100,
        lang: 'ru-RU'

      });


