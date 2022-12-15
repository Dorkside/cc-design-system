<template>
  <DefaultLayout :docContext="docContext">
    <template #logo>
      <div class="logo" aria-label="dockit-vue" v-html="logoSvg"></div>
    </template>
    <slot></slot>
  </DefaultLayout>
</template>

<script setup lang="ts">
import '@divriots/dockit-vue/style.css';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import { DefaultLayout } from '@divriots/dockit-vue';
import logoSvg from './logo.svg?raw';
// @ts-ignore
import * as docContext from '~doc-context';
</script>

<style lang="scss" scoped>
.logo {
  color: #f8c307;

  > :first-child {
    height: 100%;
  }
}
</style>
