// Load JSon file
fetch("./user.json")
// Response status code 200 -> Convert the respone to JSON
.then(res => {
    //console.log(res);
    // console.log(res.json())
    return res.json()
})
// Json data available - invoke URL
.then(data => {
    console.log(data.name);
    return fetch(`https://api.github.com/users/${data.name}`)
})
// status of url invoke is 200 - convert data to Json
.then(res => res.json())
// Data is converted to JSON - Load Image
.then(user => {
    console.log(user);
    const img = document.createElement("img");
    img.src = user.avatar_url;

    document.body.append(img);
})
// Display error
.catch(error => console.log(error));