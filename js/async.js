// console.log('Fear is the mind killer.');

// ANCHOR Using Fetch API

// SECTION Example 1: .json() Web API Method
// NOTE - The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the reult of parsing the body text as JSON (MDN source, Response.json()):

// NOTE - Without adding the step of converting the body text to JSON, the fetch method logs the overall Response object being returned by the request call.
// fetch("https://pokeapi.co/api/v2/pokemon/77/")
//     .then((response) => console.log(response));

// NOTE - This time, we'll add the step of parsing the body text to JSON. Think of it as two separate promises. The first promise is the overall Response object being returned by the fetch request/call. When we pass this to the Response.json() method, it creates a new "second" promise that resolves to the result of the parsed body text that is JSON. Now we have access to all information of Pokemon(ID: 77): "Ponyta".
// fetch("https://pokeapi.co/api/v2/pokemon/77/")
//     .then((response) => response.json())
//     .then((data) => console.log(data));


// SECTION: Example 2: Fetch API won't reject an returned HTTP status of 404 or 500 (unlike jQuery.ajax()):

// NOTE - With the Response object, look at the 'ok' and 'status' properties. Here, we received a Response to our fetch call/request with (status:200) and (ok:true):
// fetch("https://pokeapi.co/api/v2/pokemon/77/")
//     .then((response) => console.log(response));

// NOTE - In this next call, we'll intentionally change the url to include a pokemon ID that is incorrect ('77a'). Again, the Fetch API differs from jQuery.ajax() because the original Promise will still resolve and return us a Response object. However, we can see the differences compared to the above call with the property values now at (status: 404) and (ok:false):
// fetch("https://pokeapi.co/api/v2/pokemon/77a/")
//     .then((response) => console.log(response));