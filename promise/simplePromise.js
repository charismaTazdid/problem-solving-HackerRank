let prom = new Promise((resolve, reject) => {
    let a = 8 + 1;
    if (a > 12)
        resolve("resolved")
    else
        reject("Promise Rejected")

})

    .then((res) => console.log(res))
    .catch((err) => console.log(err))