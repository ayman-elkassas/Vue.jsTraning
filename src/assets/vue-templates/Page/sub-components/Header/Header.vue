<template src="./header.html"></template>
<style src="./header.css"/>

<script>

  import {bus} from '../../../../../main.js';

  export default {
    name : "header",
    data:function () {
      return{
        title:'Vue Header'
      }
    },
    props:{
      title : {
        type:String
      }
    },
    methods:{
      updateTitle:function () {

        // this.$emit('chTitle','Update Done')

        this.title='Update Done';
        //Todo:when fire event all created methods listen on this event fire and get
        //Todo:all call back data
        bus.$emit('chTitle','Update Done')
      }
    }
  }
</script>
