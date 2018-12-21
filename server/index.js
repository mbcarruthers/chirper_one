const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");


const client_path = path.join( __dirname , "../client");
const server_path = path.join( __dirname , "../server");

const server = http.createServer( function( req , res ) {
    const parsed_url = url.parse( req.url , true );

    // ======== GET ==========
    if( req.method === "GET") {
        if (parsed_url.pathname === "/") {
            console.log("request made to " + parsed_url.pathname + " from " + res.socket.remoteAddress);

            fs.readFile(path.join(client_path, "index.html"), "utf8", function (err, data) {
                if (err) {
                    res.writeHead(404, "Cannot load page");
                    res.end();
                } else {
                    res.end(data);
                }
            })
        }
        else if (parsed_url.pathname === "/api/chirps") {
            console.log("Request made to " + parsed_url.pathname + " from " + res.socket.remoteAddress);
            if (req.method === "GET") {
                res.writeHead(200, {"Content-type": "application/json"});
                let json_data = readJSONFile("data.json");
                res.end(json_data);
            }
        } else if (parsed_url.pathname === "/styles.css") {
            console.log("Request made to " + parsed_url.pathname + " from " + res.socket.remoteAddress);

            res.writeHead(200, {"Content-type": "text/css"});
            fs.readFile(path.join(client_path, "styles.css"), "utf8", function (err, data) {
                if (err) {
                    res.writeHead(404, "Cannot load CSS");
                    res.end();
                } else {
                    res.writeHead(200, {"Content-type": "text/css"});
                    res.end(data);
                }
            })
        } else if (parsed_url.pathname === "/script.js") {
            console.log("Request made to " + parsed_url.pathname + " from " + res.socket.remoteAddress);
            fs.readFile(path.join(client_path, "script.js"), "utf8", function (err, data) {
                if (err) {
                    res.writeHead(404, "Could not load script.js");
                    res.end();
                } else {
                    res.writeHead(200, {"Content-type": "text/javascript"});
                    res.end(data);
                }
            })
        } else if (parsed_url.pathname === "/data.json") {
            console.log("Request made to " + parsed_url.pathname + " from " + res.socket.remoteAddress);
            fs.readFile(path.join(server_path, "data.json"), "utf8", function (err, data) {
                if (err) {
                    res.writeHead(404, "data.json could not be found");
                    res.end();
                } else {
                    res.writeHead(200, {"Content-type": "text/json"});
                    res.end(data);
                }
            })
        } else {
            console.log("Request made to " + parsed_url.pathname + " from " + res.socket.remoteAddress);
            res.writeHead(404, "Unable to find page");
            res.write("Unable to find requested page");
            res.end();
        }
    } else if( req.method === "POST" ) {
        console.log("Post request made to " + parsed_url.pathname + " from " + res.socket.remoteAddress );
        let new_chirp = " ";
        req.on("data", function( data ) {
            new_chirp += data;
        })
        fs.readFile( path.join( server_path , "data.json"), function( err , data ) {
            if( err ) {
                console.log("There was an error loading data.json");
                res.writeHead( 404 , "Could not write to data.json");
                console.log("Error writing to data.json");
                res.end();
            } else {
                res.writeHead(201);
                res.end();
            }
        })
    }
});



server.listen( 3000 , function() {
    console.log("We are live at port 3000");
});

function readJSONFile( file ) {
    return fs.readFileSync(file).toString();
}