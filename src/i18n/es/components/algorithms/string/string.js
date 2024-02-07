import joinProperties from "@/utils/join-properties";
import classes from "@/utils/classes-definition";

const p1 = {
  a: `Los algoritmos de manipulación de cadenas son esenciales en programación, proporcionando métodos para trabajar eficientemente con datos de tipo cadena. <br> <br>`,
  b: "Dentro de esta categoría, existen diversos algoritmos diseñados para realizar operaciones específicas en cadenas de texto. <br> <br>",
  c: "Veamos algunos de los principales algoritmos de manipulación de cadenas: <br> <br>",
};

const p2 = {
  a: `<p class="${classes.cP2}">Longitud de una Cadena</p>`,
  b: `<p class="${classes.paddingP2}">Calcula la cantidad de caracteres en una cadena dada.</p> <br>`,
  c: `<p class="${classes.cP2}">Concatenación</p>`,
  d: `<p class="${classes.paddingP2}">Combina dos o más cadenas para formar una cadena más larga.</p> <br>`,
  e: `<p class="${classes.cP2}">Subcadena</p>`,
  f: `<p class="${classes.paddingP2}">Extrae una parte específica de una cadena.</p> <br>`,
  g: `<p class="${classes.cP2}">Búsqueda de Subcadena</p>`,
  h: `<p class="${classes.paddingP2}">Determina si una subcadena está presente en una cadena más grande.</p> <br>`,
};

const p3 = {
  a: `Los algoritmos de manipulación de cadenas se utilizan en diversos contextos, incluyendo: <br> <br>`,
  b: `<p class="${classes.cP3}">1. Procesamiento de Texto</p>`,
  c: `<p class="${classes.cP3}">2. Análisis de Datos de Texto</p>`,
  d: `<p class="${classes.cP3}">3. Validación de Entrada</p>`,
  e: `<p class="${classes.cP3}">4. Generación de Informes</p> <br>`,
};

const p4 = {
  a: `En resumen, los algoritmos de manipulación de cadenas son herramientas esenciales en programación, permitiendo operar de manera efectiva con datos de texto. Comprender estos algoritmos y sus aplicaciones es fundamental para desarrolladores y programadores.`,
};

const definirCadenas = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
};

const defCadenas = joinProperties(definirCadenas);

export default defCadenas;
