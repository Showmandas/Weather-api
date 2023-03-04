const api_key=`d5764f780a55cd3aa7e38b2e3735af3b`;

const loadTemp=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(url).then(res=>res.json()).then(data=>displayTemp(data));
}

const displayTemp=data=>{
    const temparature=document.getElementById('temparature');
    temparature.innerText=data.main.temp
    
}


document.getElementById('btn-search').addEventListener('click',function(){
    const search=document.getElementById('search-field').value;
    document.getElementById('showCountry').innerText=search;
    loadTemp(search);
})

loadTemp('dhaka');