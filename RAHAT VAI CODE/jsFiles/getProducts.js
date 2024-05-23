let productContainer = document.getElementById("product-container");
let cartItems = [];
let products;
fetch("http://127.0.0.1:5000/products")
.then((response)=>response.json())
.then((data)=>{
    for(var i=0;i<data.length;i++){
        console.log(products);
        let div = document.createElement("div");
        let imgDiv = document.createElement("div");
        let desDiv = document.createElement("div");
        let btnDiv = document.createElement("div");
        
        imgDiv.className ="card-image";
        desDiv.className = "card-description";
        btnDiv.className = "card-buttons";
        
    
        let p = document.createElement("p");
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        let price = document.createElement("p");
        let cartBtn = document.createElement("button");
    
    
        div.className = "product-card";
        imgDiv.className = "card-image";
        btnDiv.className = "card-buttons";
    
        cartBtn.className = "add-btn"
        img.src = data[i][1];
        console.log(img.src);
        img.className = "item-img";
        img.alt = "product Image";
      
        h2.innerText = data[i][2];
        p.innerText = data[i][3];
        price.innerText = data[i][4];
        cartBtn.innerText = "Add To Cart";
        
        cartBtn.addEventListener('click',()=>{
            crntItem = {
                image:img.src,
                title:h2.innerText,
                description:p.innerText,
                price:price.innerText,
                quantity:1
            }
            cartItems.push(crntItem);
            console.log(cartItems);
            let stringCartArr = JSON.stringify(cartItems);
            localStorage.setItem("cartItems", stringCartArr);
        });
    
        imgDiv.appendChild(img);
        desDiv.appendChild(h2);
        desDiv.appendChild(p);
        desDiv.append(price);
        btnDiv.appendChild(cartBtn);
        div.appendChild(imgDiv);
        div.appendChild(desDiv);
        div.appendChild(cartBtn);
        productContainer.appendChild(div);
    }
});