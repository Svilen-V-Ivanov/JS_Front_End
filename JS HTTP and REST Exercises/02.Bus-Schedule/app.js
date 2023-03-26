function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const outputField = Array.from(document.getElementsByClassName('info'))[0];
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let stopId = 'depot';
    let stopName = ''

    function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        fetch(`${BASE_URL}${stopId}`)
            .then((res) => res.json())
            .then((stopInfo) => {
                let { name, next} = stopInfo;
                stopId = next;
                stopName = name;
                outputField.textContent = `Next stop ${stopName}`;
            })
            .catch((err) => {
                outputField.textContent = 'Error';
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            })
    }

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        try {
            outputField.textContent = `Arriving at ${stopName}`;
        } catch (err) {
            outputField.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();