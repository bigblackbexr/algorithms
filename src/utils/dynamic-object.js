function getDynamicObject(values) {
  const dynamicObject = {};

  values.forEach((value, index) => {
    dynamicObject[`property${index + 1}`] = value;
  });

  return dynamicObject;
}

export default getDynamicObject
