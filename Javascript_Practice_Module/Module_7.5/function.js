
document.getElementById("buttonn").addEventListener
("click",()=>{
    const val=document.getElementById("input-value").value
    show_meal_by_name(val);
    document.getElementById("input-value").value="";
    document.getElementById("item-container").innerHTML="";
});



function show_meal_by_name(val) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            const container = document.getElementById("item-container");
            detail_container.innerHTML="";
            if (data.meals && Array.isArray(data.meals) && data.meals.length > 0) {
                data.meals.forEach(meal => {
                    const div = document.createElement("div");
                    div.className=("item-cart");
                    div.innerHTML = `
                        <img class="chobi" src="${meal.strMealThumb}" alt="#">
                        <h4>${meal.strMeal}</h4>
                    `;
                    container.appendChild(div);
                    div.addEventListener("click",()=>{
                        container.innerHTML="";
                        show_meal_detail(meal.idMeal);
                    });
                });
            } 
            else{
                const div = document.createElement("div");
                div.classList.add("not-found-cart");
                div.innerHTML = `
                    <h3 class="not-found-text">Item is not found!</h3>
                `;
                container.appendChild(div);
            }
        })
};

const detail_container = document.getElementById("details-container");
function  show_meal_detail(idMeal){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(res => res.json())
    .then((data) => {
        if (data.meals && Array.isArray(data.meals) && data.meals.length > 0) {
            const meal=data.meals[0];
            const div = document.createElement("div");
            div.classList.add("details-cart");
            div.innerHTML = `
                <img class="details-chobi" src="${meal.strMealThumb}" alt="#">
                <h4>${meal.strMeal}</h4>
                <ul>
                    <li>${meal.
                    strIngredient1}</li>
                    <li>${meal.strIngredient2}</li>
                    <li>${meal.strIngredient3}</li>
                    <li>${meal.strIngredient4}</li>
                </ul>
            `;
            detail_container.appendChild(div);
        } 
        else{
            const div = document.createElement("div");
            div.classList.add("not-found-cart");
            div.innerHTML = `
                <h3 class="not-found-text">Item is not found!</h3>
            `;
            detail_container.appendChild(div);
        }
    })

}