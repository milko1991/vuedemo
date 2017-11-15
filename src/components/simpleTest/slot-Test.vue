<template>
    <div>
      <h2 class="tx-c">slot</h2>
      <h4>具名slot</h4>
      <p>slot测试：</p>
      <p><slot name="first"></slot></p>
      <p><slot name="three"></slot></p>
      <p><slot name="four"></slot></p>
      <p><slot name="five">如果没有索引到内容，则会显示此内容。</slot></p>
    </div>
</template>

<style>
</style>

<script>
  export default ({
        data() {
            return {

            }
        }
  })
</script>
