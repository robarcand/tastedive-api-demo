'use strict';

const apiKey = '348839-SimpleRe-U2PY34VF';

const options = {
    method: 'GET',
    mode: 'no-cors'
    // credentials: 'same-origin'
}

function getRecommendation() {

    // searchFor, searchType, callback
    
    const url = `https://tastedive.com/api/similar?q=the+smiths&k=${apiKey}`;

    // https://cors-anywhere.herokuapp.com/

    fetch(url, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    // .catch(error => alert('Something went wrong.'))

    //     let query = {
    //         type: searchType,
    //         k: apiKey,
    //         q: searchFor,
    //         limit: tasteDiveQueryLimit,
    //         info: 1
    //     };
    
    //     $.getJSON(url, query, callback);
    // };
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