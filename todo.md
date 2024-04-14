## Available routes:

- Get All Users
GET /api/users
=>
  user[]

- Create Exercise
POST api/users/:id/exercises
{
  description: string!
  duration: string!
  date: string
}
=>
  {
    username: string,
    description: string,
    duration: 60,
    date: "Mon Jan 01 1990",
    _id: "5fb5853f734231456ccb3b05"
  }


- Get User's exercises
GET api/users/:id/log?from="DD/MM/YYYY"&to="DD/MM/YYYY"
=>
  {
    username: "fcc_test",
    count: 1,
    _id: "5fb5853f734231456ccb3b05",
    log: [{
      description: "test",
      duration: 60,
      date: "Mon Jan 01 1990",
    }]
  }

## Fcc facts/tests still doing
[] You should provide your own project, not the example URL.

[X] You can POST to /api/users with form data username to create a new user.

[X] The returned response from POST /api/users with form data username will be an object with username and _id properties.

[X] You can make a GET request to /api/users to get a list of all users.

[X] The GET request to /api/users returns an array.

[X] Each element in the array returned from GET /api/users is an object literal containing a user's username and _id.

[X] You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.

[X] The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.
  - The response returned is directly from DB, not managed response from the corresponding Model

[X] You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.

[X] A request to a user's log GET /api/users/:_id/logs returns a user object with a count property repres numbeenting ther of exercises that belong to that user.

[X] A GET request to /api/users/:_id/logs will return the user object with a log array of all the exercises added.

[X] Each item in the log array that is returned from GET /api/users/:_id/logs is an object that should have a description, duration, and date properties.

[X] The description property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string.

[X] The duration property of any object in the log array that is returned from GET /api/users/:_id/logs should be a number.

[X] The date property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string. Use the dateString format of the Date API.

[X] You can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back. 