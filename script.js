
const searchBtn = document.querySelector(".btn")
const search = document.querySelector(".search")
const info = document.querySelector(".info")
const cityName = document.querySelector("#sahar")
const temp = document.querySelector("#temp")
const windSpeed = document.querySelector("#speed")
const humidity = document.querySelector("#percent")
const error = document.querySelector(".error")
const icon = document.querySelector("#icon")
searchBtn.addEventListener("click",()=>{
    const city = document.querySelector(".input").value;
    const sahar = city.toLowerCase().trim()
    console.log(sahar);
    const key = "863588ab90fa79c7cc30567ae9b094a2"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${sahar}&appid=${key}`

    async function checkWeather(){
        const response = await fetch(apiUrl)
        let data = await response.json();
        console.log(data)
        if(response.status == 404){
            if(error.style.display == "none") error.style.display="flex"
            error.innerHTML=`<h2 id="error" >City Name must NOT be Wrong!</h2>`
            info.style.display = "none";
        }else if(sahar ==""){
            if(error.style.display == "none") error.style.display="flex"
            error.innerHTML=`<h2 id="error" >City Name Can't be Empty.</h2>`
            info.style.display = "none";
        }
        else{
            if(info.style.display == "none") info.style.display="flex"
            error.style.display="none";
            cityName.innerHTML = data.name
            let t = Math.round(data.main.temp - 273.15)
            temp.innerHTML = t + "°C"
            windSpeed.innerHTML = data.wind.speed + " kmph"
            humidity.innerHTML = data.main.humidity + "%"

            if(data.weather[0].main=="Clear"){
                icon.src = "clear.png"
            }else if(data.weather[0].main=="Clouds"){
                icon.src = "clouds.png"
            }else if(data.weather[0].main=="Rain"){
                icon.src = "rain.png"
            }else if(data.weather[0].main=="Drizzle"){
                icon.src = "drizzle.png"
            }else if(data.weather[0].main=="Mist"){
                icon.src = "mist.png"
            }
        }
         
    }
    checkWeather()
})
