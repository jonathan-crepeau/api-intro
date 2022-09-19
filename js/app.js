
// SECTION How To Make An HTTP Request

const httpRequest = new XMLHttpRequest();

// // NOTE - You can also use an anonymous function to define the actions that will process the response: httpRequest.onreadystatechange = () => { process the server response here };
httpRequest.onreadystatechange = () => {
     try {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                const response = JSON.parse(httpRequest.responseText);
                console.log(response);
            } else {
                alert('There was a problem with the request')
            }
        }
     } catch (e) {
        console.log(`Caught exception: ${e.description}`)
     }
}

httpRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/106/", true);
httpRequest.send();


// SECTION - Same HTTP Request as above, but with $.ajax() jQuery core method:
// let pokemonResut = $.ajax({
//     method: 'GET',
//     url: "https://pokeapi.co/api/v2/pokemon/106/",
//     dataType: 'json',
//     success: function(response) {
//         console.log(response)
//     }
// })


// SECTION - XMLHTTPRequest.readystate example (1-4)
// const request = new XMLHttpRequest();
// console.log('UNSENT', request.readyState);

// request.open('GET', "https://pokeapi.co/api/v2/pokemon/23", true);
// console.log('OPENED', request.readyState);

// request.onprogres = () => {
//     console.log('LOADING', request.readyState);
// }

// request.onload = () => {
//     console.log('DONE', request.readyState);
// }

// request.send(null)
