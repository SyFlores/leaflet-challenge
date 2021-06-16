# leaflet-challenge
Visualizing Data with Leaflet
*Collaborators: Sy Flores*

---
## **Table of Contents**
- [Abstract](#abstract)
- [Repository](#repository)

---

## Abstract
The United States Geological Survey, or USGS for short is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.  
We will be building tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding...) on issues facing our planet.

## Repository
This section serves as a means to navigate the project/repository.

- **Images**
    - 1-Logo.png
        - This image file contains the logo for USGS
    - 2-BasicMap.png
        - This image file contains an example of the what the map/tool should approximately look like
    - 3-Data.png
        - This image file contains an example of the [data page](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) describing the structure of the GeoJSON format
    - 4-JSON.png
        - This image file contains a snippet of what the GeoJSON data looks like
    - 5-Advanced.png
        - This image file contains an example of the what an advanced map/tool should approximately look like
    - 6-Time_Keeps_On_Ticking.gif
        - This image file contains a gif file of a short time period on which earthquakes are populating on the tool
    - Cluster.png
        - This image file contains example of what a cluster map for this tool looks like
    - Heat.png
        - This image file contains example of what a heat map for this tool looks like
- **static**
    - **css**
        - style.css
            - This page contains all relevant styling for the page
    - **js**
        - config.js
            - This page contains all keys that are intended to be hidden
            - In order to load the map, you will need to manually fill in your [mapbox](https://www.mapbox.com/) API key
        - logic.js
            - This page contains the primary script involved in loading and generating the USGS tool
- index.html
    - This is both the home page and landing page for the website
    - This page will primarily consist of the tool with little else
- README.md
    - The primary use of this file is to explain how to navigate the project and repository

---