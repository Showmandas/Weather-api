

const loadTemp=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(url).then(res=>res.json()).then(data=>displayTemp(data));
}

const displayTemp=data=>{
    // console.log(data);
    const temparature=document.getElementById('temparature');
    temparature.innerText=data.main.temp
    console.log(data.weather[0].main);
    document.getElementById('description').innerText=data.weather[0].main;
}


document.getElementById('btn-search').addEventListener('click',function(){
    const search=document.getElementById('search-field').value;
    document.getElementById('showCountry').innerText=search;
    loadTemp(search);
})

loadTemp('dhaka');