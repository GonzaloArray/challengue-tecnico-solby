<script setup>
import { useItemStore } from '../store/useItemStore'
import CellDesign from './CellDesign.vue';
const item = useItemStore()


</script>

<template>
  <table class="animate__animated animate__fadeIn">
    <tr>
      <td></td>
      <CellDesign v-for="(col, colIndex) in item.matrix[0]" :key="colIndex" class="input-row">
        <input class="input-symbol" v-model="item.colSymbols[colIndex]" />
      </CellDesign>
    </tr>
    <tr v-for="(row, rowIndex) in item.matrix" :key="rowIndex">
      <CellDesign class="input-row">
        <input class="input-symbol" v-model="item.rowSymbols[rowIndex]" />
      </CellDesign>
      <CellDesign v-for="(value, colIndex) in row" :key="colIndex" :value="value">
        {{ colIndex === row.length ? item.rowSum[rowIndex] : item.rowSymbols[rowIndex] + ' - ' + item.colSymbols[colIndex]
          + ' - ' +
          value }}
      </CellDesign>
      <CellDesign :style="{ padding: '0 3rem' }">
        {{ item.rowSum[rowIndex] }}
      </CellDesign>
    </tr>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  border: 1px solid #46494C;
}

.input-row {
  color: black;
  width: 150px;
}

.input-symbol {
  width: 100%;
  height: 100%;
  font-size: 2.5rem;
}
</style>