// Init Storage objet
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object 
const weather = new Weather(weatherLocation.city);

// Init ui object
const ui = new UI();



// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    // Change location
    weather.changeLocation(city);

    // Set location in LS
    storage.setLocationData(city);

    // Get and display weather
    getWeather();

    // Close Modal
    $('#locModal').modal('hide');

    e.preventDefault();
})





function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results);
            console.log(results);
        })
        .catch(err => console.log(err))
    
}