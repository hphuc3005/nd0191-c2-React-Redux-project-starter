# Employee Polls Project

This is project for building a web app that lets an employee create polls for coworkers. The process
goes like this: An employee is asked a question in the form: “Would you rather [option A] or [option
B] ?”. Answering "neither" or "both" is not possible. Users will be able to answer polls, see which
polls they haven’t answered, see how other people have voted, post polls, and see the ranking of
users on the leaderboard.

## Installation

To get started developing right away:

-   install all project dependencies with `npm install`
-   start the development server with `npm run start`

## Launching

Navigate to [`http://localhost:3000`](http://localhost:3000)

In this application, the `home` page displays 2 types of categorized questions: New Questions and
Unanswered Questions.

Each question on the home page has a link to `/questions/:question_id`, that allows you to navigate
to question's detail. On question detail page, you can choose your answer if it is New Question and
you also can see the table shown to you:

-   the number of people who voted for that option;
-   the percentage of people who voted for that option.

The `leaderboard` page contains the table with the following:

-   the user’s name;
-   the user’s avatar;
-   the number of questions the user asked; and
-   the number of questions the user answered.

You can also create your own poll if you navigate the Create New Poll page by clicking it on the
navbar.

Notes: you need to log in with a valid username and password to access the app's features.

## Data

There are two types of objects stored in our database:

-   Users
-   Questions

### Users

Users include:

| Attribute | Type   | Description                                                                                                                                                                                                    |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The user’s unique identifier                                                                                                                                                                                   |
| password  | String | The user’s password in order to log in the application                                                                                                                                                         |
| name      | String | The user’s first name and last name                                                                                                                                                                            |
| avatarURL | String | The path to the image file                                                                                                                                                                                     |
| questions | Array  | A list of ids of the polling questions this user created                                                                                                                                                       |
| answers   | Object | The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options. |

### Questions

Questions include:

| Attribute | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| id        | String | The question’s unique identifier       |
| author    | String | The author’s unique identifier         |
| timestamp | String | The time when the question was created |
| optionOne | Object | The first voting option                |
| optionTwo | Object | The second voting option               |

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type   | Description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| votes     | Array  | A list that contains the id of each user who voted for that option |
| text      | String | The text of the option                                             |

Your code will talk to the database via 4 methods:

-   `_getUsers()`
-   `_getQuestions()`
-   `_saveQuestion(question)`
-   `_saveQuestionAnswer(object)`

1. `_getUsers()` Method

_Description_: Get all of the existing users from the database.  
_Return Value_: Object where the key is the user’s id and the value is the user object.

2. `_getQuestions()` Method

_Description_: Get all of the existing questions from the database.  
_Return Value_: Object where the key is the question’s id and the value is the question object.

3. `_saveQuestion(question)` Method

_Description_: Save the polling question in the database. If one of the parameters are missing, an
error is thrown. _Parameters_: Object that includes the following properties: `author`,
`optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| author        | String | The id of the user who posted the question |
| optionOneText | String | The text of the first option               |
| optionTwoText | String | The text of the second option              |

_Return Value_: An object that has the following properties: `id`, `author`, `optionOne`,
`optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type   | Description                                                                                                                  |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The id of the question that was posted                                                                                       |
| author    | String | The id of the user who posted the question                                                                                   |
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| timestamp | String | The time when the question was created                                                                                       |

4. `_saveQuestionAnswer(object)` Method

_Description_: Save the answer to a particular polling question in the database. If one of the
parameters are missing, an error is thrown. _Parameters_: Object that contains the following
properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute  | Type   | Description                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------- |
| authedUser | String | The id of the user who answered the question                                            |
| qid        | String | The id of the question that was answered                                                |
| answer     | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"` |
