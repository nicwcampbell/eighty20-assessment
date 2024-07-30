# eighty20-assessment of Nicholas Campbell

## How to get the app up and running

Use the terminal to execute the following commands in this order:

1. git clone git@github.com:nicwcampbell/eighty20-assessment.git
2. cd eighty20-assessment
3. npm install
4. npm run dev
5. Go to the local host URL provided

Note that the .env file has been included in the repo for ease of use for the assessor - not requiring them to setup their own Firebase account.

## Architectural and functionality decisions

In no particular order, the key architectural and functionality decisions included the following:

1. Using a .env file for the Firebase config variables rather than hardcoding them: this was done so that there could easily be different environments setup - dev, test, prod etc.
2. Although I would have liked to keep all of the Firebase actions in one file to make it easier to swap to a different Auth Provider if the need arose, I didn't feel the added complexity was worth it for this project. This would be a good practice though.
3. Redux used for global state management: useContext could have been a simpler implementation but since the assessment asked for Redux, Redux was used. Depending on the scale of the app that would come of this, Redux could be a better long term solution however.
4. Adding asynchronous actions into to the userSlice: this was done to be able to update the user state directly from the login and sign up API responses. In hindsight, this could have been skipped and rather relied on the onAuthStateChanged Firebase observer to do all this work. This would have simplified the app. However, it was kept to demonstrate my ability to implement createAsyncThunk.
5. As far as reasonable, utility functions were separated from the app logic and components were broken down into smaller reusable pieces. Examples include: errorMessageInterpreter, useAuthListener, Login, AuthSwitch etc.
6. A common layout using react-dom-router Outlet feature was done to reuse across all authenticated routes. These routes were also protected using a common component - ProtectedRoute, which also made use of Outlet.
7. Although not exhaustive, form validations were implemented to cover some basic scenarios. Firebase generated errors were handled by translating them into user friendly messages.
8. To avoid unintentional redirects and UI loading before it was ready, the app.jsx content was conditionally rendered to only load once the onAuthStateChanged had run at least once, thus ensuring that if the user was logged in, the user state has been initialized. This could have been further used to cover point 3 an remove the need for async Redux actions.
9. For the assessment requirements of 'Persisting the authentication' and 'Authentication token usage' the standard default Firebase functionality was used. Firebase by default persists the authentication across page refreshes and browser restarts. It also handles Tokens and automatically refreshing those tokens. No customizations were done here.
