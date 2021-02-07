const mainAPI = "https://www.themealdb.com/api/json/v1/1/search.php";


// search Button

const search = document.getElementById("enter");
search.addEventListener("click", function () {
    const meal = document.getElementById("meal").value;
    const link = `${mainAPI}?s=${meal}`;
    fetch(link)
        .then(recipe => recipe.json())
        .then(data => mealMenu(data.meals));
    const mealMenu = (food) => {
        if (food == null) {
            document.getElementById("end").innerText = "Sorry, Results Not Found!";
        } else {
            const menuList = document.getElementById("menuList");
            food.forEach(foods => {
                const foodDiv = document.createElement("div");
                foodDiv.className = "foods mt-5";
                const foodInf = `
                    <div class="card" style="width: 15rem;" onclick="food('${foods.strMeal}')">
                    <img src="${foods.strMealThumb}" class="card-img-top img-thumbnail" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${foods.strMeal}</h5>
                    </div>
                    </div>
                `
                foodDiv.innerHTML = foodInf;
                menuList.appendChild(foodDiv);
            });
        }

    }
    document.getElementById("menuList").innerHTML = "";
    document.getElementById("food").innerHTML = "";
    document.getElementById("end").innerText = "";
});


// FOOD DETAIL

const food = (foodName) => {
    const link = `${mainAPI}?s=${foodName}`
    fetch(link)
        .then(recipe => recipe.json())
        .then(data => information(data.meals[0]));
}

const information = food => {
    const foodFullDetail = document.getElementById("detailFood");
    foodFullDetail.innerHTML = `
        <img width="500" height="300" class="img-fluid" src="${food.strMealThumb}">
        <h1>${food.strMeal}</h1>
        <h3>Ingredients</h3>
        <ul class="list-group">
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient1}
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient2}
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient3}
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient4}
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient5}
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient6}
            </li>
        </ul>
    `
}