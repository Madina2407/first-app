document.querySelector('#tempConverter').addEventListener('submit', function(event) {
    event.preventDefault();

    const degreeInput = parseFloat(document.getElementById('degreeInput').value);
    const temperature = document.getElementById('temperature').value;
    const convertTo = document.getElementById('convert').value;
    const h1 = document.querySelector(".secondContainer h1");
   
    let result;

    if (temperature === 'celcius' && convertTo === 'fahrenheit') {
        result = (degreeInput * 9/5) + 32;
        h1.textContent = `${degreeInput}°C is ${result.toFixed(2)}°F`;
    } else if (temperature === 'fahrenheit' && convertTo === 'celcius') {
        result = (degreeInput - 32) * 5/9;
        h1.textContent = `${degreeInput}°F is ${result.toFixed(2)}°C`;
    } else {
        result = degreeInput;
        h1.textContent = result
    }
});