<template>
  <div class="hello">
    <div class="main">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到姜漂亮的财务老师！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main{
  width: 1000px;
  height: 500px;
  margin: 0 auto;
  background-image: url('../assets/love.png');
  background-size: 100%;
  background-repeat: none;
}
</style>
