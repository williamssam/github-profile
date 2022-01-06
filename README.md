# Github Profile - a better look at your profile

My goal was to create an app to look at your github profile with graphs.

<hr>
Note <br>
-  Converted the app from react with js to typescript <br>
- Migrate the github api version from v3 (rest api) to v4 (graphql) [coming soon]
<hr>

![](screenshot.png)

## Getting Started

NB: Install "yarn" if you have not, using
<code>npm install --global yarn</code>

1. Install dependencies <br>
   <code>yarn</code>

2. Start the server <br>
   <code>yarn start</code>

## How I worked on this project

-  I built this app with design inspiration from Britanny's original design
-  I used styled components for styling, gh-polyglot to get repo details, and flip move for the flip animations.

## How to navigate this project

-  Each individual components can be found inside the components folder
-  Global styles can be found in the globalstyles folder
-  I seprated the styles from the logic, you can find the styles in the styles folder
-  declared universal types in 'types.d.ts'

## Why I built the project this way

-  I used "styled-componenets" because it is a great library for styling. it includes an auto-prefixer and allows me to use Javascript for styling.
-  The application fetches data from the Github API
-  Uses the GhPolyglot to fetch user repos and the user repo lanagues details

## Challenge

-  While migrating to typescript, one of erros I got is "element implicitly has an 'any' type because expression of type 'string' can't be used to index type". I solved this using <code>Record<string, any></code> type, bascially telling the compiler that it can accept both 'any' and 'string' type.

This helped: [StackOverflow Answer](https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b)

## Credit

Original idea by [Britanny Chang](https://github.com/bchiang7/octoprofile)

## Author

-  [Williams Samuel](https://williamssam.netlify.app/)
