import Vue from 'vue'
import App from './assets/vue-templates/App/App.vue'
// import Test from './assets/vue-templates/Test/Test.vue'
import Page from './assets/vue-templates/Page/Page.vue';

//Todo:to nested components but can declare it in App.vue itself....
// Vue.component('test',Test);

export const bus=new Vue();

import VueResource from 'vue-resource'
//Todo:****************Import**********************

// new Vue({
//   el: '#app',
//   render: h => h(App)
// });

new Vue({
  el:'#page',
  render:h=>h(Page)
});

//Todo:can render component once.
// new Vue({
//   el:'#test',
//   render:h=>h(Test)
// });

//Todo:Write here every thing want to be shared between all components

//Todo:Use vue resource
Vue.use(VueResource);

//Todo:Custom Directives
Vue.directive('rainbow',{
  bind(el,binding,vNode){
    el.style.color='#'+Math.random().toString().slice(2,8);
  }
});

Vue.directive('theme',{
  bind(el,binding,vNode){
    if(binding.value === "wide") {
      el.style.maxWidth='1200px';
    }else if(binding.value === "narrow") {
      el.style.maxWidth='560px';
    }

    if(binding.arg==='column'){
      el.style.background='#ddd';
      el.style.padding='20px';
    }
  }
});

//Todo:Custom Filters
Vue.filter('to-upperCase',function (value) {
  return value.toUpperCase();
});

Vue.filter('snippet',function (value) {
  return value.slice(0,100)+'...';
});




