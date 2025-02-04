const fetchMe = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("AHHHH")
    }, 3000)
    }) 
    return promise
}


setTimeout(() => {
    console.log("look at me!!!!")
    fetchMe()
    .then(text => {
        console.log(text)
        return fetchMe()
    })
    .then(text2 => {
        console.log(text2)
    })
}, 3300);



console.log("sup slut")
console.log("yooooo")