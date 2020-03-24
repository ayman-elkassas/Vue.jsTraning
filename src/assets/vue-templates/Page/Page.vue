<template src="./page.html"></template>
<style src="./page.css"></style>

<script>
  import Header from './sub-components/Header/Header.vue';
  import Footer from './sub-components/Footer/Footer.vue';
  import Content from './sub-components/Content/Content.vue';

  import FormHelper from "./sub-components/FormHelper/FormHelper.vue";

  import FormOne from "./sub-components/DynamicComponent/FromOne/FormOne.vue";
  import FormTwo from "./sub-components/DynamicComponent/FormTwo/FormTwo.vue";

  import InputBinding from "./sub-components/InputBinding/InputBinding.vue";

  import ShowBlog from "./sub-components/ShowBlog/ShowBlog.vue";
  import ListBlogs from "./sub-components/ListBlogs/ListBlogs.vue";

	export default {
		name : "page",
    data:function () {
		  return{
        listElements:[
          {course:'CS',time:10},
          {course:'IT',time:12},
          {course:'IS',time:5},
          {course:'IS',time:5},
          {course:'IS',time:5},
          {course:'IS',time:5},
        ],
        title:'Vue Title As Shared',
        component:'form-two'
      }
    },
    components:{
		  'app-header':Header,
      'app-footer':Footer,
      'app-content':Content,
      'form-helper':FormHelper,
      'form-one':FormOne,
      'form-two':FormTwo,
      'Input-Binding':InputBinding,
      'show-blog':ShowBlog,
      'list-blogs':ListBlogs
    },
    methods:{
		  //Todo:using with Event not with event bus
      upTitle:function (updatedTitle) {
        this.title=updatedTitle;
      }
    },
    //Todo:Lifecycle Hooks
    beforeCreate () {
		  //Todo:Before create Vue object
      console.log('bCreated')
    },
    created () {
      //Todo:After create vue object
      console.log('created')
    },
    beforeMount (){
      //Todo:Before mounted el as html
      console.log('bMounted')
    },
    mounted () {
      //Todo:After mounted el as html
      console.log('mounted')
    },
    beforeUpdate () {
      //Todo:Before updated in html
      console.log('bUpdated')
    },
    updated () {
      //Todo:After updated in html
      console.log('updated')
    },
    beforeDestroy () {
      //Todo:Before destroy vue object
      console.log('bDestroyed')
    },
    destroyed () {
      //Todo:After destroy vue object
      console.log('Destroyed')
    }
	}
</script>
