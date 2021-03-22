var userName 
userName= prompt("whats your name ?");
console.log(userName);


if (userName == ''){
    var userName= prompt("Please enter Name");
   }
   
else {
    alert("Welcome  "+ userName)
  }

var age;
age = prompt("whats your age");
var ageFunction = function(age){
  console.log(age);
  if (age >= 18 ) {
    alert('welcome to the site');
  }else if (age < 18) {
     alert('sorry your not allowed');
     while (age <= 17){
     age = prompt("whats your age again");
    }
 }else {
    alert('please input a number');
   }
 
}
 ageFunction(age);

var x,y,result;

function myFunction(){
  x = prompt("Insert the first car name")
  y = prompt("Insert the second car name")
  result = (x + '  ' + y);
  alert ("Your cars = " + result)
  console.log(result);

}
var carType= prompt("what type of car you want ?");

function getCarFunction(){
  
  while(carType !=='Mercedes' && carType !=='Ferrari' && carType !== 'Ford')
     {
       carType = prompt('please insert car name');
     }
  
  var carNum = prompt('how many cars you want');
  
  var pic ='';
  var result='';
  
  if (carType=='Mercedes'){
    pic=('<div style="display: inline-block;"> <img src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80" alt="alternatetext" width="250 px">') ;
    }else if (carType=='Ferrari'){
    pic=('<div style="display: inline-block; padding: 50px;" ><img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="alternatetext" width="250 px">') ;
    }else if (carType == 'Ford'){
    pic=('<div style="display: inline-block;"><img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="alternatetext" width="250 px">');
    }
    console.log(pic);
    for (var j=0;j < carNum;j++){
    result += pic;
  }
  return result
 }
            

            







