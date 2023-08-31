<script setup>

const props = defineProps({
  handleClick: Function,
  disabledButton: Boolean
})


</script>

<template>
  <button
    :style="{ opacity: !props.disabledButton ? '.5': '', cursor: !props.disabledButton ? 'not-allowed' : 'pointer' }"
    :disabled="!props.disabledButton"
    @click="props.handleClick"
    class="btn-action">
    <slot/>
  </button>
</template>

<style scoped>
  .btn-action{
    background-color: #262626;
    padding: 2rem;
    border-radius: 1rem;
    color: white;
    font-size: 1.6rem;
    cursor: pointer;
    transition: 1s ease-in-out;
    text-transform: uppercase;
  }
</style>