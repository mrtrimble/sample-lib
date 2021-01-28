<script>
import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
  name: 'SampleButton', // vue component name
});
</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  .button{
    background:blue;
    color:white;
  }
</style>
