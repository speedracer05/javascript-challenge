# javascript-challenge

## Description
WAKE UP SHEEPLE! This challenge project collected 'eye-witness reports' that aleines have come to Earth. I've used the data to create a dynamic table, based on the dataset provided. The dataset can be searched by date to filter sightings that occured on a specifc datetime range.

## Table of Contents
-   [Description](#description)
-   [Installation and Deployment](#installation-and-deployment)
-   [D3 Visualization](#d3-visualization)
-   [Technology](#technology)
-   [Resources](#resources)
-   [Contact](#contact)

## Installation and Deployment
1. Running the visualization can be done via web browser using the Windows Command Prompt (CMD) 
2. Download the D3-Challenge respository from my [Github](https://github.com/speedracer05/D3-Challenge)
3. Open a command line terminal
    - From Windows CMD, press the "Windows" key, then type "cmd" (this will open the CMD application)
    - From Mac, press the "Command" button and the space bar, simultaneously (this will open a search bar on your screen). Open Spotlight. Type "Terminal" and open it. Double click "Terminal" in the left sidebar to open your Mac's Terminal.
4.  Navigate to the "D3-Challenge" directory that was downloaded
    - Type "python -m http.server" (don't include the quotes).
    - In a web browser, type "http://localhost:8000/". A web browser will launch the `app.js` file

## D3 Visualizaton
A basic HTML page was created, showing the data that was extracted, and presented in table form.


<img align="left" src="https://github.com/speedracer05/javascript-challenge/blob/main/UFO-level-1/static/images/javaScrpit_applicaton.png">

## Technology
`JavaScript`
`HTML`
`CSS`
`D3.js`

## Development Notes
I reviewed the dataset saved as a `data.js` file. The data represented an array of objects, representing detail sighting information; time, location, shape of event, duration of event, and comments provided by the 'observer'. A forEach statement was used to find each object and appended to a table. Each object has it's own cell.

An event Listner, in the form of a button, was created for the Filter Button. The event is triggered when the button was selected. Curently the table search is limited to the date field. I hope to add a more dynamic filter to search all 5 input fields in the near future.

## Resources
1. Future implementation resources
  - [Responsive Tables](https://codepen.io/gumetis/pen/OJPNxwy)
3. [Searchable Tables](https://codepen.io/adobewordpress/pen/gbewLV)


## Contact
[John Chan](https://github.com/speedracer05)





