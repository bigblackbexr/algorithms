function joinProperties(obj, separator = ' ') {
  return Object.keys(obj).map(key => obj[key]).join(separator);
}

export default joinProperties;
