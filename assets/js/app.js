
async function fetchPun(url) {
    try{
        const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
    return data;
}
    catch (error) {
        console.error('Error fetching data:', error)
    }
}


function createPunView(buttonId, punContainer){
    const button = document.getElementById(buttonId);
    const pun = document.getElementById(punContainer);

    button.addEventListener('click', ()=> {
        fetchPun('https://punapi.rest/api/pun').then(punData => {
            if(punData) {
                pun.innerText = punData.pun;
            }
        });

        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const RGBValue = `rgb(${red}, ${green}, ${blue})`;

        const body = document.getElementById('body');
        body.style.backgroundColor = RGBValue;
        button.style.color = RGBValue;

    })
}

createPunView('PunGenerator', 'pun');