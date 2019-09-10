var count =0;
while (count < 5) {
document.write(count) 
count++
}
document.write("<Br>")
//////////////////

var count2 =4;
do {
document.write(count2)
 count2++;
}while (count2 < 8);
document.write("<Br>")
//////////////////

for (i=0;i<4;i++){
  document.write(i+2)
}
document.write("<Br>")
//////////////////

for( j = 0; j < 10; j++) {
document.write("MARIA <br>")
if (j==3) 
  break;
}
///////////////////
var h = 0;
while (h < 5) {
  
 if (h == 2) {

   document.write("this continue skips -2-  ")
   h++;
 continue;
 }
  
    document.write(h+" ")
h++;
}
/////////////////////////////////
var z=0;
var d=0;
for (var f=0;f<5;f++){
  
  checkz: while (z<4){
    document.write("first while loop<Br>")
    if (z==3)
      break checkz;
  z++;
  }
  
  checkd: while(d<3){
    document.write("second while loop<Br>")
    if (d==2){
       d++;
      continue checkd;
    }
   d++;
  }
}