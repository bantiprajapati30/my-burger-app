// var fun=5;
//  function fun1()
//  {
//      var fun="hyee";
//      console.log(1, fun);
//  }
//  function fun2()
//  {
//      var fun= "byee";
//      console.log(2, fun);
//  }
//  function fun3()
//  {
//      var fun="gn";
//      console.log(3, fun);
//  }
//  console.log("console", fun);
//  fun1();
//  fun2();
//  fun3();

// function moveCommand(direction)
// {
//     var whatHappen;
//     switch(direction)
//     {
//     case "forward" :
//         whatHappen ="Hariom";
//         break;
//         case "back" :
//             whatHappen= "yogesh";
//            break;
//             case "right" :
//                 whatHappen = "sai";
//            break;
//                 case "left" :
//                     whatHappen = "Arpit";
//            break;
//                     default :
//                     whatHappen = "please enter correct input";
//         }
//             return whatHappen;
// }






// const first()=> {
//     const greet = 'Hii';
//     const second= ()=> {
//         alert(greet);
//     }
//     return second;
// }
// const  newFac= first();
// newFac();



// const  compose =(f, g)=> (a)=>f(g(a));
// const sum=(num)=>num+1;
// var n1=compose(sum, sum)(5);
// console.log(n1);




// const array=[1,2,10,16];
// const double=[];
// const newArray= array.forEach((num)=>{
//     double.push(num*2);
// })
// console.log('forEach array'+double);

// // const mapArray = array.map((num)=> {
//     // return num*2;
// //})
// //map array
// const mapArray= array.map(num => num*2);
// console.log('map Array '+mapArray);

// //fiter Array
// const filterArray= array.filter(num=> num>5);
// console.log('fiter array '+filterArray);

// //reduce array

// const reduceArray = array.reduce((accumulator, num)=> {
//     return accumulator+num;
// }, 0);
// console.log('reduce', reduceArray);



                //instantiation

                //via class
// class player
// {
//     constructor(name, type)
//     {
//         console.log(this);
//         this.name=name;
//         this.type=type;
//     }
//     introduce()
//     {
//         console.log(`Hi  iam ${this.name}, i am a ${this.type}`);
//     }
// }
// class Wizard extends player
// {
//     constructor(name, type)
//     {
//     super(name, type)
//     console.log('wizard', this);
//     }
//     play()
//     {
//         console.log(`hii i am a ${this.type}`);
//     }
// }
// const wizard1=new Wizard('sandeep', 'Hearer');
// const wizar2=new Wizard('Abhishek','Dark Magic'); 


     //via prototype
//      var player= function(name, type) {
//      this.name=name;
//      this.type=type;
//  }
// player.prototype.introduce =function() {
// console.log(`hii i am ${this.name}, i am a ${this.type}`);
// }

// wizard1=new player('abhishek', 'healer')

// wizard2=new player('sandeep', 'dark magic');
// wizard1.play=function()
// {
//      console.log(`hellooo i am a${this.type}`)
// }
//      wizard2.play= function() {
//      console.log(`hello i am a ${this.type}`);
// }




    //call by reference Example//

let obj= {a: 'a', b: 'b', c: {
     deep: 'hy meri jaan'
}};
let obj2 = Object.assign({}, obj);
let clone= {...obj};
let superClone = JSON.parse(JSON.stringify(obj))
obj.c.deep='tu meri zindgi jahan be';

console.log(obj2);
console.log(obj);
console.log(clone);
console.log(superClone);


const square = (x)=> x**3;
console.log(square(4));

// .padStart()=>space of the before start any string
// .padEnd()=>space of the after ending the string
// 'banti'.padEnd(10);

const fun= (a,b,c,d,)=> {
     console.log(a);
}
fun(6,3,2,4);


let obj3= {
     username0: 'sandeep@123',
     username1: 'abhishek@123',
     username2:'pawan@123'   
}
Object.keys(obj3).forEach((key, index)=> {
     console.log(key, obj3[key]);
})
Object.values(obj3).forEach(value=> {
     console.log(value);
})
Object.entries(obj3).forEach(value=> {
     console.log(value); 
})
Object.entries(obj3).map(value=> {
     return value[1] + value[0].replace('username', '');
})

var basket = ['sandeep', 'abhishek','pawan'];
for(item of 'basket')
{
     console.log(item);       
}


