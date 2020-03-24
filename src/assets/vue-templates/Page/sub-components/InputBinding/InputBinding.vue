<template src="./inputbinding.html"></template>
<style src="./inputbinding.css"></style>

<script>
	export default {
		name : "InputBinding",
    data:function () {
		  return{
		    blog:{
          title:'',
          content:'',
          Categories:[],
          author:''
        },
        authors:['The net ninja','The Angular Avenger','The Vue Vindicator'],
        submitted:true
      }
    },
    methods:{
		  //Todo:Using Firebase Realtime
      post:function () {
        this.$http.post('https://vue-blog-228f1.firebaseio.com/posts.json',this.blog)
          .then(function (data) {
          console.log(data);
          this.submitted=true
        })
      },
		  post1:function () {
		    this.$http.post('https://jsonplaceholder.typicode.com/posts',{
		      title:this.blog.title,
          body:this.blog.content,
          userId:1
        }).then(function (data) {
          console.log(data);
          this.submitted=true
        })
      }
    }
	}
</script>
