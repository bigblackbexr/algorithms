function crearObjetoConPropiedades(...valores) {
  const alfabeto = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const objeto = {};

  for (let i = 0; i < valores.length; i++) {
    const letra = alfabeto[i];
    objeto[letra] = valores[i];
  }

  return objeto;
}

// Ejemplo de uso:
const miObjeto = crearObjetoConPropiedades('primer valor', 'segundo valor', 'tercer valor');
console.log(miObjeto);
