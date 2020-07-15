var fruits = "healthy";
console.log(fruits)
//This var element is used to define a variable in global scope of code block

{
  let fruits = "costly";
  console.log(fruits)
  //This let element is used to define and replace the variable just inside the local scope of code block
}
console.log(fruits)

const name1 = ["Vijay","Sanjiv"];
console.log(name1)
name1.push("Yamini");
console.log(name1)

name1 = ["Yamini","Sanjiv","Vijay"];
//This const element is used to hld the defined value to the variable and it cannot change the value.
//It it tends to be changed, then the console view will throw an error message