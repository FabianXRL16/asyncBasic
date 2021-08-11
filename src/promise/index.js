const example1 = () => {
    return new Promise((resolve, reject) => {
        true ? resolve("Good!") : reject("Bad!")
    })
}

example1()
    .then(response => console.log(response))
    .catch(error => console.error(error))