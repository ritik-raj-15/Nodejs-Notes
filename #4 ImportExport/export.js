const add=(x,y)=>x+y 
const sub=(x,y)=>x-y
const name = "Node";
module.exports={add,sub,name};
// module.export requires object and returns the object to import file;

//to export only one variable;
//module.exports=add;

//Another way to export but its time consuming and not efficient;
//module.exports.add=add;
//module.exports.sub=sub;
//module.exports.name=name;