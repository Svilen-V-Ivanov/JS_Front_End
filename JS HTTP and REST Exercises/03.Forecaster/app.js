function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/';
    const locationDataInfo = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentWeather = document.getElementById('current');
    const upcommingWeather = document.getElementById('upcoming');

    submitBtn.addEventListener('click', getInfo);

    async function getInfo() {
        let locationId = '';
        const iconDict = {
            'Sunny': '☀',
            'Partly sunny': '⛅',
            'Overcast': '☁',
            'Rain': '☂'
        };
        try {
            const locationInfo = await fetch(`${BASE_URL}locations`);
            let locationData = await locationInfo.json();
            locationData = Object.values(locationData);
            const inputData = locationDataInfo.value;

            for (const location of locationData) {
                if (location['name'] === inputData) {
                    locationId = location['code'];
                }
            }
        } catch (err) {
            forecastDiv.textContent = 'Error';
        }

        try {
            currentWeather.innerHTML = '<div class="label">Current conditions</div>';
            let forecastsDiv = document.createElement('div');
            forecastsDiv.classList.add('forecasts');
            let symbolSpan = document.createElement('span');
            symbolSpan.classList.add('condition', 'symbol');
            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('condition');
            forecastsDiv.appendChild(symbolSpan);
            forecastsDiv.appendChild(conditionSpan);

            const todayInfo = await fetch(`${BASE_URL}today/${locationId}`);
            let todayData = await todayInfo.json();
            todayData = Object.values(todayData);
            let obj = todayData[0];
            let townName = todayData[1];
            let { condition, high, low } = obj;
            let array = [townName, [high, low], condition];

            forecastDiv.style.display = 'block';
            currentWeather.appendChild(forecastsDiv);
            symbolSpan.textContent = iconDict[condition];

            for (const iterator of array) {
                let spanSpan = document.createElement('span');
                spanSpan.classList.add('forecast-data');
                if (typeof iterator === 'object') {
                    spanSpan.textContent = `${iterator[1]}°/${iterator[0]}°`;
                    conditionSpan.appendChild(spanSpan);
                } else {
                    spanSpan.textContent = iterator;
                    conditionSpan.appendChild(spanSpan);
                }
            }

        } catch (err) {
            forecastDiv.textContent = 'Error';
        }

        try {
            upcommingWeather.innerHTML = '<div class="label">Three-day forecast</div>';
            let futureForecast = document.createElement('div');
            futureForecast.classList.add('forecast-info');
            upcommingWeather.appendChild(futureForecast);
            const todayInfo = await fetch(`${BASE_URL}upcoming/${locationId}`);
            let futureData = await todayInfo.json();
            futureData = Object.values(futureData)[0];

            for (const day of futureData) {
                let newSpan = document.createElement('span');
                let { condition, high, low } = day;
                let arr = [iconDict[condition], [high, low], condition];
                newSpan.classList.add('upcoming');
                futureForecast.appendChild(newSpan);

                for (const iterator of arr) {
                    let spanSpan = document.createElement('span');


                    if (iterator === iconDict[condition]) {
                        spanSpan.classList.add('symbol');
                        spanSpan.textContent = iterator;
                        newSpan.appendChild(spanSpan);
                    } else if (typeof iterator === 'object') {
                        spanSpan.classList.add('forecast-data');
                        spanSpan.textContent = `${iterator[1]}°/${iterator[0]}°`;
                        newSpan.appendChild(spanSpan);
                    } else {
                        spanSpan.classList.add('forecast-data');
                        spanSpan.textContent = iterator;
                        newSpan.appendChild(spanSpan);
                    }
                }
            }

        } catch (err) {
            forecastDiv.textContent = 'Error';
        }
    }

}
attachEvents();