# student-grading-system

important:
Please enter terminal commands in this form "when tying to add new data" to get the desired output

===> node index.js add --id=00 --name='' --degree=45 --degree=35 --degree=25 
 
Since each "--degree= ' is a one value input whether it be  a number or a string, this value will represent a single element of the array.
So I couldn't enter all degree values in one entery like this --degree="12, 45, 48" or --degree=[12, 45, 48] as it'll be entered as a single string in a one element array like this ["12, 45, 48"] / ["[12, 45, 48]"].


In case you want to enter the degrees like this ===> --degree="12, 45, 48", 
I included the code to restructure the string to an array of numbers, but it's commented out.
