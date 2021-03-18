var userName 
userName= prompt("whats your name ?");
document.write('<h3>'+'Hello  '+userName+'</h3>');
console.log(userName);


if (userName == ''){
    var userName= prompt("Please enter Name");
   }
   
else {
    alert("Welcome  "+ userName)
  }


var x,y,result;

function myFunction(){
  x = prompt("Insert the first car name")
  y = prompt("Insert the second car name")
  result = (x + '  ' + y);
  alert ("Your cars = " + result)
  console.log(result);

}


