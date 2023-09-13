const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '72194ba2b6msh49a2ec6d5156701p184235jsnecfc9d4544a6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWheather = (city) => {

    

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
.then(response => response.json())
.then((response)=>{
    
    console.log(response)

    var rise = new Date(response.sunrise);
    var set = new Date(response.sunset);

    var Rise = rise.getHours()+
    ":"+rise.getMinutes()+
    ":"+rise.getSeconds();

    var Set = set.getHours()+
    ":"+set.getMinutes()+
    ":"+set.getSeconds();


    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = Rise
    sunset.innerHTML = Set

})
.catch(err => console.error(err));

} 
getWheather("Delhi");


