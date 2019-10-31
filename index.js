'use strict';

const apiKey = '348839-SimpleRe-U2PY34VF';


function getRecommendation() {
    // $.ajax({
    //     type: 'GET',
    //     url: 'https://tastedive.com/api/similar?q=the+smiths&k=348839-SimpleRe-U2PY34VF',
    //     jsonp: 'callback',
    //     dataType: 'jsonp'
    // })

    const url = `https://tastedive.com/api/similar?q=the+smiths&k=${apiKey}`;

    const options = {
        headers: new Headers({
            "X-Api-Key": apiKey})
        };

    fetch(url, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
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