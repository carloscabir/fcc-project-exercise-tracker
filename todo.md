[] Set up Mongo Atlas Client .env
[] Add Controller's methods
  [] Users
    [] addUser
      - add user in database
    [] getUserExercises
      - get user by ID and the then their exercises
  [] Exercises
    [] addExerciseByUser
      - get user by ID in database and add exercise
[] 

## Available routes:

- Create User
POST /users
{
  username: string
}
=> 
 {
  username: string
  id: ID
 }

- Create Exercise
POST /users/:id/exercises
{
  id: UUID
  description: string
  title: string
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
GET /users/:id/log?from="DD/MM/YYYY"&to="DD/MM/YYYY"
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