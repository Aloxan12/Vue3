<template>
  <div class="dialog" v-show="show" @click.stop="hideDialog">
    <div @click.stop class="dialog_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toogleMixixn from "@/mixins/toogleMixixn";

export default {
  name: 'my-dialog',
  mixins:[toogleMixixn]
}
</script>

<style scoped>
.dialog{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0, 0.5);
  position: fixed;
  display: flex;
}
.dialog_content{
  margin: auto;
  padding: 20px;
  border-radius: 12px;
  background: white;
  min-height: 50px;
  min-width: 50px;
}
</style>