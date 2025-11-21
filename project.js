const container = document.getElementById("product-container");

fetch("https://api.codetabs.com/v1/proxy?quest=https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json())
    .then((data) => {
        container.innerHTML=`<h2 class="text-center m-3">Drinks Category</h2>`;
        show_all_drinks(data);
    })
    .catch(err => console.error(err));

function show_all_drinks(data) {
    const drinks = data.drinks;
    drinks.forEach(drink => {
        const div = document.createElement("div");
        div.className = "item-cart card col-lg-4 col-md-4 me-4";
        div.style.width = "18rem";
        div.innerHTML = `
                        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${drink.strDrink}</h5>
                            <p class="card-text">Category: ${drink.strCategory}</p>
                            <p class="card-text">Instruction: ${drink.strInstructions.slice(0, 15)}...</p>
                            <div class="d-flex justify-content-around mt-5">
                                <button onclick="add_to_cart(${drink.idDrink},this)" type="button" class="add-cart-btn btn btn-outline-danger">Add to Cart</button>
                                <button onclick="show_details(${drink.idDrink})" type="button" class="btn btn-outline-success">Details</button>
                            </div>
                        </div>
                `;
        container.appendChild(div);
    });
}

                        //search by search button.

document.getElementById("search-button").addEventListener("click",()=>{
    document.getElementById("product-container").innerHTML="";
    const name=document.getElementById("input-value").value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(res => res.json())
    .then((data) => {
        document.getElementById("product-container").innerHTML="";
        document.getElementById("not-found-cart").innerHTML=""
        if(data.drinks && Array.isArray(data.drinks) && data.drinks.length > 0){
            container.innerHTML=`<h2 class="text-center m-3">Drinks Category</h2>`;
            show_all_drinks(data);
        }
        else {
            const not_found_cart=document.getElementById("not-found-cart");
            // const div = document.createElement("div");
            not_found_cart.innerHTML = `
                    <h1 class"m-5 text-center">Item is not found!</h1>
                `;
           not_found_cart.appendChild(div);
        }
    })
})


                            // show details function
function show_details(id){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then((data) => {
        const drink = data.drinks[0];
        const detail_container=document.getElementById("details-content");
        // detail_container.className="modal-dialog modal-dialog-centered modal-dialog-scrollable";
        document.getElementById("modal-header").innerHTML=`
          <h5> ${drink.strDrink}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `;
        detail_container.innerHTML=`
           <img src="${drink.strDrinkThumb}" class="detail-img img-fluid" alt="...">
            <h5 class="card-title">Details </h5>
            <p class="card-text">Alcoholic: ${drink.strAlcoholic}</p>
            <p class="card-text">Category: ${drink.strCategory}</p>
            <p class="card-text">Instruction: ${drink.strInstructions}...</p>
            <hr>
            <button type="button" class="btn btn-danger detail-close-btn" data-bs-dismiss="modal">Close</button>
        `;
        const modal = new bootstrap.Modal(document.getElementById('details_container'));
        modal.show();
    })
}

                                    // add to cart

function add_to_cart(id,btnn){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then((data) => {
        const drink = data.drinks[0];

        let countElement=document.getElementById("countt");
        let cnt = parseInt(countElement.innerText);
        cnt+=1;
         
        if(drink && cnt < 8 ){ 
            btnn.innerText = "Selected";
            btnn.className = "btn btn-success";
            const total_cart_detail=document.getElementById("total_cart_detail");
            document.getElementById("countt").innerHTML=cnt;
            const div=document.createElement("div");
            div.className = "cart-div d-flex justify-content-around align-items-center border mb-3 p-2";
            div.innerHTML=`
                <p>${cnt}</p>
                <img src="${drink.strDrinkThumb}" class="card-div-img card-img-top" alt="...">
                <p>${drink.strDrink.slice(0,12)}</p>
            `;
            total_cart_detail.appendChild(div); 
        }    
        else{
           alert("You Cannot Add product");
        }

    })
}




