let area = document.getElementById('episodeListingArea');
let ar = []

function fetchEp() {
    return fetch('./Js/dragon_ball_z_season_1.json')
        .then(res => res.json())
        .then(data => {
            console.log(data.episodes);
            ar = data.episodes || [];
            display(ar)
        })
        .catch(err => console.error(err.message))
};

function display(data) {
    data.forEach(ep => {
        let displayEp = document.createElement('div');
        displayEp.className = "p-3 bg-light border border-4 border-danger-subtle mb-4 mt-2 rounded-4 row shadow-sm ";
        displayEp.setAttribute = ('background-color', '#dab5a3')
        displayEp.innerHTML = `
                            <div class="col-12 rounded-4 border border-2 p-0 col-md-3">
                                <img src="${ep.image}"
                                     style="object-fit:cover; height:100%;width:100%;cursor:pointer;"
                                     alt="${ep.episode_name}"
                                     class="rounded-4"
                                     id="epImg"
                                />
        
                            </div>
                            <div class="col-12 col-md-9 d-flex text-dark fs-5 flex-column p-1 p-md-4" style="line-height:auto">
                                <p><strong>Episode No. </strong>${ep.episode_number}</p>
                                <p><strong>Name: </strong>${ep.episode_name}</p>
                                <p><strong>Season: </strong>${ep.season_name}</p>
                                <p><strong>Description:  </strong>${ep.description}</p>
                                <p><strong>Duration: </strong>${ep.duration}</p>
                            </div>
        `;

        area.appendChild(displayEp);
    });
}

fetchEp();

