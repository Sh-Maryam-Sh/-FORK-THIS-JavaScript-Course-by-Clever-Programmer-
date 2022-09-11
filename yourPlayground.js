// const doubles = (numbers) => {
//   let result=[]
//   for ( let number of numbers){
//     result.push(number*2)

//   }
//   return result;
// }

// console.log(doubles[1,2,3,4,5,6])
const actors = [
  { name: maryam, networth: 10000 },
  { name: amir, networth: 20000 },
  { name: mina, networth: 30000 }
]

console.log(actors.reduce((prev, curr) => prev + curr.networth, 0))