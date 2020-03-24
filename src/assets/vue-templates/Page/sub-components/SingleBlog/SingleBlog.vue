<template src="./singleblog.html"></template>
<style src="./singleblog.css"></style>

<script>
	export default {
		name : "SingleBlog",
    data(){
		  return{
		    id:this.$route.params.id,
        blog : {}
      }
    },created () {
		  this.$http.get('https://vue-blog-228f1.firebaseio.com/posts/'+this.id+'.json')
        .then((data) => {
          // console.log(data);
          //Todo:Convert from string format to json
          return data.json();
        }).then(function (data) {
          this.blog=data;
      })
    }

  }
</script>
