//CONVERT KILOMETER TO METER
function kilometerToMeter(kilometer) {
    let meter = 1000
    let convertMeter = kilometer * meter
    if(kilometer <= 0) {
        return 'please input positive number or more than zero'
    }else {
        return convertMeter
    }
}

var ans = kilometerToMeter(13)
console.log(ans)


//BUDGET CALCULATOR
function budgetCalculator(watch, mobile, laptop) {
    let perWatch = 50
    let perMobile = 100
    let perLaptop = 500
    let totalAmmount = ((watch * perWatch) + (mobile * perMobile) + (laptop * perLaptop))
    if(watch < 0 || mobile < 0 || laptop < 0) {
        return "your buying product can't be less than zero"
    }else {
        return totalAmmount
    }
}

let total = budgetCalculator(2,-2,20)
console.log(total)


//HOTEL COST
function hotelCost(day) {
    let total = 0
    if(day <= 0) {
        return "your input isn't valid.please input positive number or more than zero"
    } else if(day <= 10) {
        total = day * 100
    }
    else if(day <= 20) {
        let firstPeriod = 10 * 100
        let extraDay = day - 10
        let secondPeriod = extraDay * 80
        total = firstPeriod + secondPeriod
        
    }
    else {
        let firstPeriod = 10 * 100
        let secondPeriod = 10 * 80
        let extraDay = day - 20
        let thirdPeriod = extraDay * 50
        total = firstPeriod + secondPeriod + thirdPeriod
    }
    return total

}

let result = hotelCost(12)
console.log(result)


//MEGA FRIEND
let friends = ['akib', 'rakib', 'bashet', 'shahjalal', 'sajid']

function megaFriend(frnd) {
    let words = frnd[0]
    for(let i = 0; i < frnd.length; i++) {
        let names = frnd[i]
        if(words.length < names.length) {
            words = names
        }
    }
    return words
}

let largestWord = megaFriend(friends)
console.log(largestWord)