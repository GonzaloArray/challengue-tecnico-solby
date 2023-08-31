import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useItemStore = defineStore('item', () => {
  const a1 = ref(0)
  const a2 = ref(0)
  const matrix = ref(null)
  const rowSymbols = ref([])
  const colSymbols = ref([])
  const rowSum = ref([])

  const currentBatch = ref(10);

  const hasRowAndColumnChanges = computed(() => {
    const newRows = parseInt(a1.value);
    const newCols = parseInt(a2.value);

    return newCols !== (matrix.value ? matrix.value[0].length : 0) || newRows !== (matrix.value ? matrix.value.length : 0);
  });

  const visibleMatrix = computed(() => {
    if (!matrix.value) {
      return [];
    }
    const endIndex = Math.min(currentBatch.value, matrix.value.length);

    return matrix.value.slice(0, endIndex);
  });

  const addRowsAndColumns = () => {
    if (hasRowAndColumnChanges.value) {
      currentBatch.value += 10;
    }
    generateMatrix();
  };

  const generateMatrix = () => {
    const totalRows = parseInt(a1.value)
    const totalCols = parseInt(a2.value)


    const loadedRows = Math.min(totalRows, currentBatch.value)
    const loadedCols = Math.min(totalCols, currentBatch.value)

    matrix.value = Array.from({ length: loadedRows }, () =>
      Array(loadedCols).fill(a1.value / a2.value)
    )
    rowSymbols.value = Array.from({ length: loadedRows }, () => '')
    colSymbols.value = Array.from({ length: loadedCols }, () => '')
    rowSum.value = Array.from({ length: loadedRows }, () => 0)
  }

  const updateMatrix = () => {
    if (hasRowAndColumnChanges.value) {
      currentBatch.value = 10;
      generateMatrix()
    }
    return
  }

  const sumRows = () => {
    for (let i = 0; i < matrix.value.length; i++) {
      const sum = matrix.value[i].reduce((sum, val) => sum + parseFloat(val), 0)
      rowSum.value[i] = sum
    }
  }

  return { a1, a2, matrix: visibleMatrix, rowSymbols, colSymbols, rowSum, generateMatrix, updateMatrix, sumRows, addRowsAndColumns }
})
