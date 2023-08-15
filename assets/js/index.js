// Función que restablece los campos de entrada y mensajes de error.
const handleReset = () => {
  // Seleccionar campos de entrada y mensajes de error
  const field1 = document.querySelector("[name='number1']");
  const field2 = document.querySelector("[name='number2']");
  const field3 = document.querySelector("#resultOperation");
  const error1 = document.querySelector("#number1error");
  const error2 = document.querySelector("#number2error");
  const error3 = document.querySelector("#number3error");

  // Limpiar valores de campos de entrada y mensajes de error si existen
  field1 && (field1.value = "");
  field2 && (field2.value = "");
  field3 && (field3.value = "");
  error1 && (error1.innerHTML = "");
  error2 && (error2.innerHTML = "");
  error3 && (error3.innerHTML = "");
};

// Función que realiza operaciones matemáticas.
const handleOperation = () => {
  // Obtener valores de los campos de entrada y la operación seleccionada
  const n1 = document.querySelector("[name='number1']").value;
  const n2 = document.querySelector("[name='number2']").value;
  const operation = document.querySelector("#options").value;

  // Realizar validaciones en los campos de entrada
  let containErrors = fieldValidation(n1, n2, operation);

  let result = NaN;
  if (!containErrors) {
    // Resolver la operación si no hay errores en los campos
    result = solveOperation(n1, n2, operation);
    containErrors = rangeValidation(result);
  }

  // Mostrar el resultado o mensajes de error en el elemento de resultado
  const resultElement = document.querySelector("#resultOperation");
  resultElement.value = containErrors ? " - " : result;
};

// Objeto con funciones para realizar diferentes operaciones matemáticas
const operations = {
  1: (n1, n2) => n1 + n2,
  2: (n1, n2) => n1 - n2,
  3: (n1, n2) => n1 * n2,
  4: (n1, n2) => n1 / n2,
  5: (n1, n2) => Math.pow(n1, n2),
  6: (n1, n2) => Math.min(n1, n2),
  7: (n1, n2) => Math.max(n1, n2),
};

// Función para resolver una operación matemática utilizando el objeto "operations"
const solveOperation = (n1, n2, operation) => {
  n1 = Number(n1);
  n2 = Number(n2);
  operation = Number(operation);

  return operations[operation]?.(n1, n2) ?? NaN;
};

// Función para validar los campos de entrada
const fieldValidation = (n1, n2, operation) => {
  const error1 = document.querySelector("#number1error");
  const error2 = document.querySelector("#number2error");
  const error3 = document.querySelector("#number3error");

  error1.innerHTML = "";
  error2.innerHTML = "";
  error3.innerHTML = "";

  // Detección de campos vacíos
  if (n1.trim() === "") error1.innerHTML = "Campo vació";
  // Detección de valores no numéricos
  if (isNaN(Number(n1) ?? NaN)) error1.innerHTML = "Solo se admiten números";
  // Detección de formato decimal invalido
  if (n1.split(".").length > 2) error1.innerHTML = "Formato decimal invalido";

  // Detección de campos vacíos
  if (n2.trim() === "") error2.innerHTML = "Campo vació";
  // Detección de valores no numéricos
  if (isNaN(Number(n2) ?? NaN)) error2.innerHTML = "Solo se admiten números";
  // Detección de formato decimal invalido
  if (n2.split(".").length > 2) error2.innerHTML = "Formato decimal invalido";
  // Detección de division por cero
  if (Number(operation) === 4 && Number(n2) === 0) {
    error2.innerHTML = "Dividendo debe ser distinto de 0";
    error3.innerHTML = "Operación no Valida";
  }

  // Return Tru si encuentra alguna detección de error.
  return (
    error1.innerHTML !== "" ||
    error2.innerHTML !== "" ||
    error3.innerHTML !== ""
  );
};

// Función para validar el rango del resultado
const rangeValidation = (result) => {
  if (isNaN(result)) return true;
  const error3 = document.querySelector("#number3error");
  error3.innerHTML = "";
  // Detección de numero pequeño
  if (isSmallScientificNotation(result))
    error3.innerHTML = "El resultado es demasiado pequeño";
  // Detección de numero grande
  if (isLargeScientificNotation(result))
    error3.innerHTML = "El resultado es demasiado grande";
  return error3.innerHTML != "";
};

// Funciones para verificar notación científica de números grandes
const isLargeScientificNotation = (n) => /[eE][+]?\d+$/.test(n.toString());
// Funciones para verificar notación científica de números pequeños
const isSmallScientificNotation = (n) => /[eE][-]?\d+$/.test(n.toString());
