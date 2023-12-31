## Documentación de Uso - Almacenamiento de Elementos

Este documento describe las funcionalidades y el uso del almacén de datos "Item" implementado con la biblioteca **Pinia** y **Vue 3**. El almacén proporciona capacidades para gestionar matrices y símbolos de filas y columnas, junto con funcionalidades para agregar filas y columnas, generar matrices y calcular sumas de filas.

### Instalación

Asegúrate de que ya tienes instaladas las bibliotecas **Pinia** y **Vue 3** en tu proyecto. Luego, puedes importar y usar el almacén de datos "Item" como se muestra a continuación:

```javascript
import { useItemStore } from './path-to-item-store'
```

### Propiedades

- **a1** (ref): Un valor numérico que representa la primera dimensión de la matriz.
- **a2** (ref): Un valor numérico que representa la segunda dimensión de la matriz.
- **matrix** (ref): Una matriz bidimensional generada con valores calculados a partir de a1 y a2.
- **rowSymbols** (ref): Un arreglo de símbolos para las filas de la matriz.
- **colSymbols** (ref): Un arreglo de símbolos para las columnas de la matriz.
- **rowSum** (ref): Un arreglo que almacena las sumas de los valores en cada fila de la matriz.
- **generateMatrix** (método): Genera la matriz en función de los valores actuales de a1 y a2.
- **updateMatrix** (método): Actualiza la matriz si ha habido cambios en las dimensiones.
- **sumRows** (método): Calcula y actualiza las sumas de los valores en las filas de la matriz.

### Propiedades Computadas

- **hasRowAndColumnChanges** (computed): Indica si ha habido cambios en las dimensiones de fila o columna de la matriz.
- **visibleMatrix** (computed): Devuelve una vista limitada de la matriz basada en el valor actual de "currentBatch".

### Métodos

- **addRowsAndColumns** (método): Agrega 10 filas y columnas a la matriz si ha habido cambios en las dimensiones.
- **generateMatrix** (método): Genera la matriz con los valores actuales de a1 y a2.
- **updateMatrix** (método): Actualiza la matriz y restablece "currentBatch" si ha habido cambios en las dimensiones.
- **sumRows** (método): Calcula las sumas de los valores en las filas de la matriz y actualiza "rowSum".

### Uso Básico

```javascript
import { useItemStore } from './path-to-item-store'

const itemStore = useItemStore()

// Actualizar dimensiones de la matriz
itemStore.a1.value = 5
itemStore.a2.value = 3

// Generar la matriz con las dimensiones actuales
itemStore.generateMatrix()

// Calcular sumas de filas
itemStore.sumRows()

// Agregar filas y columnas si es necesario
itemStore.addRowsAndColumns()

// Actualizar la matriz si hay cambios en las dimensiones
itemStore.updateMatrix()
```

### Notas

- Asegúrate de tener importadas las bibliotecas "Pinia" y "Vue" antes de utilizar el almacén.
- Antes de acceder a las propiedades computadas, asegúrate de haber llamado a "generateMatrix()" al menos una vez.

Esta documentación proporciona una descripción general de las funcionalidades y el uso del almacén de datos "Item". Asegúrate de referirte a la documentación oficial de **Pinia** y **Vue** para obtener más información sobre cómo trabajar con almacenes de datos y propiedades reactivas.#   c h a l l e n g u e - t e c n i c o - s o l b y  
 