<template>
  <div id="app">
    <mt-header fixed :title="title[selected]"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/3.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="fllow">
        <img slot="icon" src="./assets/img/xing.png">
        关注
      </mt-tab-item>
      <mt-tab-item id="column">
        <img slot="icon" src="./assets/img/1.png">
        栏目
      </mt-tab-item>
      <mt-tab-item id="user">
        <img slot="icon" src="./assets/img/2.png">
        未登录
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default{
    name:'',
    data(){
      return{
        selected:'home',
        title: {
          home:'首页',
          fllow:'关注',
          column:'栏目',
          user:'我的'
        }
      }
    },
    watch:{
      $route(to){
//        console.log(to.path);
        this.selected=to.path.substring(1);
//        this.$router.push('/'+this.selected);
      },
      selected(){
//        console.log(this.selected);
        this.$router.push('/'+this.selected);
      }
    }
  }
</script>
<style>
  #app{
    padding-top: 40px;
    padding-bottom: 55px;
  }
</style>



