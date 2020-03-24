<template src="./showblog.html"></template>
<style src="./showblog.css"></style>

<script>

  //Todo:Use Mixin if you want to share any computed function
  import searchMixin from "../../mixins/searchMixin.js";

	export default {
		name : "ShowBlog",
    data(){
		  return{
		    blogs:[],
        search:''
      }
    },
    methods:{

    },created () {
		  //Todo:Make Firebase Route
      this.$http.get('https://vue-blog-228f1.firebaseio.com/posts.json')
        .then(function (data) {
          return data.json();
        }).then(function (data) {
          var blogsArray=[];
          for(let key in data){
            data[key].id=key;
            blogsArray.push(data[key]);
          }
          this.blogs=blogsArray;
          console.log(blogsArray);
      });

		  // this.$http.get('https://jsonplaceholder.typicode.com/posts')
      //   .then(function (data) {
		  //   // console.log(data);
      //     this.blogs=data.body.slice(0,10);
      // });
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
