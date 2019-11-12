'use strict';

// const apiKey = '348839-SimpleRe-U2PY34VF';
let baseUrl = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar`;

function queryParamsToString(artist) {
    if (artist.includes(' ') === true) {
       let res = artist.replace(' ', '+');
    console.log(res);
    return res;
    } else {
        console.log(artist);
        return artist;
    }
}

function getRecommendation(artist) {

    const queryString = queryParamsToString(artist);
    const url = baseUrl + '?q=' + queryString;
    console.log(url);
    
    fetch(url)
    .then(response => response.json())
    .then(responseJson => renderLyrics(responseJson))
    .catch(error => alert('Something went wrong.'))
    
}

function renderLyrics(responseJson) {
    console.log(responseJson);
    $('.api-content').empty();


    for (let i = 0; i <= responseJson.length; i++) {
        
        let artistName = responseJson.Similar.Results[i].Name;

        $('.api-content').append(`
        <p>${responseJson[i].artistName}</p>
        `);
    }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let artist = $('.query').val();

        getRecommendation(artist);
    })
}

$(function() {
    watchForm();
});