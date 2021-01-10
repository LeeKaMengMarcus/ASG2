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
                console.log(data.name);
            document
            .getElementById('characters')
            .insertAdjacentHTML("afterbegin", `<img src="characters/${data.name}/icon.jpg">
            <br><h4>${data.name}</h4><p>Rarity: ${data.rarity}<br>Vision: ${data.vision}<br>Weapon: ${data.weapon}<br><br>
            Character Description:<br>${data.description}</p>

            <h5>Passive Talents</h5>
            <h6>First Passive Talent:</h6>
            <p>Talent Name: ${data.passiveTalents[0].name}<br>
            Talent Unlock: ${data.passiveTalents[0].unlock}<br>
            Talent Description:<br>${data.passiveTalents[0].description}<br><br></p>

            <h6>Second Passive Talent:</h6>
            <p>Talent Name: ${data.passiveTalents[1].name}<br>
            Talent Unlock: ${data.passiveTalents[1].unlock}<br>
            Talent Description:<br>
            ${data.passiveTalents[1].description}<br><br></p>

            <h6>Third Passive Talent:</h6>
            <p>Talent Name: ${data.passiveTalents[2].name}<br>
            Talent Unlock: ${data.passiveTalents[2].unlock}<br>
            Talent Description:<br>
            ${data.passiveTalents[2].description}<br><br></p>

            <h5>Skill Talents</h5>
            <h6>First Skill Talent:</h6>
            <p>Talent Name: ${data.skillTalents[0].name}<br>
            Talent Unlock: ${data.skillTalents[0].unlock}<br>
            Talent Description:<br>
            ${data.skillTalents[0].description}<br><br></p>

            <h6>Second Skill Talent:</h6>
            <p>Talent Name: ${data.skillTalents[1].name}<br>
            Talent Unlock: ${data.skillTalents[1].unlock}<br>
            Talent Description:<br>
            ${data.skillTalents[1].description}<br><br></p>

            <h6>Third Skill Talent:</h6>
            <p>Talent Name: ${data.skillTalents[2].name}<br>
            Talent Unlock: ${data.skillTalents[2].unlock}<br>
            Talent Description:<br>
            ${data.skillTalents[2].description}<br><br></p>

            <h5>Constellations</h5>
            <h6>First Constellation:</h6>
            <p>Constellation Name: ${data.constellations[0].name}<br>
            Constellation Unlock: ${data.constellations[0].unlock}<br>
            Constellation Description:<br>
            ${data.constellations[0].description}<br><br></p>

            <h6>Second Constellation:</h6>
            <p>Constellation Name: ${data.constellations[1].name}<br>
            Constellation Unlock: ${data.constellations[1].unlock}<br>
            Constellation Description:<br>
            ${data.constellations[1].description}<br><br></p>

            <h6>Third Constellation:</h6>
            <p>Constellation Name: ${data.constellations[2].name}<br>
            Constellation Unlock: ${data.constellations[2].unlock}<br>
            Constellation Description:<br>
            ${data.constellations[2].description}<br><br></p>

            <h6>Fourth Constellation:</h6>
            <p>Constellation Name: ${data.constellations[3].name}<br>
            Constellation Unlock: ${data.constellations[3].unlock}<br>
            Constellation Description:<br>
            ${data.constellations[3].description}<br><br></p>

            <h6>Fifth Constellation:</h6>
            <p>Constellation Name: ${data.constellations[4].name}<br>
            Constellation Unlock: ${data.constellations[4].unlock}<br>
            Constellation Description:<br>
            ${data.constellations[4].description}<br><br></p>
            
            <h6>Sixth Constellation:</h6>
            <p>Constellation Name: ${data.constellations[5].name}<br>
            Constellation Unlock: ${data.constellations[5].unlock}<br>
            Constellation Description:<br>
            ${data.constellations[5].description}<br><br></p>

            `);
            })
            
            }
            })
    .catch(error => {
        console.log(error);
    })
};

function fetchArtifacts() {
    fetch(`https://api.genshin.dev/artifacts/`)
    
    .then(response => {
        console.log(response)
        if (!response.ok){
            throw Error("ERROR")
        }
        return response.json();
    })
    .then(data => {
        var i;
        var html = "";
        for (i = 0; i < data.length; i++) {
            fetch(`https://api.genshin.dev/artifacts/${data[i]}`)
            .then(response => {
                console.log(response)
                if (!response.ok){
                    throw Error("ERROR")
                }
                return response.json();
            })
            .then(data => {
            document
            .getElementById('artifacts')
            .insertAdjacentHTML("afterbegin", `
            <img src="artifacts/${data.name}/flower-of-life">
            <br><h5>${data.name}</h5>
            <p>Max Rarity: ${data.max_rarity}<br>
            2 Piece Bonus: ${data["2-piece_bonus"]}<br>
            4 Piece Bonus: ${data["4-piece_bonus"]}<br><br></p>`);
            })
            
            }
            })
    .catch(error => {
        console.log(error);
    })
};

function fetchWeapons() {
    fetch(`https://api.genshin.dev/weapons/`)
    
    .then(response => {
        console.log(response)
        if (!response.ok){
            throw Error("ERROR")
        }
        return response.json();
    })
    .then(data => {
        var i;
        var html = "";
        for (i = 0; i < data.length; i++) {
            fetch(`https://api.genshin.dev/weapons/${data[i]}`)
            .then(response => {
                console.log(response)
                if (!response.ok){
                    throw Error("ERROR")
                }
                return response.json();
            })
            .then(data => {
            document
            .getElementById('weapons')
            .insertAdjacentHTML("afterbegin", `
            <img src="weapons/${data.name}/icon">
            <h5>Name: ${data.name}</h5>
            <p>Rarity: ${data.rarity}<br>
            Location: ${data.location}<br>
            Type: ${data.type}<br>
            Base Attack: ${data.baseAttack}<br>
            Sub Stat: ${data.subStat}<br>
            Passive Name: ${data.passiveName}<br>
            Passive Description: ${data.passiveDesc}<br><br></p>`);
            })
            
            }
            })
    .catch(error => {
        console.log(error);
    })
};
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
fetchArtifacts();
fetchCharacters();
fetchWeapons();