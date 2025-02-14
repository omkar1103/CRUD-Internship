let n=prompt("Enter a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

const sum=arr.reduce((prev,cur)=>{
         return prev+cur;
})
console.log(sum);
const prod=arr.reduce((prev,cur)=>{
    return prev*cur;
})
console.log(prod);
