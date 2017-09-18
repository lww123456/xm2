<template>
  <div class="page-loadmore">
    <div class="loading-background" :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }">
      <mt-swipe :auto="4000">
        <mt-swipe-item style="background: #888;height:200px;"><img src="../assets/img/5.jpg"></mt-swipe-item>
        <mt-swipe-item style="background: #666;height:200px;"><img src="../assets/img/6.jpg"></mt-swipe-item>
        <mt-swipe-item style="background: #777;height:200px;"><img src="../assets/img/7.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="page-search">
      <mt-search autofocus v-model="value" :result="filterResult"></mt-search>
    </div>


  </div>
</template>
<script>

  export default {
    name: 'page-search',
    data() {
      return {
        value: '',
        defaultResult: [
          'Apple',
          'Banana',
          'Orange',
          'Durian',
          'Lemon',
          'Peach',
          'Cherry',
          'Berry',
          'Core',
          'Fig',
          'Haw',
          'Melon',
          'Plum',
          'Pear',
          'Peanut',
          'Other'
        ]
      };
    },
    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    }
  }
</script>
<style lang="css">
  body{
    backgroud:#ccc;
  }
  .mint-swipe-item{
    text-align: center;
    line-height: 192px;
    font-size: 2rem;
  }
  .loading-background{
    width: 100%;
    height:192px;
    /*line-height: 192px;*/
    /*text-align: center;*/
    transition: .2s linear;
    background: #399;
  }
  .page-loadmore-list{
    list-style: none;
  }
  .page-loadmore{
    background:#fff;
  }
  .mint-loadmore-top span {
    display: inline-block;
    transition: .2s linear;
    vertical-align: middle;
  }
  .page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #eee;
    text-align: center;
  }
  .is-rotate{
    transform: rotate(180deg);
  }
  .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  .mint-swipe-item {
    line-height: 200px;
  }
  .slide1 {
    background-color: #0089dc;
    color: #393;
  }
  .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #212;
  }
  .page-search {
    height: 100%;
  }
</style>

