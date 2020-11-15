<template>
  <div>
    <div class="example">{{ msg }}</div>
    <div class="hello">{{ msg }}</div>
    <div class="kk">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '作業一：實際使用 vue-loader'
    }
  }
}
</script>

<style>
.example {
  color: red;
}

</style>