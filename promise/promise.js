//let's implement callback.js logic with Promise

const user = "Vladimir Putin";
const userLeft = false;
const userWatchMemes = false;

const userObserver = () => {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                message: `${user} is bad boy, He Left`,
            })
        }
        else if (userWatchMemes) {
            reject({
                message: `${user} is not Serious boy, he Watching MEMES instad programming lesson`,
            })
        }
        else {
            resolve(`${user} is a fantastic boy.`)
        }
    })

}



userObserver()
    .then(res => console.log(res))
    .catch(err => console.log(err))