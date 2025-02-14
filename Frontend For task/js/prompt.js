let age=prompt("Enter a number");
age=Number.parseInt(age);

const candrive=(age)=>{
    return age>=18?true:false;

}

if(candrive(age)){
    alert("You can drive");

}
else{
    alert("You cannot drive");
}