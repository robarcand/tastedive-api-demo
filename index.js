'use strict';

const apiKey = '348839-SimpleRe-U2PY34VF';

const options = {
    method: 'GET',
    mode: 'no-cors'
}

function getRecommendation() {

    const url = `https://tastedive.com/api/similar?q=the+smiths&k=${apiKey}`;

    fetch(url, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    // .catch(error => alert('Something went wrong.'))
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getRecommendation();
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
})