
function office(callback,callback2)
{
console.log('New emplyoee joined ')
callback(callback2);

}
office((emplyoyee)=>
{
    console.log('EmplyoyeeDetails are ',emplyoyee)
},{name:'Akshay',age: 29,role:'QAautomation'})


//
let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;

function calci(callback,a,b)
{
    console.log('doing the calculation')
    return callback(a,b);
}
let adding=calci(add,12,6);
console.log(adding);

let substract=calci(sub,20,6);
console.log(substract);

  
