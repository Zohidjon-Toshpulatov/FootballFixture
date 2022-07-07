const main = document.querySelectorAll('.container')[0];

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
        formatData(fixtures);
    })
    .catch(err => {
        console.log(err);
    });


const formatData = (data) => {
    let content = '';
    data.forEach((match) => {
        content += `
        <div class="flex">
            <img src="${match.teams.home.logo}" alt="home-team-logo" class="team-home">
            <h1 class="score">
                ${!match.goals.home ? '0' : match.goals.home}-${!match.goals.away ? '0' : match.goals.away}
            </h1>
            <img src="${match.teams.away.logo}" alt="" class="team-home">
        </div>
    `
    })

    main.innerHTML += content;
}



