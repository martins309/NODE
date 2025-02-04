const array = [1,2,3,4,5]


const spread = () => {

}

const object = {
    name: "chicken",
    age: 666,
    power: "frying chicken with my nails"
}

//the spread can copy objects
const copied = {...object}
console.log(copied)

const rest = (...args) => {
   return args
    
}
console.log(rest([1,2,3,43]))
