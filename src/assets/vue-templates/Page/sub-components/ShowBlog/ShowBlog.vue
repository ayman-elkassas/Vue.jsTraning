<template src="./showblog.html"></template>
<style src="./showblog.css"></style>

<script>
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
		  this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (data) {
		    // console.log(data);
          this.blogs=data.body.slice(0,10);
      });
    },
    computed:{
		  filterBlogs:function () {
		    return this.blogs.filter((blog)=>{
		      return blog.title.match(this.search)
        });
      }
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
    }
  }
</script>
