// ==========================================
// 🍳 COOKWISE - COMPLETE APP SCRIPT
// ==========================================

const recipes = {

    "jollof-rice": {
        title: "Jollof Rice",
        emoji: "🍚",
        country: "🇳🇬 Nigerian Recipe",
        time: "45 min",
        difficulty: "Beginner",
        servings: "4",
        description: "Learn how to prepare delicious Nigerian-style Jollof Rice step by step.",

        ingredients: [
            "2 cups rice",
            "4 tomatoes",
            "2 red peppers",
            "1 medium onion",
            "Cooking oil",
            "Seasoning",
            "Salt",
            "Water or stock"
        ],

        steps: [
            ["Prepare the ingredients", "Wash the rice and prepare the tomatoes, peppers and onion."],
            ["Prepare the sauce", "Blend the tomatoes, peppers and onion and cook the mixture until thicker."],
            ["Add seasoning", "Add cooking oil, seasoning and salt."],
            ["Add the rice", "Add the washed rice and enough liquid for cooking."],
            ["Cook", "Cover the pot and cook over moderate heat until the rice is tender."],
            ["Serve", "Check that the rice is cooked, then serve."]
        ],

        tip: "Keep the heat moderate while the rice cooks so it cooks evenly."
    },

    "fried-rice": {
        title: "Fried Rice",
        emoji: "🍚",
        country: "🍽️ Nigerian-Style Recipe",
        time: "35 min",
        difficulty: "Beginner",
        servings: "4",
        description: "Prepare colorful and tasty fried rice with vegetables and simple seasonings.",

        ingredients: [
            "2 cups cooked rice",
            "Mixed vegetables",
            "1 carrot",
            "Green peas",
            "1 onion",
            "Cooking oil",
            "Seasoning",
            "Salt"
        ],

        steps: [
            ["Prepare vegetables", "Wash and cut the vegetables into small pieces."],
            ["Heat the pan", "Place a suitable pan over moderate heat and add cooking oil."],
            ["Cook vegetables", "Add the onion and vegetables and stir while they cook."],
            ["Add rice", "Add the cooked rice and mix gently."],
            ["Season", "Add seasoning and salt according to your taste."],
            ["Serve", "Allow everything to heat through, then serve."]
        ],

        tip: "Slightly cooled rice is often easier to separate when making fried rice."
    },

    "spicy-chicken": {
        title: "Spicy Chicken",
        emoji: "🍗",
        country: "🌶️ Chicken Recipe",
        time: "35 min",
        difficulty: "Easy",
        servings: "4",
        description: "Learn how to prepare flavorful spicy chicken using simple ingredients.",

        ingredients: [
            "Chicken pieces",
            "1 onion",
            "2 peppers",
            "Garlic",
            "Cooking oil",
            "Seasoning",
            "Salt",
            "A little water"
        ],

        steps: [
            ["Prepare the chicken", "Prepare the chicken pieces using safe food-handling practices."],
            ["Prepare seasoning", "Prepare the onion, peppers, garlic and other seasonings."],
            ["Season", "Coat the chicken evenly with the seasoning mixture."],
            ["Cook", "Cook the chicken thoroughly using your preferred cooking method."],
            ["Check", "Make sure the chicken is fully cooked before serving."],
            ["Serve", "Serve with rice, vegetables or another meal."]
        ],

        tip: "Make sure chicken is fully cooked before eating."
    },

    "pancakes": {
        title: "Pancakes",
        emoji: "🥞",
        country: "🥞 Breakfast Recipe",
        time: "20 min",
        difficulty: "Easy",
        servings: "4",
        description: "Make simple fluffy pancakes for breakfast or a tasty snack.",

        ingredients: [
            "1 cup flour",
            "1 egg",
            "1 cup milk",
            "2 tablespoons sugar",
            "1 teaspoon baking powder",
            "A pinch of salt",
            "A little cooking oil"
        ],

        steps: [
            ["Mix dry ingredients", "Combine flour, sugar, baking powder and salt."],
            ["Add wet ingredients", "Add the egg and milk and mix until smooth."],
            ["Heat the pan", "Place a suitable pan over moderate heat and lightly grease it."],
            ["Cook", "Pour a small amount of batter into the pan."],
            ["Turn", "Carefully turn the pancake and cook the other side."],
            ["Serve", "Continue with the remaining batter and serve."]
        ],

        tip: "Keep the heat moderate so the pancakes cook evenly."
    },

    "spaghetti": {
        title: "Spaghetti",
        emoji: "🍝",
        country: "🍝 Pasta Recipe",
        time: "25 min",
        difficulty: "Beginner",
        servings: "4",
        description: "Learn how to prepare a simple spaghetti meal with a flavorful sauce.",

        ingredients: [
            "Spaghetti",
            "Tomatoes",
            "Onion",
            "Pepper",
            "Cooking oil",
            "Seasoning",
            "Salt",
            "Water"
        ],

        steps: [
            ["Boil water", "Bring enough water to a boil in a suitable pot."],
            ["Cook spaghetti", "Add the spaghetti and cook according to the package directions."],
            ["Prepare sauce", "Cook the tomatoes, onion and pepper with seasoning."],
            ["Combine", "Drain the spaghetti and combine it with the sauce."],
            ["Heat", "Allow everything to heat together briefly."],
            ["Serve", "Serve while warm."]
        ],

        tip: "Avoid overcooking the spaghetti so it keeps a pleasant texture."
    },

    "curry-rice": {
        title: "Curry Rice",
        emoji: "🍛",
        country: "🍛 Rice Recipe",
        time: "40 min",
        difficulty: "Easy",
        servings: "4",
        description: "A simple rice dish with vegetables and curry seasoning.",

        ingredients: [
            "2 cups rice",
            "Curry powder",
            "1 onion",
            "Mixed vegetables",
            "Cooking oil",
            "Seasoning",
            "Salt",
            "Water"
        ],

        steps: [
            ["Wash the rice", "Wash the rice thoroughly before cooking."],
            ["Prepare vegetables", "Wash and cut the vegetables into small pieces."],
            ["Cook vegetables", "Cook the onion and vegetables with a little oil."],
            ["Add curry", "Add curry powder and seasoning and stir."],
            ["Add rice", "Add the rice and appropriate cooking liquid."],
            ["Finish cooking", "Cover and cook until the rice is tender."]
        ],

        tip: "Add curry gradually so you can control the flavor."
    },

    "fried-potatoes": {
        title: "Fried Potatoes",
        emoji: "🥔",
        country: "🥔 Potato Recipe",
        time: "30 min",
        difficulty: "Easy",
        servings: "3",
        description: "Learn how to prepare crispy fried potatoes for a simple meal or snack.",

        ingredients: [
            "Potatoes",
            "Cooking oil",
            "Salt",
            "Seasoning",
            "Optional herbs"
        ],

        steps: [
            ["Prepare potatoes", "Wash and cut the potatoes into suitable pieces."],
            ["Prepare the pan", "Heat cooking oil in a suitable pan."],
            ["Add potatoes", "Carefully add the potatoes."],
            ["Cook", "Cook until tender and appropriately browned."],
            ["Season", "Add salt and seasoning."],
            ["Serve", "Remove from the heat and serve."]
        ],

        tip: "Cut the potatoes into similar sizes so they cook more evenly."
    },

    "omelette": {
        title: "Omelette",
        emoji: "🍳",
        country: "🍳 Breakfast Recipe",
        time: "15 min",
        difficulty: "Beginner",
        servings: "2",
        description: "Make a quick and simple omelette with eggs and vegetables.",

        ingredients: [
            "3 eggs",
            "1 small onion",
            "Pepper",
            "Tomato",
            "Salt",
            "Cooking oil"
        ],

        steps: [
            ["Prepare vegetables", "Wash and cut the vegetables into small pieces."],
            ["Beat eggs", "Crack the eggs into a bowl and beat them."],
            ["Add vegetables", "Mix the vegetables into the eggs."],
            ["Heat pan", "Heat a suitable pan and add a little oil."],
            ["Cook omelette", "Pour in the egg mixture and cook until set."],
            ["Serve", "Carefully remove the omelette and serve."]
        ],

        tip: "Cook eggs thoroughly before eating."
    },

    "nigerian-beans": {
        title: "Nigerian Beans",
        emoji: "🥣",
        country: "🇳🇬 Nigerian Recipe",
        time: "60 min",
        difficulty: "Easy",
        servings: "5",
        description: "Learn a simple way to prepare a flavorful Nigerian beans dish.",

        ingredients: [
            "Beans",
            "Onion",
            "Pepper",
            "Tomatoes",
            "Cooking oil",
            "Seasoning",
            "Salt",
            "Water"
        ],

        steps: [
            ["Sort the beans", "Remove unwanted particles and wash the beans."],
            ["Cook the beans", "Cook the beans in enough water until tender."],
            ["Prepare sauce", "Prepare the tomatoes, peppers and onion."],
            ["Add sauce", "Add the sauce and seasoning to the cooked beans."],
            ["Continue cooking", "Allow the beans to cook with the sauce."],
            ["Serve", "Check the texture and serve."]
        ],

        tip: "Make sure the beans are thoroughly cooked before serving."
    },

    "plantain": {
        title: "Fried Plantain",
        emoji: "🍌",
        country: "🍌 Nigerian Side Dish",
        time: "20 min",
        difficulty: "Beginner",
        servings: "3",
        description: "Learn how to prepare sweet fried plantain as a side dish or snack.",

        ingredients: [
            "Ripe plantains",
            "Cooking oil",
            "A little salt"
        ],

        steps: [
            ["Peel plantains", "Remove the peel and cut the plantains into pieces."],
            ["Heat oil", "Heat cooking oil in a suitable pan."],
            ["Add plantain", "Carefully place the plantain pieces into the pan."],
            ["Cook one side", "Cook until the first side is appropriately browned."],
            ["Turn", "Carefully turn the pieces and cook the other side."],
            ["Serve", "Remove from the pan and serve."]
        ],

        tip: "Keep the heat moderate to help prevent the outside from browning too quickly."
    }
};


