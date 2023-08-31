<script setup>
import { ref } from 'vue'
import ButtonAction from '../components/ButtonAction.vue';
import FormAction from '../components/FormAction.vue'
import TableDesign from '../components/TableDesign.vue'
import { useItemStore } from '../store/useItemStore';
const disabledButton = ref(false)
const item = useItemStore()
</script>

<template>
  <main class="main-css">
    <FormAction v-model:disabledButton="disabledButton" />
    <div class="main-button-css">
      <ButtonAction :disabledButton="disabledButton" :handleClick="item.updateMatrix">Actualizar Matriz</ButtonAction>
      <ButtonAction :disabledButton="disabledButton" :handleClick="item.sumRows">Sumar Filas</ButtonAction>
    </div>
  </main>
  <div class="main-css-intersection" v-if="disabledButton">
    <TableDesign />

    <ButtonAction :disabledButton="true" :handleClick="item.addRowsAndColumns">+</ButtonAction>
  </div>
</template>

<style scoped>
  .main-css{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-top: 6rem;
    grid-column: 1/3;
    background-color: #3f478a;
    padding: 2rem;
    border-radius:.4rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    margin-inline: auto;
  }

  .main-button-css{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .main-css-intersection{
    margin: 4rem 0;
    display: flex;
    gap: 2rem;
    align-items: center;
    grid-column: 1/3;
  }
</style>
