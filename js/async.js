// console.log('Fear is the mind killer.');

// ANCHOR Using Fetch API

// SECTION Example 1: .json() Web API Method
// NOTE - The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the reult of parsing the body text as JSON (MDN source, Response.json()):

// NOTE - Without adding the step of converting the body text to JSON, the fetch method logs the overall Response object being returned by the request call.
fetch("https://pokeapi.co/api/v2/pokemon/77/")
    .then((response) => console.log(response));

// NOTE - This time, we'll add the step of parsing the body text to JSON. Think of it as two separate promises. The first promise is the overall Response object being returned by the fetch request/call. When we pass this to the Response.json() method, it creates a new "second" promise that resolves to the result of the parsed body text that is JSON. Now we have access to all information of Pokemon(ID: 77): "Ponyta".
fetch("https://pokeapi.co/api/v2/pokemon/77/")
    .then((response) => response.json())
    .then((data) => console.log(data));

