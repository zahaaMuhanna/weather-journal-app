// Personal API Key for OpenWeatherMap API
const apiKey = 'bcac78b685f69a1d90ce74c77894e671';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Event listener to execute after Generate button click
document.getElementById('generate').addEventListener('click', performAction);

async function performAction(event){
   // prevent page from reloading after clicking generate
    event.preventDefault();
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    if(zip == ""){
      alert("Please enter a valid zip code")
      return;
    }


    try{
        const weatherData = await getWeatherData(zip);
        await postWeatherData(weatherData, feelings);
        await updateUI();
        }
        catch(error) {
            console.log('error', error);
        }
}



// Async function to get weather data from the API
const getWeatherData = async (zip) => {
    const res = await fetch(`${baseURL}${zip}&appid=${apiKey}`);

    try {
        const data = await res.json();
        return data;
        }
        catch(error){
        console.log('error', error);
        }
}

// Async function to post data to the app endpoint
const postWeatherData = async (weatherData, feelings) => {
    const data = {
        temp: weatherData.main.temp,
        date: new Date(),
        feel: feelings
    };
   const res = await fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
try {
    const newData = await res.json();
    return newData;
  }catch(error){
    console.log("error", error);
  }
}


// Async function to update the UI with the app data
const updateUI = async () => {
    const res = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await res.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ ' degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById("date").innerHTML =allData.date;
    }
    catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}

