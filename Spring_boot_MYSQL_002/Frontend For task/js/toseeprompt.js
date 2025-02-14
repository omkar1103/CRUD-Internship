

let runagain=true;
const candrive=(age)=>{
    return age>=18?true:false;

}

while(runagain){
    let age=prompt("Enter a number");
age=Number.parseInt(age);
if(age<0){
    console.error("Enter your age properly");
    break;
}



if(candrive(age)){
    alert("You can drive");

}
else{
    alert("You cannot drive");
}
runagain=confirm("Do you want to run again");
}