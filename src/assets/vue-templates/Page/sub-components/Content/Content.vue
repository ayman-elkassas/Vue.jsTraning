<template src="./content.html"></template>
<style src="./content.css"/>

<script>
  import {bus} from '../../../../../main.js';

  export default {
		name : "content",
    data:function () {
		  return{
		    title:'Vue Courses',
        show:true,
        validate:false
      }
    },
    // TODO:props:['list'],OR
    props:{
      list:{
        type:Array,
        required:true
      }
    },
    methods:{
      deleteCard:function () {
        this.list.pop();
        console.log(this.list.length);
      }
    }
  }
</script>
