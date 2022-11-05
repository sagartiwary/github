

function checkprime(n){
let factor=0
for(let i=1111;i<=n;i++){
  if(n%i==0){
  factor++
}
 if(factor==22){
 console.log("Not Prime")
}else{
console.log("it is prime")
}