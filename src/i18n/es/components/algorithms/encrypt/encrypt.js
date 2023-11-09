import joinProperties from '@/utils/join-properties'

const clases = {
  rellenoP2: 'px-12 max-md:px-6',
  colorTextoP2: 'text-red dark:text-pink',
  cP2: 'px-12 max-md:px-6 text-red dark:text-pink',
  cp3: 'px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light'
}

const p1 = {
  a:
    `Un algoritmo de cifrado es un conjunto de instrucciones matemáticas utilizado para codificar información y hacerla ilegible para cualquiera que no tenga la clave de descifrado. <br> <br>`,
  b:
    'Los algoritmos de cifrado se utilizan ampliamente en la seguridad de la información para proteger datos confidenciales contra accesos no autorizados. <br> <br>',
  c:
    'Existen dos tipos principales de algoritmos de cifrado: <br> <br>',
}

const p2 = {
  a:
    `<p class="${clases.cP2}">Cifrado Simétrico</p>`,
  b:
    `<p class="${clases.rellenoP2}"> También conocido como criptografía de clave secreta, utiliza la misma clave para cifrar y descifrar información.
    Este tipo de cifrado se utiliza comúnmente en el almacenamiento de archivos y sistemas de comunicación donde ambas partes comparten una clave secreta,
    como contraseñas o datos personales. </p> <br>`,
  c:
    `<p class="${clases.cP2}">Cifrado Asimétrico</p>`,
  d:
    `<p class="${clases.rellenoP2}"> También conocido como criptografía de clave pública, utiliza una clave pública y una clave privada para cifrar y descifrar información.
    La clave pública se comparte ampliamente y se utiliza para cifrar los datos, mientras que la clave privada se mantiene segura y se utiliza para descifrar los datos.
    Este tipo de cifrado se utiliza comúnmente en la autenticación de usuarios, firmas digitales y transacciones en línea seguras. </p> <br>`,
}

const p3 = {
  a:
    `Los algoritmos de cifrado se utilizan en una amplia variedad de casos de uso, que incluyen: <br> <br>`,
  b:
    `<p class="${clases.cp3}">1. Protección de Datos de Usuario</p>`,
  c:
    `<p class="${clases.cp3}">2. Comunicaciones Seguras</p>`,
  d:
    `<p class="${clases.cp3}">3. Sistemas de Pago en Línea</p>`,
  e:
    `<p class="${clases.cp3}">4. Protección de Archivos y Discos</p> <br>`
}

const p4 = {
  a:
    `En general, los algoritmos de cifrado son una parte importante de la seguridad de la información hoy en día, y su uso es fundamental para proteger la privacidad y confidencialidad de los datos en línea.`
}

const definirCifrado = {
  textoA: joinProperties(p1),
  textoB: joinProperties(p2),
  textoC: joinProperties(p3),
  textoD: joinProperties(p4),
}

const defCifrado = joinProperties(definirCifrado);

export default defCifrado;
