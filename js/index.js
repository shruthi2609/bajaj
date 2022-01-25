/*console.log("test")
const a=12.23
let b=`String ${a}`
let prno="23"
prno= Number(prno)
//console.log(prno)
const res=String(a)
console.log(res)

//console.log(typeof String(a))

let arr=[20,30,"output",true]
console.log(arr[0])*/

let obj=[
{
    prname:"XYZ",
    prprice:20,
    license:"license MIT"
},
{
    prname:"abc",
    prprice:21,
    license:"license MIT 1.0"
},
{
    prname:"ABC",
    prprice:22,
    license:"license MIT 2.0"
}
]
obj.map((i)=>{
   if(i.license!="license MIT 2.0"){
       console.log(i.prname)
   }
})
//find filter transform push pop shift unshift
// 



