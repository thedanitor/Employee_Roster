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



## Future Development

I spent more time than I'd care to admit trying to make the floppy disk cards look authentic by having a "door" on the shutter. I was finally able to make it work for some cases, but it could only accomodate shorter employee names without throwing off all the formatting. I would like to pursue this more to find a functional responsive way to incorporate this. See the example below.

![Example of disk with shutter door](/assets/disk_with_shutter_tab_example.png)

## Acknowledgements

I would like to thank UW Coding bootcamp as well as my instructor, TA's, tutor, and classmates. You have all helped me improve much more than I could have on my own.