// ==========================================
// ❤️ FAVORITES
// ==========================================

function getFavorites() {
    try {
        const saved = localStorage.getItem("cookwiseFavorites");
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        return [];
    }
}


function saveFavorites(favorites) {
    localStorage.setItem(
        "cookwiseFavorites",
        JSON.stringify(favorites)
    );
}


function getCurrentRecipeId() {
    const params = new URLSearchParams(
        window.location.search
    );

    return params.get("id") || "jollof-rice";
}


function toggleFavorite() {

    const button = document.getElementById(
        "favoriteButton"
    );

    if (!button) {
        console.log("Favorite button not found.");
        return;
    }

    const recipeId = getCurrentRecipeId();

    if (!recipes[recipeId]) {
        console.log("Recipe not found:", recipeId);
        return;
    }

    let favorites = getFavorites();

    if (favorites.includes(recipeId)) {

        favorites = favorites.filter(
            id => id !== recipeId
        );

    } else {

        favorites.push(recipeId);

    }

    saveFavorites(favorites);

    updateFavoriteButton();
    updateFavoriteCount();
    loadFavoritesPage();
}


function updateFavoriteButton() {

    const button = document.getElementById(
        "favoriteButton"
    );

    if (!button) return;

    const recipeId = getCurrentRecipeId();

    const favorites = getFavorites();

    if (favorites.includes(recipeId)) {

        button.textContent = "♥";
        button.setAttribute(
            "aria-label",
            "Remove from favorites"
        );

    } else {

        button.textContent = "♡";
        button.setAttribute(
            "aria-label",
            "Add to favorites"
        );
    }
}


