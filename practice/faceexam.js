var database= [
     {
         username :"banti",
         password :"sandeep"
     },
     {
        username :"rajkumar",
        password :"papa"
    },
    {
        username :"Neha",
        password :"mummy"
    }
];
var newFeed =[
    {
        username : "sandeep",
        timeline :"javascrpit is very funny"
    },
    {
        username: "abhishek",
        timeline:"kya bakbas page hai yaar!"
    }
];
function validate(username, password)
{
    for(var i=0;i<database.length;i++)
    {
        if(username === database[i].username && password === database[i].password)
            {
                return true;
            }
    }
    return false;
}
function singIn(username, password)
 {
   if(validate(username, password))
   {
       console.log(newFeed);
   }
   else{
       alert("sorry wrong username or password")
   }
 }
 function signIn(username, password)
 {
   if(validate(username, password))
   {
       console.log(newFeed);
   }
   else{
       alert("sorry wrong username or password")
   }
 }
var usernameprompt = prompt("enter username");
var passwordprompt= prompt("enter password");

signIn(usernameprompt, passwordprompt); 