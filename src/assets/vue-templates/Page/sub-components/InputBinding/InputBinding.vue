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
        submitted:false
      }
    },
    methods:{
		  post:function () {
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
