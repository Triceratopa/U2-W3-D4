const searchFirstButton=document.getElementsByClassName('.btn-primary')[0]
const searchSecButton=document.getElementsByClassName('.btn-secondary')[0]


const Api_key=
const getImg=function(query){
    fetch('' + query,{
        headers:{
        Authorization: }})
    .then((response)=>{
        if (response.ok){
            return response.json()
        }else{
            throw new Error('nope')
        }
    })
    .then((risultato)=>{
     console.log(risultato)
     const allImg=document.querySelectorAll('.card img')
     allImg.forEach(img=>{
        img.src=
     })
    })
    .catch((err)=> {
        console.log('no no',err)
    })
}
searchFirstButton.addEventListener('click', ()=>getImg('moon'))
searchSecButton.addEventListener('click',()=>getImg('saturn'))