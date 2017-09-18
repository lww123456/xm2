<template>
  <div class="user">
    <div class="info">
      <router-link to="/login">登录</router-link>
      <router-link to="/reg">注册</router-link>
    </div>
    <mt-cell title="我的消息"><mt-badge size="small" color="#f00">10</mt-badge></mt-cell>
    <mt-cell title="我的收藏" value="0"></mt-cell>
    <mt-cell title="我的历史" value="0"></mt-cell>
    <mt-cell title="用户反馈" value="0"></mt-cell>
    <mt-cell title="系统设置" value="0"></mt-cell>

    <mt-cell title="跳转到" label="跳转到 https://mint-ui.github.io" is-link to="https://mint-ui.github.io"></mt-cell>
    <mt-cell title="WIFI">
      <mt-switch v-model="bWifi" @change="handleChange"></mt-switch>
      <span v-text="bWifi?'开':'关'"></span>
    </mt-cell>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        bWifi:true
      }
    },
    methods:{
      handleChange(evt){
        console.log(this,evt)
      }
    }
  }
</script>
<style>
  .info{
    height:200px;
    background: #7694ff;
    text-align: center;
    line-height: 200px;
  }
  .info a{
    color:#fff;
    text-decoration: none;
  }
</style>