<template>
  <div class="btn" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

/**
 * Very simple button component
 */
export default defineComponent({
  props: {
    /**
     * primary, secondary, accent, neutral, info, success, warning, error
     */
    variant: {
      type: String as PropType<
        | 'primary'
        | 'secondary'
        | 'accent'
        | 'neutral'
        | 'info'
        | 'success'
        | 'warning'
        | 'error'
      >,
      default: 'primary',
      validator: (value: any) =>
        [
          'primary',
          'secondary',
          'accent',
          'neutral',
          'info',
          'success',
          'warning',
          'error',
        ].includes(value),
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const classes = computed(() => {
      return [`btn-${props.variant}`, props.outline && 'btn-outline'];
    });

    return {
      classes,
    };
  },
});
</script>

<style lang="scss" scoped></style>
