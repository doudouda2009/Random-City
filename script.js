const getCityBtn = document.getElementById("getCity");
const cityName = document.getElementById("cityName");
const cityDiscription = document.getElementById("cityDiscription");

//Initialize soem data for city info
const cities = ["Paris", "New York", "London", "Little Rock"];
const description = [
  "Paris is a romantic and culturally rich city with iconic landmarks, such as the Eiffel Tower and the Louvre Museum.",
  "New York is a bustling city that offers diverse experiences and attractions, from towering skyscrapers to famous museums and galleries.",
  "London is a historic and cosmopolitan city with world-renowned landmarks, including Buckingham Palace, Big Ben, and the British Museum.",
  "Little Rock is a smaller city located in Arkansas, offering its own unique experiences and attractions within a more local and homely feel.",
];

//Add an event listener for the btn
getCityBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * cities.length);
  cityName.textContent = cities[randomIndex];
  cityDiscription.textContent = description[randomIndex];
});
