import bbb from "./bbb.js";
import {name,age,abc}  from "./ccc.js"

//bbb的数据
console.log(bbb.name);
console.log(bbb.age);
if(bbb.flag){
  bbb.abc();
}

//ccc的数据
console.log(name);
console.log(age);
abc();
