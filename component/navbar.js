const navbar =() =>{
    return `
        <div id="holder">

                <div id="main">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX///8AAAAwMDDx8fE3NzeOjo4sLCwQEBD29vaFhYULCwsaGho6OjofHx+WlpZJSUlcNdZGAAABFElEQVR4nO3c2Q3CMBBF0eCE7Ev/3VICyJaYgZzbwPP5HsldJ0mSJEmSJEmS9Kf1U2lp6qMBb+sfbRHGR0hIGB8hIWF8hISE8RESEsZHSEgYHyEhYXyEhITxERISxkdISBgfISFhfISEhPHNy7OlZY4GSJIkSZIkSZL0k60Vd4etcXOr2Fyr10rF2tAoHCo2CyEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISHhbYV7o3BPLzzOpj8VziO9MCJCwvwREuaPkDB/hIT5IyTMHyFh/ggJ80dImD9CwvwREuaPkDB/hIT5IyTMHyFh/gjvLByjn/5hY7XwGssvNF7VQkmSJEmSJEmSpC/2AvViRWsS6bj5AAAAAElFTkSuQmCC" alt="">

                    <div id="search_box">
                            <input type="text" id="query" placeholder="Search free high-resolution images">
                    </div>

                    <div id="extra">
                            <p id="advertise">Advertise</p>
                            <p id="blog">Blog</p>
                            <button id="btn">Submit a Photo</button>
                            <img src="https://cdn-icons-png.flaticon.com/512/633/633816.png" alt="">
                            <img src="https://cdn-icons-png.flaticon.com/512/2948/2948035.png" alt="">
                            <img src="https://cdn-icons.flaticon.com/png/512/2976/premium/2976215.png?token=exp=1651312165~hmac=4ffcf1fe6a8afd04e4842cc1ee70775a" alt="">
                    </div>
                </div>


        <div id="main2">   
            <div id="SortFilterDiv">
                <div id="sortDiv">
                    <select  id="sort">
                        <option value="">Sort search by</option>
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                        <option value="popular">Popular</option>
                        <option value="views">Views</option>
                        <option value="downloads">Downloads</option>
                    </select>
                </div>
                <div id="filterDiv">
                    <select id="filter">
                        <option value="">Filter search by</option>
                        <option value="landscape">Landscape</option>
                        <option value="portrait">Portrait</option>
                        <option value="squarish">Squarish</option>
                    </select>
                </div>
            </div>


            <div id="category">
                <h3 id="nature">Nature</h3>
                <h3 id="cars">Cars</h3>
                <h3 id="music">Music</h3>
                <h3 id="cartoon">Cartoons</h3>
                <h3 id="tech">Technology</h3>
                <h3 id="marvel">Marvel</h3>
                <h3 id="fashion">Fashion</h3>
                <h3 id="film">Film</h3>
                <h3 id="foodanddrink">Food & Drink</h3>
                <h3 id="travel">Travel</h3>
                <h3 id="animals">Animals</h3>
                <h3 id="spirituality">Spirituality</h3>
            </div>
        </div>

    </div>
    `
}

export {navbar};