var firstName= 'Banti';
var age= '16';

var drink= age>=18 ? 'beer':'juice' ;
console.log(firstName+ ' drink '+drink);

var job = 'diver';
 switch(job) {
     case 'teacher':
         console.log(firstName+ ' teaches javaScript');
         break;
     case 'driver':
         console.log(firstName+ ' how to drive car');
         break;
     case 'actor':
         console.log(firstName+ ' how to play acting');
         break;
    default :
        console.log('please write poosible value');    
 }



 switch(true) {
  case age<=14 :
      console.log(firstName+' a boy');
      break;
  case age >14 && age<20 :
      console.log(firstName+ ' a teeneger.');
      break;
  case age>=20 && age<30 :
      console.log(firstName+ ' a young man');
      break;
  case age>=30 :
      console.log(firstName+ ' a man');
      break;
  default :
     console.log('please enter the right age');
    }
    console.log('\n')
    function calculateAge(birthYear) {
      return 2020-birthYear;
    }
    var age = calculateAge(1997);
    console.log(age);

    console.log('\n');
    function retirementyear(firstName, year) {
        var age= calculateAge(year);
        var retire= 65-age;
        if(age<65) {
        console.log(firstName+ ' retires is '+retire+ ' years.');
        }
        else
        console.log(firstName+' is also retires');
    }
    retirementyear('Ram', 1989);
    retirementyear('Sandeep', 1956);
    retirementyear('Abhishek', 1938);
    console.log('\n');

    //expression
    var whatDo= function(job, firstName) {
        switch(job) {
            case 'teacher' :
                return firstName+' teaching';
            case 'driver' :
                return firstName+' driving';
            case 'designer':
                return firstName+ ' designing';
            default :
                return firstName+' does somthing else';
        }
    }
    console.log(whatDo('teacher', 'sandeep'));
    console.log(whatDo('driver', 'sandeep'));
    console.log(whatDo('actor', 'sandeep'));
    console.log(whatDo('designer', 'sandeep'));
   
     var john = {
         firstName : 'banti',
         birthYear: 1997,
         family : ['papa', 'bhiya', 'mummy', 'didi'],
         college : 'TIT',
         calcAge : function() {
            this.age= 2020-this.birthYear;
        }
     };
     john.calcAge();
     console.log(john);

     
     var banti=new Object();
     banti.firstName='banti';
     banti['family']='mumy','nana';
     banti.age=23;
    
    var san = {
        fullName: 'Sandeep',
        hieght: 1.12,
        mass: 52,
        calBMI :function() {
         this.bmi=this.mass/(this.hieght*this.hieght)
         return this.bmi;
        }
    }
    var abhi= {
        fullName: 'Abhishek',
        hieght: 1.12,
        mass: 51,
        calBMI :function() {
         this.bmi=this.mass/(this.hieght*this.hieght)
         return this.bmi;
        }
    }
    san.calBMI();
    abhi.calBMI();
    console.log('sandeep ' +san.calBMI());
    console.log('abhishek '+abhi.calBMI());
   if(abhi.calBMI>san.calBMI) {
       console.log(abhi.fullName+' higher than sandeep');
   }
   else if(san.calBMI>abhi.calBMI) {
      console.log(san.fullName+' higher than Abhishek');
   }  
   else
      console.log('both are same');

var name= 'banti';

function first() {
    var a='hello ';
    second();
    var z= a+name;
    console.log(z);
}
function second() {
    var b='hii ';
    third();
    var z= b+name;
    console.log(z);
}
function third() {
    var c='hey ';
    var z=c+name;
    console.log(z);
}
first();

var a='hello'
first();

function first() {
    var b='hey!'
    second();
     
    function second() {
        var c= 'Hii bro!'
        third();
        console.log(b)
    }
}
function third() {
    var d='sbki aysi tysi'
    console.log('h');
}
 