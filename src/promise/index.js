const example1 = () => {
    return new Promise((resolve, reject) => {
        true ? resolve("Good!") : reject("Bad!")
    })
}

example1()
    .then(response => console.log(response))
    .catch(error => console.error(error))

const example2 = () => {
    return new Promise((resolve, reject) => {
        false ? resolve("Goods!!!")
            : reject(new Error("Bad :( !!!"))
    })
}

example2()
    .then(response => console.log(response))
    .catch(error => console.error(error))

Promise.all([example1(), example2()])
    .then(response => console.log(response))
    .catch(error => console.error(error))