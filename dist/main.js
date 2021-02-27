// Selectors
const foodInput = document.querySelector('.food-input');
const foodButton = document.querySelector('.food-button');
const foodList = document.querySelector('.food-items-list');
const calorieButton = document.querySelector('.calorie-button');
const age = document.querySelector('.age');
const gender = document.querySelector('.gender');
const feet = document.querySelector('.height-feet');
const inches = document.querySelector('.height-inches');
const weightPounds = document.querySelector('.weight-pounds');
const activity = document.querySelector('.activity');
const cpdDisplay = document.querySelector('.cpd-display');

// Event Listeners
foodButton.addEventListener('click', addFood);
foodList.addEventListener('click', deleteFood);
calorieButton.addEventListener('click', calculateCalories);

// Functions
function calculateCalories() {
    event.preventDefault();

    let cpd = 0;

    if (gender.value === "male") {
        cpd = Math.round(10 * 0.453592 * weightPounds.value + 6.25 * (30.48 * feet.value + 2.54 * inches.value) - 5 * age.value + 5); 
    } else {
        cpd = Math.round(10 * 0.453592 * weightPounds.value + 6.25 * (30.48 * feet.value + 2.54 * inches.value) - 5 * age.value - 161); 
    }
    
    cpdDisplay.textContent = cpd;
}

function addFood(event) {
    event.preventDefault();
    
    // API
    let defaultField = "?fields=item_name%2Cnf_calories%2Cnf_total_fat";
    let apiURL = "https://nutritionix-api.p.rapidapi.com/v1_1/search/" + foodInput.value + defaultField;
    fetch(apiURL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "",
            "x-rapidapi-host": "nutritionix-api.p.rapidapi.com"
        }
    })
        .then(response => 
            // if (response.ok) {
            //     console.log("SUCCESS")
            // } else {
            //     console.log("FAILURE")
            // }
            response.json()
        )
        .then(data => {
            console.log(data.hits)
            const foodDiv = document.createElement("div");
            foodDiv.classList.add("food");
        
            const newFood = document.createElement("li");
            newFood.innerText = 
                data.hits[0].fields.item_name
                + "\n" + "Calories: "
                + data.hits[0].fields.nf_calories;
            newFood.classList.add("food-item");
        
            foodDiv.appendChild(newFood);
            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
            deleteButton.classList.add("delete-btn");
            foodDiv.appendChild(deleteButton);
        
            foodList.appendChild(foodDiv);

        })
        .catch(err => console.error(err));



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

