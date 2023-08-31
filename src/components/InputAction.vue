<script setup>

  defineProps({
    text: Number,
    title: String
  })
  const emit = defineEmits(['update:text'])

  function emitValue(e) {
    emit('update:text', parseInt(e.target.value))
  }

</script>
<template>
  <div class="label-css">
    <label for="text">{{ title }}</label>
    <input :value="text" @input="emitValue" type="number" required min="0" />
  </div>
</template>
<style scoped>
  .label-css{
    display: flex;
    flex-direction: column;
    gap: .4rem;
  }

  .label-css label{
    color: black;
    font-weight: bold;
    font-size: 2rem;
  }

  .label-css input{
    padding: 2rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    font-size: 2rem;
    width: 100%;
  }
</style>