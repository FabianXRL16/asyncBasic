const getDataPromise = () => {
    return new Promise((resolve, reject) => {
        true ? resolve("Good!!!") : reject(new Error("Bad!!!"))
    })
}

const getData = async () => {
    try {
        const resp = await getDataPromise()
        console.log(resp)
    } catch (error) {
        console.error(error)
    }
}