let name = "bbb";
let age = 17;
let flag = true;

function abc(){
     console.log("我是bbb.js里面的");
}

export default {            //暴露下列属性,引用的地方可改名
  abc,
  age,
  name,
  flag
}
