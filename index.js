const searchFirstButton=document.getElementsByClassName('.btn-primary')[0]
const searchSecButton=document.getElementsByClassName('.btn-secondary')[0]


const Api_key='UjEAwYw8tNHEocupamN4s1vSQJDPLQKEU2oyeK2RhJjkmk3bER4kbaR6'
const getImg=function(){
    fetch('https://api.pexels.com/v1/search?query=' + query,{
        Headers:{
        Authorization: Api_key}})
    .then((response)=>{
        if (response.ok){
            return response.json()
        }else{
            throw new Error('nope')
        }
    })
    .then((risultato)=>{
     
    })
    .catch((err)=> {
        console.log('no no',err)
    })
}
searchFirstButton.addEventListener('click', ()=>getImg('moon'))
searchSecButton.addEventListener('click',()=>getImg('saturn'))