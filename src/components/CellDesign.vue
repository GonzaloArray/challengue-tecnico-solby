<script setup>
defineProps({
  value: Number
})
</script>

<template>
  <td :style="{ backgroundColor: value > 5 ? '#7c7516' : 'black' }">
    <slot/>
  </td>
</template>

<style scoped>
td {
  border: 1px solid #46494C;
  font-size: 2rem;
  background-color: transparent;
  text-align: center;
}
</style>