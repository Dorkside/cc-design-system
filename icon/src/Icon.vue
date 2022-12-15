<template>
  <i
    class="icon"
    :style="`--icon: url('https://api.iconify.design/${icon}.svg')`"
  ></i>
</template>

<script>
import { defineComponent } from 'vue';

/**
 * A simple component to display icons from https://iconify.design/
 */
export default defineComponent({
  // type inference enabled
  props: {
    /**
     * Icon string
     * @example logos:vue
     * @example logos:vitejs
     */
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.icon {
  display: inline-block;
  width: 4rem;
  height: 4rem;
  min-width: 100%;
  min-height: 100%;
  background: black;
  mask: var(--icon) center / contain no-repeat;
  -webkit-mask: var(--icon) center / contain no-repeat;
}
</style>
