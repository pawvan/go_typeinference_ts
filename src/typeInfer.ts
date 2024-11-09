type TypeOfValue=
  |"number"
  |"string"
  |"boolean"
  |"null"
  |"undefined"
  |"object"
  |"array"
  |"function"
  |"Date" 
  |"RegExp"
function typeInfer(value:any):TypeOfValue{
if(value===null) return null;
  if(Array.isArray(value)) return 'array'
  if(typeof value === 'function') return 'function'
  if(value instanceof Date)  return "Date"
  if(value instanceof RegEx) return "RegExp"
  return typeof value as TypeOfValue;

}
exort default typeInfer;
