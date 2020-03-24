<template src="./listblogs.html"></template>
<style src="./listblogs.css"></style>

<script>

  //Todo:Use Mixin if you want to share any computed function
  import searchMixin from "../../mixins/searchMixin.js";


  export default {
    name : "ShowBlogs",
    data(){
      return{
        blogs:[],
        search:''
      }
    },
    methods:{

    },created () {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (data) {
          // console.log(data);
          this.blogs=data.body.slice(0,10);
        });
    },
    computed:{
      //Todo:Replace this method with mixin
      // filterBlogs:function () {
      //   return this.blogs.filter((blog)=>{
      //     return blog.title.match(this.search)
      //   });
      // }
    },
    //Todo:Note (local) is effected and -remove- effect of (global) register
    //Todo:To make local filter
    filters:{
      'toUpperCase':function (value) {
        return value.toUpperCase();
      },//Todo:Or different format syntax
      toUpper(value){
        return value.toUpperCase();
      }
    },
    //Todo:To register as a local directives
    directives:{
      'rainbow':{
        bind(el,binding,vNode){
          el.style.color='#'+Math.random().toString(16).slice(2,8);
        }
      }
    },
    mixins:[searchMixin]
  }
</script>
