function sum(num1, num2){
    return num1 + num2
}

function sumAsync(num1, num2, callback){
    console.log(callback(num1, num2))
}

sumAsync(8, 10, sum)


function date(callback){
    console.log(new Date())
    setTimeout(function (){
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}

date(printDate)
