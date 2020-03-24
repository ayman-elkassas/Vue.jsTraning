import ShowBlog from './assets/vue-templates/Page/sub-components/ShowBlog/ShowBlog.vue'
import InputBinding from "./assets/vue-templates/Page/sub-components/InputBinding/InputBinding.vue";
import SingleBlog from "./assets/vue-templates/Page/sub-components/SingleBlog/SingleBlog.vue";

export default[
  {path:'/',component:ShowBlog},
  {path:'/add',component:InputBinding},
  {path:'/Blog/:id',component:SingleBlog}
]
