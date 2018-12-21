# FS-SP17-Lab9
# Lab 09: Chirper

##### Covalence

## Info 

* You will be creating Chirper , a web-based messaging system 

* Chirper is used by millions of people 

* Chirper allows people to send absurdley short , non-useful messages to no one in particular 

* These messages will be called chirps 

## Getting Started 

* You will want to write the server code before you write the front-end

* You will need to install nodemon globally 

`npm install -g nodemon`


## Submission Instructions 

* Simply make sure you commit to your repository and push before the lab is due

## Objectives

* This will be your first lab where you will be building the front-end and the back-end

## Front-end

* You will build your front-end in the client folder

* Your index.html webpage should have a text box with a button labeled "Chirp!"

* WHen the page loads , a GET request should be made to `http://localhost:3000/api/chirps`

* When the server responds , create a div for each chirp and put it in the page so it is visible 

* The text field and button should behave as follows : 

* The button should be disabled if the text field is empty
 
* As soon as the field is no longer empty , the button should be enabled 

* If the field becomes empty again , the button should be disabled 

* Clicking the button will send the chirp off to the back-end you will build. Specifically you should:

* Create a JS object with properties `message`, `user` , `timestamp`

* send a POST request to `http://localhost:3000/api/chirps`

* Make sure you set the content type to JSON

* Make sure to convert the JS object to JSON before sending it in the post request 

* Once the server sends a response , make the new tweet show up in the tweet list

### Back-end:

* You will build an HTTP server using NodeJS

* You will write your server logic in index.js

* Your server should : 

* Check the request url path , if the path is `/`:

* Set the response code for OK and the content type for html

* respond with the contents of `index.html` in the `client` folder

* Otherwise if the path is `/api/chirps`

* Check the request method 

* If the message is a GET request: 

* Read the JSON stored in the data.json in the `server` folder

* Set the response code to 200 and the content type type for JSON

* Respond with the JSON data from the file

* NOTE: Instead of reading and then responding , you can respond more efficiently by creating a new read stream and piping it to the respons

* Otherwise if the request is a POST request 
 
* Read the JSON stored in data.json in the `server` folder

* This data is in JSON format

* You need to convert it to a JS object

* It will become an array 

* Collect the data sent in the POST request. It will be JSON

* Turn the collected data into a JS object

* Push that JS object onto the array

* Then , convert the array back into JSON and write it back to the data.json file

* Finally , set the response code to 201 and the content type to json

* End the response 

* In all other cases:

* Do not worry what the request method is 

* Look at the request url / path to determine what you should do 

* For example , if the requested path is /styles.css:

* Read the file styles.css from the `client` folder

* Set the response for OK and the content type to CSS

* respond with the contents of the file 

* OR: pipe a read stream to res
 
* You only have to worry about JS , HTML , and CSS

* If an error occurs while reading the file: 

* Set the response to 404 

* Respond with 'Not Found'

