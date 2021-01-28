<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { SampleButton } from '@/entry.esm';

export default defineComponent({
  name: 'ServeButton',
  components: {
   SampleButton
  }
});
</script>

<template>
  <div id="app">
    <sample-button>
      This is my test button!
    </sample-button>
  </div>
</template>
