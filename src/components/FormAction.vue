<script setup>
import InputAction from './InputAction.vue';
import { useItemStore } from '../store/useItemStore'
const item = useItemStore()

defineProps({
  disabledButton: Boolean
})

const emit = defineEmits(['update:disabledButton'])


const handleEventForm = () => {
  item.generateMatrix()
  emit('update:disabledButton', true)
}

</script>

<template>
  <form class="form-css" @submit.prevent="handleEventForm">
    <InputAction v-model:text="item.a1" title="Col A1" />
    <InputAction v-model:text="item.a2" title="Col A2" />

    <button :style="{ opacity: disabledButton ? '.5' : '', cursor: disabledButton ? 'not-allowed' : 'pointer' }"
      :disabled="disabledButton" class="btn-submit" type="submit">Generar Matriz</button>
  </form>
</template>

<style scoped>
.form-css {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.btn-submit {
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