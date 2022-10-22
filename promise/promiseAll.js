const promiseToGf = new Promise((resolve, reject) => {
    resolve("Next year we will go Cox's Bazar")
})


const promiseToJustFriend = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Next year we will go Darzeling!")
    }, 1000)
    // resolve("Next year we will go Darzeling!")

})

const promiseToFriend = new Promise((resolve, reject) => {
    resolve("Let's have a trip to Bandarban")
})

const anotherPro = new Promise((resolve, reject) => {
    let num = 5;
    if (num > 10) {
        resolve("Yes Resolved. ")
    }
    reject("No, Rejected.")
})
    .then(res => console.log(res)).catch(err => console.log(err))

Promise.all([
    promiseToJustFriend,
    promiseToGf,
    promiseToFriend,
]).then(messages => console.log(messages))

Promise.race([
    promiseToJustFriend,
    promiseToFriend,
    promiseToGf,
]).then(message => console.log(message))


Promise.all([
    promiseToJustFriend,
    promiseToGf,
    promiseToFriend,
    anotherPro //it will be undefined.
]).then(messages => console.log(messages))