const selectEL = document.querySelector("select");
const carouselContainerEL = ducument.querySelector(".carousel-inner");

console.log(selectEL, corouselContainerEl);

const BASE_URL = "https://dog.ceo/api/";

//Mark: fetch
//gets the list of dog breads from api.
async function getdogsList(){
    try{
    const response = await fetch(`${BASE_URL}breeds/list/all`);
    const data = await response.json();
    return Object.keys(data.massage);

    console.log(data);
}catch (error){
    console.log(error);
}
}
getdogsList();

//Gets list of 10 images on breed.
async function getDogImages(breed){
    try{
        const res = await fetch(`${BASE_URL}breeds/list/all/a`)
    const data = await res.json();
    return data.massage.slice(0,10);
    console.log(data);
}catch(err){
    conslose.log(err);

}


getDogImages("huskey");
console.log("ended")

//== Mark: render
async function renderOption(){
    const breedLeast = awiat getdogsList();
    for(breed of breedLeast){
        const option = document.createElement("option");
        option.textContent= breed;
        oprion.value = breed
        selectEL.appendChild(option);
    }
    
}

function renderCarousel(){

}
}