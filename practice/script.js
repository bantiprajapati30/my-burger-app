// 3+4;
// {
//     if(3+4===7)
//     {
//         alert("hello");
//     }
// }
// var firstName= prompt("first name");
// var SecondName=prompt("second name");
// var sum = Number(firstName) + Number(SecondName);
// alert(sum);
function sing(song)
{
    console.log(song);
}
sing("tera hone lgaaa hu");
sing("tere sang yaaraaaaa");
var song= function()
{
    console.log("hello");
}
song();
 var a = function(a, b)
{
    if(a>10|| b>10)
    {
        return "thats to hard number"
    }
    else{
        return a*b;
    }
}
alert(a(6, 4));
 
// function multiply(a,b)
// {
// return a*b;
// }
// alert(multiply(3,6));
var list=["sandeep", "abhishek", "pawan","rakesh","ravi"];
list.sort();
list.reverse();

var user = {
    name : "sandeep",
    age : 22,
    isMarried : false,
    spall : ["mama","chacha","dada","nana"],
    sound : function()
    {
        console.log("abe saale");
    }
};
user.hieght=21;
user.sound();
var newList1 = [
     {
    username:"sandeep@123",
    password:"pooja"
     },
{
    username:"abhishek",
    password:"zeib"
}
];
console.log(newList1[1].password);