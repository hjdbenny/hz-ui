<!--
 * @Author: hjd
 * @Date: 2023-04-23 00:17:58
 * @LastEditors: hjd
 * @LastEditTime: 2023-05-01 23:39:17
 * @Description: 
-->
<template>
  <button class="hz-button" :class="buttonStyle">
    <slot></slot>
  </button>
</template>
<!-- <script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'hz-button'
})
</script> -->
<script lang="ts" setup>
import { computed, isVue2, isVue3 } from 'vue-demi';
import './style/index.scss';

// eslint-disable-next-line no-undef
defineOptions({ name: 'hz-button' });

// eslint-disable-next-line
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`hz-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
