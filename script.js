function stworz(){
    let bigGuy = document.getElementById("bigGuy")
    let kiddo = document.createElement("div")

    kiddo.classList.add("kiddo")
    kiddo.style.backgroundColor = "rgb(0, 0, 0)"
    bigGuy.appendChild(kiddo)
    kiddo.addEventListener("click", transformacja)
}

function transformacja(event){

    

    

    if(event.target.style.backgroundColor == "rgb(0, 0, 0)"){

        let czerwony = document.getElementById("czerwony")
        let zielony = document.getElementById("zielony")
        let niebieski = document.getElementById("niebieski")
        let suma = eval(czerwony.value + "+" + zielony.value + "+" + niebieski.value)
        let wynik = Math.random()*suma

        let kolor1 = 0
        let kolor2 = 0
        let kolor3 = 0

        if(wynik<czerwony.value){
            kolor1 = 255
        }
        else if(wynik>=czerwony.value && wynik<eval(czerwony.value + "+" + zielony.value)){
            kolor2 = 255
        }
        else{
            kolor3 = 255
        }
        console.log(wynik)
        console.log(kolor1)
        console.log(kolor2)
        console.log(kolor3)

        //let kolor = 255
        let promien = 51



        
        event.target.style.backgroundColor = "rgb(" + kolor1 + "," + kolor2 + "," + kolor3 +")";
        event.target.style.borderRadius = promien + "px";

        let licznik = setInterval(() => {
            if(kolor1 != 0){
                kolor1-=5
            }
            else if(kolor2 != 0){
                kolor2-=5
            }
            else{
                kolor3-=5
            }
            
            promien -= 1
            event.target.style.backgroundColor = "rgb(" + kolor1 + "," + kolor2 + "," + kolor3 +")";
            event.target.style.borderRadius = promien + "px";

            if(promien==0){
                clearInterval(licznik)
            }
        }, 50)
    }
}