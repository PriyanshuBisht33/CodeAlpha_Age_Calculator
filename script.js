// Function to calculate age based on entered day, month, and year
function calculateAge() {
    // Get day, month, and year values from form inputs
    const day = parseInt(document.getElementById('day').value); // Convert day to integer
    const month = parseInt(document.getElementById('month').value) - 1; // Convert month to integer (0-based)
    const year = parseInt(document.getElementById('year').value); // Convert year to integer

    // Get the current date
    const today = new Date();

    // Create a Date object for the birth date
    const birthDate = new Date(year, month, day);

    // Calculate the initial age difference based on the year
    let age = today.getFullYear() - birthDate.getFullYear();

    // Calculate the difference in months and days
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust the age if the current month/day is before the birth month/day
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--; // Decrease age by 1 if the birthday hasn't occurred this year
    }

    // Display the calculated age in the result paragraph
    document.getElementById('result').textContent = `Your age is ${age} years.`;
}
