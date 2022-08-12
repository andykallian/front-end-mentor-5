const id = document.querySelector('.id')
const adv = document.querySelector('.advice')
const newAdv = document.querySelector('#btn-dice')

function requestGet(url){
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()

    return request.responseText
}

let data = requestGet("https://api.adviceslip.com/advice")
let advices = JSON.parse(data)




function newAdvice(){
    id.innerHTML = `Advice  #${advices.slip.id}`
    adv.innerHTML = `${advices.slip.advice}`
}



