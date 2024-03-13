sequenceDiagram
    user browser
    host server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server response 304
    server->>browser: HTML document
    server close

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server response 304
    server->>browser: CSS document
    server close

    browser->>server: GET 
    https://studies.cs.helsinki.fi/exampleapp/main.js
    server response 304
    server->>browser: JS script
    server close

    browser->>server: GET 
    https://studies.cs.helsinki.fi/exampleapp/data.json
    server response 200
    server->>browser: JSON object
    server close

    user->>input
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server response 304
    server->>browser: trigger refresh
    render page
    server close