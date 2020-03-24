<template src="./footer.html"></template>
<style src="./footer.css"/>

<script>
  import {bus} from '../../../../../main.js';

  export default {
		name : "footer",
    data:function () {
		  return{
		    title:'Vue Footer'
      }
    },
    props:{
		  title:{
		    type:String
      }
    },
    created () {
		  //Todo:when all objects vm created with emit bus
		  bus.$on('chTitle',(data)=>{
		    this.title=data;
      })
    }
  }
</script>
