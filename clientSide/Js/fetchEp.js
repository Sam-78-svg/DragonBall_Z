function fetchEp() {
    return fetch('./Js/dragon_ball_z_season_1.json')
        .then(res => res.json())
        .then(data => {
            console.log(data.episodes);
            display(data.episodes)
        })
        .catch(err => console.error(err.message))
};

function display(data) {
    data.forEach(ep => {
        let name = document.createElement('h3');
        name.innerHTML = `${ep.image}`;
        document.body.appendChild(name)
    });
}

fetchEp();

