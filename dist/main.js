// Selectors
const foodInput = document.querySelector('.food-input');
const foodButton = document.querySelector('.food-button');
const foodList = document.querySelector('.food-items-list');
const calorieButton = document.querySelector('.calorie-button');
const age = document.querySelector('.age');
const gender = document.querySelector('[name="gender"]');
const feet = document.querySelector('.height-feet');
const inches = document.querySelector('.height-inches');
const weight = document.querySelector('.weight-pounds');
const activity = document.querySelector('.activity');


// Event Listeners
foodButton.addEventListener('click', addFood);
foodList.addEventListener('click', deleteFood);
calorieButton.addEventListener('click', calculateCalories);

// Functions
function calculateCalories() {
    event.preventDefault();

    let cpd = 0;
    if (gender.value === "male") {
        console.log('male');
        console.log(weight.value);
    } else if (gender.value === "female") {
        console.log('female');
    }
    
}

function addFood(event) {
    event.preventDefault();

    const foodDiv = document.createElement("div");
    foodDiv.classList.add("food");

    const newFood = document.createElement("li");
    newFood.innerText = foodInput.value;
    newFood.classList.add("food-item");

    foodDiv.appendChild(newFood);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    foodDiv.appendChild(deleteButton);

    foodList.appendChild(foodDiv);

    foodInput.value = "";
}

function deleteFood(e) {
    const item = e.target;
    if (item.classList[0] === "delete-btn") {
        const food = item.parentElement;
        food.classList.add("fall");
        food.addEventListener('transitionend', function(){
            food.remove();
        })
    }
}