console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    
    const url = 'http://localhost:3000/weather?address=' + location

    const resp = await fetch(url);
    const data = await resp.json();
    if (data.error) {
        messageOne.textContent = data.error
    } else {
        messageOne.textContent = "City: " + data.location
        const arr = JSON.parse(data.forecast)
        console.log(arr[0])
        for (let i = 0; i < 3; i++){
            messageTwo.innerHTML += '<p>' + arr[i].Date + '</p>'
            messageTwo.innerHTML += '<p>' + 'High: ' + arr[i].Temperature.Maximum.Value + '</p>'
            messageTwo.innerHTML += '<p>' + 'Low: ' + arr[i].Temperature.Minimum.Value + '</p>'
        }
    }
})