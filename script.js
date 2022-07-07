const documentContent = document.querySelectorAll('.container')[0];
const loadBtn = document.getElementById('btn-load');

fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2022", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "0cb08cf61a5b77233ced3fc9c9cdc94f"
    }
})
    .then(response => {
        return response.json()
    })
    .then(data => {
        const fixtures = data.response;
        window.addEventListener('load', getTwenty(fixtures, 0));
        loadBtn.addEventListener('click', () => {
            getTwenty(fixtures, 4);
        })

    })
    .catch(err => {
        console.log(err);
    });


const formatData = (data) => {
    let content = '';
    data.forEach(
        (match) => {
            content += `
                <div class="match-card">
                    <img src="${match.teams.home.logo}" alt="home-team-logo" load="lazy" class="team-home">
                    <h1 class="score">
                        ${!match.goals.home ? '0' : match.goals.home}-${!match.goals.away ? '0' : match.goals.away}
                    </h1>
                    <img src="${match.teams.away.logo}" alt="away-team-logo" load="lazy" class="team-home">
                </div>
            `
        }
    )
    return content;
}

function getTwenty(arr, i) {
    const fourItemArr = arr.slice(i, i + 4);
    documentContent.innerHTML += formatData(fourItemArr);
    i = i + 4;
}


