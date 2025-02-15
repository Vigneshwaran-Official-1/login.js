// Sample Data for Restaurants
const restaurants = [
    {
        id: 1,
        name: "Fresh Point",
        image:"https://c8.alamy.com/comp/D9DYDK/people-at-food-court-in-a-shopping-mall-express-avenue-chennai-tamil-D9DYDK.jpg"
    },
    {
        id: 2,
        name: "SUBWAY",
        image:"https://c7.alamy.com/comp/AYETEG/food-court-inside-citi-centre-shopping-centre-mall-in-chennai-south-AYETEG.jpg"
    },
    {
        id: 3,
        name: "KFC",
        image:"https://media.gettyimages.com/id/481688365/photo/people-at-food-court-in-a-shopping-mall-express-avenue-chennai-tamil-nadu-india.jpg?s=612x612&w=gi&k=20&c=p147VEyUBjwchYy9OQbDr_nFBJK4mYgq5LoMv5lLa2g="
    },
    {
        id: 4,
        name: "Delicious",
        image:"https://www.noidacommercial.com/wp-content/uploads/2019/10/images-385x258.jpeg"
    }
];

// Load Restaurants on Page Load
function loadRestaurants() {
    const container = document.getElementById('restaurants-list');
    container.innerHTML = restaurants.map(restaurant => `
        <div class="restaurant-card" onclick="selectRestaurant(${restaurant.id})">
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <h3>${restaurant.name}</h3>
        </div>
    `).join('');
}

// Handle Restaurant Selection
function selectRestaurant(restaurantId) {
    localStorage.setItem('selectedRestaurant', restaurantId);
    window.location.href = 'menu.html';
}

// Load Restaurants When the Page Loads
window.onload = loadRestaurants;