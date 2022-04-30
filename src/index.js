//https://api.unsplash.com/search/photos?query=${query}&per_page=20&order_by=&=client_id=YZUTzB8pPagBNqwYjSAbXD47PrBs77_QtPKmJrQCGk8


//https://api.unsplash.com/search/photos/?query=cat&per_page=20&client_id=YZUTzB8pPagBNqwYjSAbXD47PrBs77_QtPKmJrQCGk8

//https://api.unsplash.com/search/photos/?query=cat&per_page=20&order_by=latest&orientation=landscape&client_id=YZUTzB8pPagBNqwYjSAbXD47PrBs77_QtPKmJrQCGk8


const API ='YZUTzB8pPagBNqwYjSAbXD47PrBs77_QtPKmJrQCGk8'








// let filtered = document.getElementById('filtered').value;

import {navbar} from "../component/navbar.js"
document.getElementById('navbar').innerHTML=navbar();

import { searchImages, append, sortImages, filterImages, searchImagesDebounce } from "./fetch.js";


// let id;
// let ondebounce = () =>{
   
//     let query = document.getElementById('query').value;
//     searchImagesDebounce(API,query).then( (res) => {
//         console.log(res);
//         let container = document.getElementById('container');
//         container.innerHTML = null
//         append(res.results, container);
//         console.log('res', res.results)
//     });

// };

// function debounce(func,delay){
// if(id){
//     clearTimeout(id);
// }

// id = setTimeout(function(){
//     func();
// },delay)
// }

// document.getElementById("query").addEventListener("oninput", debounce);







let search = (e) =>{
    if(e.key === 'Enter'){
        let query = document.getElementById('query').value;
        searchImages(API,query).then( (res) => {
            // console.log(res);
            let container = document.getElementById('container');
            container.innerHTML = null
            append(res.results, container);
            // console.log('res', res.results)
        });
    }
};

document.getElementById("query").addEventListener("keydown", search);


let sorted = () =>{ 
        let query = document.getElementById('query').value;
        let sorted = document.getElementById('sort').value;
        // console.log('sorted:', sorted)

        sortImages(API,query,sorted).then( (res) => {
            // console.log(res);
            let container = document.getElementById('container');
            container.innerHTML = null
            append(res.results, container);
            // console.log('res', res.results)
        });
    
};

document.getElementById('sort').addEventListener('click',sorted)


let filtered = () =>{ 
        let query = document.getElementById('query').value;
        let filtered = document.getElementById('filter').value;

        filterImages(API,query,filtered).then( (res) => {
            // console.log(res);
            let container = document.getElementById('container');
            container.innerHTML = null
            append(res.results, container);
            // console.log('res', res.results)
        });
    
};

document.getElementById('filter').addEventListener('click',filtered)










let categories = document.getElementById("category").children
// console.log('categories:', categories)


function cSearch(){
    console.log(this.id)
    searchImages(API,this.id).then( (data) => {
        // console.log(data);
        let container = document.getElementById('container');
        container.innerHTML = null
        append(data.results, container);
        // console.log('data:', data.results)
    });
}

for(let el of categories){
    el.addEventListener('click',cSearch)
}

