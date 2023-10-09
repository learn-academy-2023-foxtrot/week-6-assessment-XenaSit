# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: XS

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. 

How can I fix this mistake? 
Your answer: Just had that with one of the apps the WildLifeTracker. If the foreign key is forgoten i am not sure what exactly happens, because it is one of the most important things that tie to dbs together. i kind of thought it was automaticly generated even if it was not passed. However i do know that in order to change any db that has already been created all you do is generate a migration. Name it so it will be understood why this migration was generated. Here i would name it add_foreign_key_column. After generating a migration go into the code editor. Inside the folder migration there will be a new document witht that magration. Go in there. there you will see the add_foreign_key_column and a method CHANGE. Using one of the built in commands like change_column, rename_column, remove_column change that db. Here i would use add_column and pass: table_name, new_column_name, and  data type. After you are done adding colummns, dont forget to db:migrate, otherwise that changes are not going to be imported into the main table that was already created. 

What is the name of the foreign key? 
anything_you_want_id

Would the foreign key be on the Cohort model or the Student model?
of course a Student. The Cohort already has the primary key, and it has_many Students. 

Researched answer:
The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.

2. Which RESTful routes must always be passed params?

Your answer: Ok, i am going to guess to the best of my abily of knowledge. As we all know when the controller is created it is the only thing that can pass methods in order to render and show what is going on in our database. So all of the METHODS that needs to be passed within a controller in order for us to be able to manage see and edit our data base are: INDEX, SHOW, CREATE, NEW, UPDATE, EDIT, DESTROY and of course the params that are passed below the private line that we dictate which are allowed to be seen by our user (for safety purposes, you don't want users to be able to enter their SSN and then anyone can access it, that's why those params are passed in the private)

The routs that always should have params are the ones that we specificly are looking for an enetry with the find[:id], that would be all of them except for the INDEX, because index show the entire db, the rest of the restful routs do something to a specific entry.

Researched answer: i have not found any defenition for the passed params

3. Name three rails generator commands. What is created by each?

Your answer:
generate model: is a instance that we'll use as a blueprint when adding things( ex: animal, type, fins, legs, location)
generate migration: editing already created db. 
generate controller: this is what we add in order to manipulate the object (every instance needs controller, view and route)

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Name of the controller method: index
What action would it perform: this method would show all the entries that were created.

action: "POST" location: /students
Name of the controller method: create
What action would it perform: creates new instance

action: "GET" location: /students/new
Name of the controller method: new
What action would it perform: displays a form where fields can be filled out to create a new instance

action: "GET" location: /students/2
Name of the controller method: show
What action would it perform: displays a particular instance that we id (here 2nd)

action: "GET" location: /students/2/edit
Name of the controller method: edit
What action would it perform: displays a form that shows particular instance that we want to edit

action: "PATCH" location: /students/2
Name of the controller method: update
What action would it perform: saves that changes that were made to a praticular instance

action: "DELETE" location: /students/2
Name of the controller method: destroy
What action would it perform: delets a particular instance

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

User can see a website with my photo and my name
User can see a task bar to navigate through the website
User user can use either toolbar or scroll down and see all the content
User Taskbar can naviagte user to the projects i have created
User Taskbar can naviagte user to my contact information
User Taskbar can naviagte user to my resume
User Taskbar can naviagte user to my blog
User can send messages in the contact info of my page
User user can see todays date
User can see some randomly generated jokes at the top of the screen while scrolling
User feels great and dosn't want to leave my page