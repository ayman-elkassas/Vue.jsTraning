<!--Todo:html-->
<template src="./app.html"></template>
<!--Todo:css-->
<style src="./app.css"></style>
<!--Todo:js (as a .vue)-->
<script>

  import Test from '../Test/Test.vue'

  export default {
    name: 'app',
    //Todo: or data(){} the same like data:function(){}
    data:function () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      'test':Test
    }
  }
</script>
