const aCard = {
    name: "Snortleblat",
    image: 'images/cardimage.png',

    stats: [
        {class: 'Swamp Beast Diplomat', level: 8, health: 100,}
    ],

    attacked() {
        this.stats[0].health -=20;

        if (this.stats[0].health <= 0) {
            this.stats[0].health = 0;
            alert(`${this.name} has died!`)
        }

        renderStats(this.stats);
    },

    levelUp() {
        this.stats[0].level +=1;
        renderStats(this.stats);
    }


}

document.querySelector("#cardName").textContent = aCard.name

document.querySelector('img').setAttribute('src', aCard.image);
document.querySelector('img').setAttribute('alt', aCard.name);


document.getElementById('attackButton').addEventListener('click', () => {
    aCard.attacked();
});

document.getElementById('levelUpButton').addEventListener('click', () => {
    aCard.levelUp();
});


function statsTemplate(stat) {
    return `<div>
                <p><strong>Class: </strong> <span id="cardClass">${stat.class}</span></p>
                <p><strong>Level: </strong> <span id="cardLevel">${stat.level}</span></p>
                <p><strong>Health: </strong> <span id="cardHealth">${stat.health}</span></p>
            </div>`
}

function renderStats(stats) {
    const html = stats.map(statsTemplate);
    document.querySelector("#statsContainer").innerHTML = html.join("");
}

renderStats(aCard.stats)



