let searchImages = async (API,query) =>{
try{
    let res = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=${API}`);

    let data = await res.json()
    // console.log('data:', data)

    return data;
}
catch(err){
    console.log('err:', err)
}
}

let searchImagesDebounce = async (API,query) =>{
try{
    let res = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=${API}`);

    let data = await res.json()
    // console.log('data:', data)

    return data;
}
catch(err){
    console.log('err:', err)
}
}

let sortImages = async (API,query,sorted) =>{
try{
    let res = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&order_by=${sorted}&client_id=${API}`);

    let data = await res.json()
    // console.log('data:', data)

    return data;
}
catch(err){
    console.log('err:', err)
}
}


let filterImages = async (API,query,filtered) =>{
try{
    let res = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&orientation=${filtered}&client_id=${API}`);

    let data = await res.json()
    // console.log('data:', data)

    return data;
}
catch(err){
    console.log('err:', err)
}
}










let append = (data,container) => {
        data.forEach( ({alt_description, urls:{small}}) => {
            let div = document.createElement('div');

            let img = document.createElement('img')

            let h3 = document.createElement('h3')

            img.src = small;

            h3.innerText = alt_description;

            div.append(img)

            container.append(div)
        })
}





export { searchImages, append, sortImages, filterImages, searchImagesDebounce };
