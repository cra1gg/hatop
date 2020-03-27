# Sprint 4 Planning Meeting
## Participants:
| Member  | UTorID  |
|---|---|
|Craig D'Souza|dsouz261|
|Rahul Arunprakash Nakre|nakrerah|
|Shubham Sharma|shar1140|
|Derek Jang|jangdere|
|Kyle Jang|jangkyle|
|Micah Flemming|flemmi16|
|Davinder Jangra|jangrada|

## Goal of Sprint: 
The goal of this sprint is to complete [AUT-9], [AUT-14], [AUT-7], [AUT-51], and [AUT-12]
- **[AUT-9]** As Crangis/Harvey (a teacher) and Davinder/Anson I should have my information saved somewhere so I can login from anywhere and see it.
- **[AUT-14]** As Davinder/Anson (a student), I should be able to use a sleek UI and robust animations using the material pallete so that I can navigate the app effortlessly.
- **[AUT-7]** As Crangis/Harvey (a teacher), I should be able to start a quiz during lecture so that students answer the question that's currently being asked during that quiz.
- **[AUT-51]** As Davinder/Anson (student) I should be able to take quizzes on my device so I can complete out of class assigned quizzes.
- **[AUT-12]** As Crangis/Harvey (a teacher), I should be able to view the exact number of students who selected the correct answers during a quiz so that I can focus on what concepts require furthur explanatations.

These stories will be broken down as follows
- **[AUT-9]** 
    - **[AUT-44]** Hookup student stats to database.
    - **[AUT-45]** Hookup quiz builder to database.
    - **[AUT-47]** Hookup class list and enroll to database (for both student and teachers).
    - **[AUT-53]** Setup JWT tokens to distinguish which user is signed in.
- **[AUT-14]** 
    - **[AUT-43]** Hook login up to redirect and update navbar.
    - **[AUT-48]** Add create a class page for teachers.
- **[AUT-7]** 
    - **[AUT-50]** Use websockets to get live quizzes to work.
    - **[AUT-30]** Setup Express Route and Mongoose Schema for quizQuestion.
- **[AUT-51]** 
    - **[AUT-52]** Create page to select from quizzes.
- **[AUT-12]** 

These stories are assigned as follows:
- **[AUT-9]** 
    - **[AUT-44]** Kyle Jang
    - **[AUT-45]** Shubham Sharma
    - **[AUT-47]** Derek Jang
    - **[AUT-53]** Shubham Sharma
- **[AUT-14]** 
    - **[AUT-43]** Craig D'Souza
    - **[AUT-48]** Craig D'Souza
- **[AUT-7]** 
    - **[AUT-50]** Rahul Nakre
    - **[AUT-30]** Rahul Nakre
- **[AUT-51]** 
    - **[AUT-52]** Micah Flemming
- **[AUT-12]** Davinder Jangra

## Team Capacity:
* 10 ideal days x 7 team members = 70

## Spikes:
* In order to implement [AUT-53], Shubham will have to learn how to use JWT tokens.
* To implement [AUT-44] and [AUT-47] Derek and Kyle will have to learn how to use Axios to connect the frontend with the backend.
* [AUT-50] To get the websockets working, Rahul will have to learn about websockets and how to implement it into our app.
