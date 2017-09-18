<template>
  <div class="follow">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <!--<img slot="icon" src="../assets/logo.png">-->
        选项一
      </mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" :swipeable="bMove">
      <mt-tab-container-item id="1">
        <mt-cell v-for="(n,index) in 5" :key="index" title="头条1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="(n,index) in 5" :key="index" title="头条2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="(n,index) in 5" :key="index" title="头条3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  export default{
    name:'',
    data(){
      return{
        selected:'1',
        bMove:true,
        value:[]
      }
    }
  }
</script>
<style >
  .mint-tab-container{
    margin-top: 2px;
  }
  .mint-checklist-title{
    font-size: 2rem;
    text-align: center;
  }
</style>