// ==========================================
// 📖 LOAD RECIPE
// ==========================================

function loadRecipe() {

    const title = document.getElementById(
        "recipeTitle"
    );

    if (!title) return;

    const recipeId = getCurrentRecipeId();

    const recipe = recipes[recipeId];

    if (!recipe) {

        title.textContent = "Recipe Not Found";

        return;
    }

    document.title = "CookWise - " + recipe.title;

    const emoji = document.getElementById(
        "recipeEmoji"
    );

    const country = document.getElementById(
        "recipeCountry"
    );

    const time = document.getElementById(
        "recipeTime"
    );

    const difficulty = document.getElementById(
        "recipeDifficulty"
    );

    const servings = document.getElementById(
        "recipeServings"
    );

    const description = document.getElementById(
        "recipeDescription"
    );

    if (emoji) emoji.textContent = recipe.emoji;

    title.textContent = recipe.title;

    if (country) country.textContent = recipe.country;

    if (time) time.textContent = recipe.time;

    if (difficulty) {
        difficulty.textContent = recipe.difficulty;
    }

    if (servings) servings.textContent = recipe.servings;

    if (description) {
        description.textContent = recipe.description;
    }


    // INGREDIENTS

    const ingredients = document.getElementById(
        "ingredientsList"
    );

    if (ingredients) {

        ingredients.innerHTML = "";

        recipe.ingredients.forEach(item => {

            const li = document.createElement("li");

            li.textContent = item;

            ingredients.appendChild(li);

        });
    }


    // STEPS

    const steps = document.getElementById(
        "stepsList"
    );

    if (steps) {

        steps.innerHTML = "";

        recipe.steps.forEach((step, index) => {

            const div = document.createElement("div");

            div.className = "step";

            div.innerHTML = `
                <span>${index + 1}</span>

                <div>
                    <h3>${step[0]}</h3>
                    <p>${step[1]}</p>
                </div>
            `;

            steps.appendChild(div);

        });
    }


    // TIP

    const tip = document.getElementById(
        "recipeTip"
    );

    if (tip) {
        tip.textContent = recipe.tip;
    }

    updateFavoriteButton();
}


