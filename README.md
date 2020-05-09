# Employee_Roster

I created a command-line application that will create an employee team roster HTML page. 

![Employee roster command line interface](/assets/employeeRosterInquirerShort.gif)

## Technologies Used

This application was created using a combination of node, JavaScript, HTML, and CSS. 
* Node: requires inquirer, fs, path, and jest
* JavaScript: Using object oriented programming, an employee class was created and sub-classes for each employee type
* Application tests using jest were supplied and run for each subclass to ensure functionality
* Prompts were written using inquirer to allow the user to specify their employee team information
* User responses are stored in the corresponding sub-classes and those objects are pushed into an array
* fs writeFile function is used to send the array data to another function which parses the array into the corresponding sub-class objects
* The data for each sub-class is rendered on an HTML template using template literals
* These templates are joined into one HTML page and styled using CSS

## Description/Use

This project was based off of this user story:

*As a software department manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles*

The user interface is the command line so to begin the program the user would navigate to the directory and type "node app.js". 
They will then need to answer 4 prompts: 
"Please enter the manager's name."
"Please enter the manager's ID number."
"Please enter the manager's email."
"Please enter the manager's office number."

Once they have answered, they will be prompted with the newEmployee choice:
"Please choose an employee to add."
"Engineer"
"Intern"
"I already added all employees."

If the choice is Engineer the user will answer the following:
"Please enter the engineers's name."
"Please enter the engineers's ID number."
"Please enter the engineers's email."
"Please enter the engineers's github username."

And then it will return to the newEmployee choice.

If the choice is Intern the user will answer the following:
"Please enter the intern's name."
"Please enter the intern's ID number."
"Please enter the intern's email."
"Please enter the intern's school."

And then it will return to the newEmployee choice.

If the choice is "I already added all employees." then the information entered will be written to a new team.html document in the output directory and the user will have an employee roster webpage.

## Future Development

I spent more time than I'd care to admit trying to make the floppy disk cards look authentic by having a "door" on the shutter. I was finally able to make it work for some cases, but it could only accomodate shorter employee names without throwing off all the formatting. I would like to pursue this more to find a functional, responsive way to incorporate this. See the example below.

![Example of disk with shutter door](/assets/disk_with_shutter_tab_example.png)

## Acknowledgements

I would like to thank UW Coding bootcamp as well as my instructor, TA's, tutor, and classmates. You have all helped me improve much more than I could have on my own.

The following sites were very helpful for styling the floppy disk cards.

https://codepen.io/simurai/pen/DwJdq
https://codepen.io/AlvaroFelipe/pen/yJNWgJ
https://css-tricks.com/notched-boxes/ 