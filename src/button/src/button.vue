<template>
  <button
    :class="[
      'py-2',
      'px-4',
      'font-semibold',
      'rounded-lg',
      'shadow-md',
      'text-white',
      `bg-${props.color}-500`,
      `hover:bg-${props.color}-700`,
      'border-none',
      'cursor-pointer',
    ]"
  >
    <i :class="['p-3', `i-ic-baseline-${props.icon}`]" v-if="props.icon"></i>
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "HButton",
};
</script>

<script lang="ts" setup>
import { buttonprops } from "./props";
const props = defineProps(buttonprops);
</script>
