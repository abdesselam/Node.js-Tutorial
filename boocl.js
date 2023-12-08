setTimeout(()=>{
    console.log('---setTimeout 1000')
},1000)
setTimeout(()=>{
    console.log('---setTimeout')
},0)
let j=0;
for(let i=0; i<10000000; i++){
    j++;
}
console.log('---j-',j)
let jj=0;
for(let i=0; i<10000000; i++){
    jj++;
}
console.log('---jj-',jj)