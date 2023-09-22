var a=[];
var n=parseInt(prompt("enter the size of the array"));

for (let i=0; i<n;i++){
    a[i]=parseInt(prompt("enter the number"));
}
document.write("given array is="+a+"<br>");

var b=prompt("enter the position to delete the element");
a.splice(b,1);
document.write(a);