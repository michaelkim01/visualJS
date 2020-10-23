// Selectors
const foodInput = document.querySelector('.food-input');
const foodButton = document.querySelector('.food-button');
const foodList = document.querySelector('.food-items-list');

// Event Listeners
foodButton.addEventListener('click', addFood);
foodList.addEventListener('click', deleteFood);

// Functions

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