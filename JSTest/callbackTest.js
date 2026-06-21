
function office(callback,callback2)
{
console.log('New emplyoee joined ')
callback(callback2);

}
office((emplyoyee)=>
{
    console.log('EmplyoyeeDetails are ',emplyoyee)
},{name:'Akshay',age: 29,role:'QAautomation'})