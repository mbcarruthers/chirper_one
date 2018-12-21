function chirp() {
    let input = document.getElementById("chirp-input");
    request( input );
    create_div( input.value );
}

function request( input ) {
    let req = new XMLHttpRequest();
    req.open("POST","/server/data.json");
    req.onload = function() {
        console.log("Request sent to data.json");
    }

    let message = {
        user:"McCain",
        message: input.value,
        time: new Date().toISOString()
    }
    req.send(JSON.stringify( message ) );
}

function create_div( chirp ) {
    let container = document.getElementById("container");
    let div = document.createElement("div");
    div.className = "chirp";
    let h3 = "<h3> McCain </h3>";
    let p = "<p>" + chirp + "</p>";
    let time = new Date().toISOString();
    div.innerHTML = h3 + p + time;
    container.append( div );
}