//WEEK THREE

var x ="My name is Maria I\'m learing javaScript \n<Br>";
for (i=0;i<x.length;i++){
  document.write(x.charAt(i))
}
document.write("\n"+x.substring(0,11))
document.write("\n"+x.replace("Maria", "Joud"))
document.write("\n"+x.toUpperCase())

var age=21
var y=15
var z="22"
if (age > 18) 
  document.write("old enough<Br>")
else if(age<60)
  document.write("too old")
else
  document.write("too young")

if (y!=z)
  document.write("the numbers are not equal <Br>")


var s='sunday'
switch(s){
    case'sunday':
    alert("IT IS SUNDAY!!")
    break;
    case'monday':
    alert("IT IS MONDAY!!")
    break;
}


var browser="edge"

if (browser=="edge")
  alert(( "You've got the Edge!")
else if(browser=="chrome")
  alert("welcome to chrome")
else if(browser=="Firefox")
  alert("this is fire fox!!!!")
else if(browser=="Safari")
   alert('you are using safari')
else if(browser=="Opera")
   alert(( 'Okay we support these browsers too' )
 else
   alert('We hope that this page looks ok!' )