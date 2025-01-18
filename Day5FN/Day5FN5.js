//Task5:Grades


const a=prompt("Enter mark:");
if(a>=90 && a<=100){
    console.log(a+" O grade");
}else if(a>=80 && a<90){
    console.log(a+" A grade");
}
else if(a>=70 && a<80){
    console.log(a+" B grade");
}
else if(a>=60 && a<70){
    console.log(a+" C grade");
}
else if(a>=50 && a<60){
    console.log(a+" D grade");
}
else if(a<50){
    console.log("Fail");
}
else{
    console.log("Invalid");
}
