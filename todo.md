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

- Create Exercise
POST /users/:id/exercises
{
  id: UUID
  description: string
  title: string
  date: string
}

- Get User's exercises
GET /users/:id/log?from="DD/MM/YYYY"&to="DD/MM/YYYY"