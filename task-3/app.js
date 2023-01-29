let celsiusInput=document.querySelector('#celsius>input')
let fahrenheitInput=document.querySelector('#fahrenheit>input')
let kelvinInput=document.querySelector('#kelvin>input')
let button = document.querySelector('.button button')
function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input',function(){
    let c=parseFloat(celsiusInput.value)
    let f=(c*(9/5))+32
    let k=c+273.15
fahrenheitInput.value=roundNumber(f)
kelvinInput.value=roundNumber(k)
})


fahrenheitInput.addEventListener('input',function(){
    let f=parseFloat(fahrenheitInput.value)
    let c=(f-32)*(5/9)
    let k=(f-32)*(5/9)+273.15
celsiusInput.value=roundNumber(c)
kelvinInput.value=roundNumber(k)
})

kelvinInput.addEventListener('input',function(){
    let k=parseFloat(kelvinInput.value)
    let c=(k-273.15)
    let f=(k-273.15)*(9/5)+32
fahrenheitInput.value=roundNumber(f)
celsiusInput.value=roundNumber(c)
})
button.addEventListener('click',()=>{
    celsiusInput.value=""
    fahrenheitInput.value=""
    kelvinInput.value=""
    
})


