class Weather {
    constructor(inputVal){
        this.apiKey = 'c05b09bd50dc32cba0c6c0077186e7de',
        this.inputVal = inputVal
     
    }


    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.inputVal}&lang=es&appid=${this.apiKey}&units=metric`);

        const responseData = response.json();
        
        return responseData;
    }

    // Change weather location

    changeLocation(inputVal) {
        this.inputVal = inputVal;
    }
}