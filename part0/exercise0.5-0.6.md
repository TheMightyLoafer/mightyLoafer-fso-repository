sequenceDiagram
    user browser
    host server

    browser->>server: GET 
    https://studies.cs.helsinki.fi/exampleapp/spa
    server response 304
    server->>browser: send app
    server close

    browser->>server: GET 
    https://studies.cs.helsinki.fi/exampleapp/spa.js
    server response 304
    server->>browser: JS Script
    server close

    browser->>server: GET
https://studies.cs.helsinki.fi/exampleapp/data.json
    server response 304
    server->>browser: JSON Object
    server close

    user->>input
    browser->>server: POST 
    https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server response 201
    server->>browser: reload page
    server close