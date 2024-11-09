import typeInfer from './typeInfer';
const values =[
  42,
  "hello world !"
  ,
  true,
  null,
  {name:"Alice"}
,
  [1,2,3],
  new Date(),
  /regex/
  ,
  function(){}
  ]

values.forEach(value =>  console.log(`${JSON.stringify(value)} is of type : ${typeInfer(value)}`)