// ==========================================
// 🔍 SEARCH
// ==========================================

function filterRecipes() {

    const input = document.getElementById(
        "recipeSearch"
    );

    if (!input) return;

    const search = input.value
        .toLowerCase()
        .trim();

    const cards = document.querySelectorAll(
        ".recipe-card"
    );

    const noResults = document.getElementById(
        "noResults"
    );

    const count = document.getElementById(
        "recipeCount"
    );

    let visible = 0;

    cards.forEach(card => {

        const name = card.getAttribute(
            "data-name"
        );

        if (
            name &&
            name.toLowerCase().includes(search)
        ) {

            card.style.display = "flex";

            visible++;

        } else {

            card.style.display = "none";

        }
    });

    if (count) {
        count.textContent = visible + " recipes";
    }

    if (noResults) {
        noResults.style.display =
            visible === 0 ? "block" : "none";
    }
}


function filterCategory(category) {

    const cards = document.querySelectorAll(
        ".recipe-card"
    );

    const count = document.getElementById(
        "recipeCount"
    );

    const noResults = document.getElementById(
        "noResults"
    );

    const input = document.getElementById(
        "recipeSearch"
    );

    if (input) {
        input.value = "";
    }

    let visible = 0;

    cards.forEach(card => {

        const cardCategory =
            card.getAttribute("data-category");

        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "flex";

            visible++;

        } else {

            card.style.display = "none";

        }
    });

    if (count) {
        count.textContent = visible + " recipes";
    }

    if (noResults) {
        noResults.style.display =
            visible === 0 ? "block" : "none";
    }
}


function searchFromURL() {

    const input = document.getElementById(
        "recipeSearch"
    );

    if (!input) return;

    const params = new URLSearchParams(
        window.location.search
    );

    const search = params.get("search");

    if (!search) return;

    input.value = search;

    filterRecipes();
}


function enableLiveSearch() {

    const input = document.getElementById(
        "recipeSearch"
    );

    if (!input) return;

    input.addEventListener(
        "input",
        filterRecipes
    );
}


// ==========================================
// ❤️ FAVORITES PAGE
// ==========================================

function loadFavoritesPage() {

    const list = document.getElementById(
        "favoritesList"
    );

    if (!list) return;

    const empty = document.getElementById(
        "emptyFavorites"
    );

    const favorites = getFavorites();

    list.innerHTML = "";

    if (favorites.length === 0) {

        if (empty) {
            empty.style.display = "block";
        }

        return;
    }

    if (empty) {
        empty.style.display = "none";
    }

    favorites.forEach(recipeId => {

        const recipe = recipes[recipeId];

        if (!recipe) return;

        const card = document.createElement(
            "div"
        );

        card.className = "recipe-card";

        card.innerHTML = `
            <div class="food-image">
                ${recipe.emoji}
            </div>

            <div class="recipe-info">

                <h3>${recipe.title}</h3>

                <p>
                    ${recipe.country}
                    • ⏱ ${recipe.time}
                </p>

                <a href="recipe.html?id=${recipeId}">
                    Continue Cooking →
                </a>

            </div>
        `;

        list.appendChild(card);
    });
}


// ==========================================
// 🔢 FAVORITE COUNT
// ==========================================

function updateFavoriteCount() {

    const count = document.getElementById(
        "favoriteCount"
    );

    if (!count) return;

    count.textContent =
        getFavorites().length;
}


// ==========================================
// 🚀 START APP
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "🍳 CookWise JavaScript loaded"
        );

        loadRecipe();

        loadFavoritesPage();

        updateFavoriteCount();

        updateFavoriteButton();

        // ❤️ MAKE FAVORITE BUTTON CLICKABLE
        const favoriteButton =
            document.getElementById(
                "favoriteButton"
            );

        if (favoriteButton) {

            favoriteButton.addEventListener(
                "click",
                toggleFavorite
            );

        }

        searchFromURL();

        enableLiveSearch();

    }
);