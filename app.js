

var cities = [];
const autocomplete = document.getElementById("autocomplete");
const resultsHTML = document.getElementById("results");

autocomplete.oninput = function () {
    const userInput = this.value;
    resultsHTML.innerHTML = "";
    if (userInput.length > 0) {
        const url = `https://jsonmock.hackerrank.com/api/weather?name=${userInput}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            cities = data.data;
        })
        .catch(() => {
            msg.textContent = "Please search for a valid city";
        });
        for (i = 0; i < cities.length; i++) {
            resultsHTML.innerHTML += "<div class="+'list-group'+"> <label class="+'list-group-item'+">" + cities[i].name + "</label></div>";
        }
    }
};

resultsHTML.onclick = function (event) {
  const setValue = event.target.innerText;
  let weather = document.getElementById("weather");
  let wind = document.getElementById("wind");
  let humidity = document.getElementById("humidity");
  weather.innerHTML = "";
  humidity.innerHTML = "";
  wind.innerHTML = "";
  const url = `https://jsonmock.hackerrank.com/api/weather?name=${setValue}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        res = data.data;
        weather.innerHTML += "<span>" + res[0].weather + "</span>";
        wind.innerHTML += "<span>" + res[0].status[0] + "</span>";
        humidity.innerHTML += "<span>" + res[0].status[1] + "</span>";
        console.log(res, 'results')
    })
    .catch(() => {
        msg.textContent = "Please search for a valid city";
    });
};