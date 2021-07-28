# Weframe Coding Challenge

## Situation

- in the first sprint the base of the application was implemented
- the second sprint is ongoing and ends in **~2 1/2hours**
- there are still a lot of open tickets in the sprint

## Your Tasks

- get an overview of all tickets
- **start the implementation** of [open tickets](#tickets)
- afterwards your colleagues will review your code
- in the next meeting your results will be discussed

## Notes

- tickets:
  - decide by your own which tickets you would like to implement
  - don't mind the ticket-order
  - keep an eye on priority, dependencies and benefit
  - if some ticket description is vague, assume something by yourself or choose another one
    - (please let us know afterwards :))
- documentation:
  - it is **not** necessary to add comments to the code as your code should be self-explanatory
- completeness & time:
  - it is not necessary to solve as much as possible
  - do not spent inordinately more time than indicated (2-3h)
  - quality might be more important as finishing a lot of tasks
  - the coding challenge is used to get a good starting point for the interview
- restrictions
  - the only restriction we have is that you should do the challenge by yourself and please do not provide the results
    on the internet to keep the challenge equal for all :)
  - not familiar with TypeScript yet? No, problem! Have a look [at the last npm script](#tsToJs)
  - you can use every library etc. you want to, but be prepared to explain your decision ;)

In case of uncertainties don't hesitate to contact us.\
We hope you enjoy the challenge and we are looking forward to meeting you and discuss your solutions :slightly_smiling_face:

## Tickets

[List of open tickets](TICKETS.md)

---

## When applying with a more backend related background:

Unfortunately, our backend coding challenge is not ready yet :pensive:

But, you are welcome to give the frontend challenge a try. We will be happy to see and discuss your approach afterwards
:) Additionally (or instead), you can also have a look at the following:

As the REST API is currently just a simple npm package, there is the need to implement the REST API as a Spring Boot
Application to be prepared for the future to connect it to the Database, handle security concerns, etc. The REST API is
described below and should behave equally to the npm package.

Also here, it is not necessary to implement everything (so, not every request needs to be implemented and there is no
need to set up a database). We just want to get an entry point to discussions in the technical interview.

## Scripts

In the project directory, you can run:

### `yarn install` or `npm i`

Install all project dependencies.\

### `yarn start` or `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test` or `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn server` or `npm run server`

Launches the REST-API Server.\
URL: [http://localhost:3002/notes](http://localhost:3002/notes)\
Routes:

```
GET     /notes          receive list of all notes
GET     /notes/<id>     receive note with <id>
POST    /notes          add new note to db
PUT     /notes/<id>     override note with <id>
PATCH   /notes/<id>     partial update note with <id>
DELETE  /notes/<id>     delete existing note with <id>
```

:information_desk_person: `POST`, `PUT` and `PATCH` need the request content type set to 'application/json'

### <a name="tsToJs"></a>`yarn tsToJs` or `npm run tsToJs`

Replaces all TypeScript files by JavaScript files.\
Don't hesitate to use it, if you are not familiar with TypeScript yet. In the coding challenge we want to see your coding
skills, where you should not be blocked by some technology you haven't used yet.\
We are sure you will be able to learn writing typescript fast, once you are in our team. :slightly_smiling_face:\
(e.g. by using our Business-[Udemy-Account](https://www.udemy.com/) in the weekly blocked further education slot :student:
)
