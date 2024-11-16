# CodeAlpha_Age_Calculator
This is an age calculator, a simple web application which attempts to calculate the age of someone given their birth date. The user inputs his/her birthday, month, and year, and the application determines the person's current age immediately through its built-in date and time functions in JavaScript. Stylish user interface in modern eye-catching theme in Black, Orange and White Color Scheme follows as below:

1- Features
   User Input Fields---
      Day, Month, and Year allow user input for birthdate.
      Input validation verifies values are in a realistic range (e.g., day between 1-31, month between 1-12).

  Responsive Button---
      Click the "Calculate Age" button to trigger the JavaScript age calculation.

  Real Time Result Presentation---
      Calculated age is displayed right below the form following after you have clicked the "Calculate Age" button. Such is immediately visible.

2- Technologies:
   HTML---
    This code provides structural form and result presentation

   
   CSS---
    Generates dark-skinned and orange-hued skin; output is legible and good-looking.
    Hover effects on the buttons and uniform spacing for inputs.

3- JavaScript---
    Utilizes in-built Date objects to determine the age of the user.
     This will be a difference when using month and day, so that when the birthday hasn't yet occurred in this year, the calculated age will be correct


4- How it Works---
    Users provide their date of birth.
    The JavaScript function performs the age calculation by doing the following
    It compares the date provided to today's date
    It accounts for months and days if this year hasn't passed the birthday
    Calculates and outputs the age to the lower area of the form dynamically.
