let p=fetch("http://20.244.56.144/numbers/primes")
p.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})
