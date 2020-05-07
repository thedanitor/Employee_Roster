# Employee_Roster

I created a command-line application that will create an employee team roster HTML page. 

GIF HERE!!!!

## Technologies Used

This application was created using a combination of node, JavaScript, HTML, and CSS. 
* Node: requires inquirer, fs, and path
* JavaScript: Using object oriented programming, an employee class was created and sub-classes for each employee type
* Application tests were supplied and run for each subclass to ensure functionality
* Prompts were written using inquirer to allow the user to specify their employee team information
* User responses are stored in the corresponding sub-classes and those objects are pushed into an array
* fs writeFile function is used to send the array data to another function which parses the array into the corresponding sub-class objects
* The data for each sub-class is rendered on an HTML template using template literals
* These templates are joined into one HTML page and styled using CSS

## Description
