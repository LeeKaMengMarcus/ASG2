function fetchCharacters() {
    fetch(`https://api.genshin.dev/characters/`)
    
    .then(response => {
        console.log(response)
        if (!response.ok){
            throw Error("ERROR")
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        var i;
        var html = "";
        for (i = 0; i < data.length; i++) {
            fetch(`https://api.genshin.dev/characters/${data[i]}`)
            .then(response => {
                console.log(response)
                if (!response.ok){
                    throw Error("ERROR")
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
            document
            .getElementById('characters')
            .insertAdjacentHTML("afterbegin", `<img src="characters/${data.name}/icon.jpg/"><br>Name: ${data.name}<br>Rarity: ${data.rarity}<br>Vision: ${data.vision}<br>Weapon: ${data.weapon}<br>${data.description}<br><br>`);
            })
            
            }
            })
    .catch(error => {
        console.log(error);
    })
};

function fetchArtifacts() {
    fetch('https://api.genshin.dev/artifacts/');
};

function fetchWeapons() {
    fetch('https://api.genshin.dev/weapons/');
};

fetchArtifacts();
fetchCharacters();
fetchWeapons();