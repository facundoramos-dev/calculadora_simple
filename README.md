# calculadora_simple

## Manual de Usuario:

¡Bienvenido al Manual de Usuario de la Calculadora Web! Aquí te explicaremos cómo utilizar esta aplicación para realizar operaciones matemáticas de manera sencilla. No te preocupes si no estás familiarizado con el código; nos enfocaremos en cómo interactuar con la calculadora.

### Interfaz Principal

La interfaz de la calculadora consta de varios elementos que te permiten ingresar operandos, seleccionar operaciones y ver los resultados. A continuación, te presentamos los componentes principales de la interfaz:

#### Campos de Entrada

Verás dos campos de entrada donde puedes ingresar los números que deseas utilizar en tu operación. Estos campos se llaman **"Operando 1"** y **"Operando 2"**. Escribe los números en estos campos antes de realizar una operación. Ten en cuenta que la calculadora esta preparada para recibir números decimales según el sistema de notación ingles, es decir la utilización de un punto (.) para marcar división de la parte decimal de la parte entera.

#### Selección de Operación

Utiliza el menú desplegable para seleccionar la operación matemática que deseas realizar. Puedes elegir entre **suma, resta, multiplicación, división, potenciación, mínimo y máximo**.

- Estas dos ultimas opciones te permite saber cual es el valor **mínimo** o **máximo** entre los operandos ingresado.

#### Botones

La calculadora tiene dos botones:

- **"Limpiar"**: Si necesitas borrar los números ingresados y los mensajes de error, simplemente presiona este botón. Te ayudará a comenzar de nuevo con una nueva operación.
- **"Calcular"**: Una vez que hayas ingresado los números y seleccionado la operación, pulsa este botón para obtener el resultado de la operación.

### Realizar una Operación

Sigue estos pasos para realizar una operación matemática:

1.  Ingresa un número en el campo "Operando 1".
2.  Selecciona una operación del menú desplegable.
3.  Ingresa otro número en el campo "Operando 2".
4.  Presiona el botón "Calcular" para obtener el resultado.

### Resultados y Mensajes de Error

Una vez que hayas presionado "Calcular", verás el resultado de la operación en el campo de texto debajo de los botones. Si todo está correcto, verás el resultado numérico. Sin embargo, si hay algún error en los valores ingresados o en la operación, verás un mensaje de **error** marcado de color rojo en lugar del resultado, con un breve descripción del error generado.

### Notas Importantes

- Si deseas borrar los campos de entrada y los mensajes de error, simplemente presiona el botón **"Limpiar"**.
- Si observas mensajes de error, asegúrate de revisar los valores ingresados y la operación seleccionada para corregir cualquier error.
- La calculadora te brindará indicaciones si cometes algún error, como ingresar valores no numéricos o dividir por cero.

**\*¡Listo!** Ahora estás listo para usar la Calculadora Web y realizar operaciones matemáticas de manera rápida y fácil. Si tienes alguna pregunta o encuentras algún problema, no dudes en consultar a alguno de nuestros expertos o enviar tus dudas a facundoramos.dev@gmail.com.*

_¡Disfruta calculando!_

## Manual Tecnico:

Este es el código de una calculadora web que te permite realizar diversas operaciones matemáticas en línea. A continuación, te proporciono una descripción detallada de cómo funciona este código:

### Archivo HTML (`index.html`):

Este archivo contiene la estructura de la página web y define la interfaz de la calculadora. Se incluyen campos de entrada para los operandos y la operación, así como botones para realizar cálculos y limpiar los campos.

1.  **Campos de Entrada y Selección de Operación**:

    - Hay dos campos de entrada (`input`) donde puedes ingresar los operandos (`number1` y `number2`).
    - Hay un menú desplegable (`select`) llamado `options` que te permite seleccionar la operación matemática que deseas realizar.
    - Los valores de las operaciones se identifican con números del 1 al 7, cada uno asociado con una operación específica.

2.  **Botones y Resultado**:

    - Hay dos botones (`button`):
      - "Limpiar" (`handleReset()`) se utiliza para restablecer los campos de entrada y los mensajes de error.
      - "Calcular" (`handleOperation()`) se utiliza para realizar la operación matemática seleccionada.
    - Hay un campo de texto (`input`) llamado `resultOperation`, donde se mostrará el resultado de la operación o mensajes de error.

### Archivo JavaScript (`index.js`):

Este archivo contiene la lógica detrás de la calculadora, incluidas las funciones que realizan las operaciones matemáticas, validaciones y manejo de eventos.

1.  **Función `handleReset()`**:

    - Restablece los campos de entrada y borra los mensajes de error en caso de que existan.

2.  **Función `handleOperation()`**:

    - Obtiene los valores de los operandos y la operación seleccionada.
    - Realiza validaciones en los campos de entrada usando `fieldValidation()`.
    - Si no hay errores, realiza la operación matemática usando `solveOperation()`.
    - Realiza validaciones de rango en el resultado usando `rangeValidation()`.
    - Muestra el resultado calculado o mensajes de error en el campo de resultado.

3.  **Objeto `operations`**:

    - Contiene funciones para realizar diversas operaciones matemáticas como suma, resta, multiplicación, división, potenciación, mínimo y máximo.

4.  **Función `solveOperation()`**:

    - Toma los operandos y la operación, los convierte a números y realiza la operación correspondiente utilizando el objeto `operations`.

5.  **Función `fieldValidation()`**:

    - Valida los campos de entrada (`number1` y `number2`) para asegurarse de que no estén vacíos, sean números y tengan un formato decimal válido.
    - Detecta errores como divisiones por cero en caso de ser una división.

6.  **Funciones `isLargeScientificNotation()` y `isSmallScientificNotation()`**:

    - Verifican si un número está en notación científica grande o pequeña.

7.  **Función `rangeValidation()`**:

    - Valida si el resultado de la operación se encuentra dentro de un rango determinado.
    - Muestra mensajes de error si el resultado es demasiado grande o demasiado pequeño.

Casos de prueba:
| operando1 | operación | operando2 | esperado | obtenido|
|--|--|--|--|--|
| 100| ^ |52| Error |El resultado es demasiado grande|
|100 | \* | 0.1 | 10 | 10 |
| .0.01 | + | 10 | Error | Formato decimal invalido|
| 1 | + |1|2|2|

### Archivo CSS (`index.css`):

Este archivo contiene estilos para dar formato visual a la calculadora, como diseño, colores y espaciado de elementos.
