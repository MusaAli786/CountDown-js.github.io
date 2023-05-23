let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let firstPara = document.querySelector('.firstPara')

let futurDate = new Date("2023 7 , 5 :12:00");
console.log(futurDate)

function countDownFunction(){
    let today = new Date();
    // console.log(today)
    let timeDiffrr =  futurDate.getTime() - today.getTime();
    // console.log(timeDiffrr) 
    if(timeDiffrr > 0){
        days.innerHTML = Math.floor (timeDiffrr / 1000 / 60/ 60 /24)
        hours.innerHTML = Math.floor (timeDiffrr / 1000 / 60/ 60) - (Math.floor(timeDiffrr/1000/60/60/24)*24)
        minutes.innerHTML = Math.floor (timeDiffrr / 1000 / 60) - (Math.floor(timeDiffrr/1000/60/60)*60)
        seconds.innerHTML = Math.floor (timeDiffrr /1000) -(Math.floor(timeDiffrr/1000/60)*60)
    }else{
       firstPara.innerHTML = "Happy Birthday to you"
    }
}
countDownFunction()

setInterval(countDownFunction,1000)



