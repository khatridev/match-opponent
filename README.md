## Frontend

### Main HTML:  index.html

-   Loads Tailwind CSS and Font Awesome.
-   Contains a grid container for displaying teams.
-   Loads the main JS module:  config-loader.js.

### Config Loader:  config-loader.js

-   Fetches team data from  `/api/config`.
-   For each team, creates a row with the team name and match status icons.
-   Uses  matchStatus  to render match results.

### Match Status Component:  matchStatus.js

-   Exports a function  matchStatus(matches)  that returns a fragment of icons:
    -   Green check for wins
    -   Red cross for losses or other scores.

## Configuration

### Teams YAML:  teams.yml

-   Defines teams, each with a list of matches (opponent and score).
-   Includes settings like  `max_teams`  and  `allow_duplicates`.

## Styling

-   Uses Tailwind CSS via CDN.
-   Custom styles can be added in  index.css.


## Running the Project

1.  Install dependencies: `npm  install`
    
2.  Start the server: `npm  start`
    
3.  Open  http://localhost:3000  in your browser.

## Extending the Project

-   Add more teams or matches in  teams.yml.
-   Customize frontend components in  components.
-   Add new routes or API endpoints in  index.js.
