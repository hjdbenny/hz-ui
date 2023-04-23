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
import { computed } from 'vue';
import './style/index.scss';

// eslint-disable-next-line no-undef
defineOptions({ name: 'hz-button' });
console.log(111);

// eslint-disable-next-line
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`hz-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
