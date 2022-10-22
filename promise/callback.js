//implement a function with callback that behaves like a promise
const user = "Vladimir Putin";
const userLeft = false;
const userWatchMemes = false;

const userObserver = (goodBoyCallback, badBoyCallback) => {
    if (userLeft) {
        badBoyCallback({
            message: `${user} is bad boy, He Left`,
        })
    }
    else if (userWatchMemes) {
        badBoyCallback({
            message: `${user} is not Serious boy, he Watching MEMES instad programming lesson`,
        })
    }
    else {
        goodBoyCallback(`${user} is a fantastic boy.`)
    }
}

const response = (para) => console.log("Success...", para)
const err = (para) => console.log("fail...", para)
userObserver(response, err)

userObserver((res) => {
    console.log("Success...", res)
},
    (err) => {
        console.log("Fail....", err.message)
    }
)

/*
userObserver(success, fail)

function success(res) {
    return console.log("Success....", res)
}
function fail(err) {
    return console.log("Fail.....", err.message)
}
*/
