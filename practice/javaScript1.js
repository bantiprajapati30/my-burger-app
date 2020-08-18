/*var massMark =91;
var heightMark = 1.25;

var massJohn =84;
var heightJohn =2.25;

var BMIMark = massMark/(heightMark*heightMark);
var BMIJohn = massJohn/(heightJohn*heightJohn);
console.log(BMIMark, BMIJohn);

var result = BMIMark>BMIJohn;
console.log('mark\'s bmi is havey then john\'? '+result);*/






/*var johnScore = (113+103+120)/3;
var markScore=(116+94+123)/3;
var marryScore=(97+128+105)/3;
console.log("john score="+johnScore+" , mark score=" +markScore+ " , marry score="+marryScore);

if(johnScore>markScore&&johnScore>marryScore)
{
    var diff
    console.log('john win the match');
}
else if(markScore>johnScore&& markScore>marryScore)
{
    console.log('mal win the match');
}
else if(marryScore>markScore&& marryScore> johnScore)
{
    console.log('marry win the match');

}
else
console.log("match tied");*/





/*if(johnScore>markScore)
{
var diff=johnScore-markScore;
console.log('john win the match '+diff+" points");
}
else if(markScore>johnScore)
{
    var diff=markScore-johnScore;
    console.log("mark win the match by "+diff+" points")
}
else
{
    console.log('match tied');
}*/





//Array Example
/*var names=['sandeep', 'abhishek','rishi'];
var years = [1997, 1998, 1999];

names[names.length]='pawan';
console.log(names);
console.log(names.length);
console.log(years);*/




//challenge3
/*function tipCal(bill)
{
    var per;
    if(bill<=50)
    {
       per=.2;
    }
    else if(bill>50 && bill<=200)
    {
         per=.15;
    }
    else if(bill>200)
    {
        per=0.1;
    }
    else
    {
        console.log("please enter numeric values");
    }
    return per*bill;
}
var bill = [130, 45, 260];
var tip = [tipCal(bill[0]), tipCal(bill[1]), tipCal(bill[2])];
console.log(tip);*/






/*var name=' john';
function first()
{
    var a='hello';
    second();
    var x=a+name;
    console.log(x);
}
function second()
{
    var b='hii';
    third();
    var z=b+name;
    console.log(z);
}
function third()
{
    var c='hey';
    var z=c+name;
    console.log(z);
}
first();*/








// const name ='sandeep';
// const age= 34;
// const fav = 'blue';

// const greeting = `Hello ${name} you seem to be ${age-12}. and you favrite color ${fav}`

// const add =(a, b)=> a+b;
const sym1 = Symbol();
const sym2= Symbol('foo');
const sym3= Symbol('food');

