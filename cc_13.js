// Task 2: Adding Employee Cards Dynamically //

function createEmployeeCard (name, position) {  // Function to create employee card including name and position
    const card = document.createElement('div'); // Creates each new employee card as a <div>
    card.setAttribute ('class', 'employee-card'); // Sets attributes

    const nameHeader = document.createElement('h3'); // adds a header as h3 for the name
    nameHeader.textContent = name; // specifies the header as employee name

    const positionParagraph = document.createElement('p'); // adds paragraph for the position
    positionParagraph.textContent = position; // specifies header as employee position

    const removeButton = document.createElement('button'); // creates a button for the remove button
    removeButton.textContent = 'Remove'; // specifies the text for the button to be "Remove"

    card.appendChild(nameHeader); // appends nameHeader to the card
    card.appendChild(positionParagraph); // appends position to the card
    card.appendChild(removeButton); // appends remove button to the card

    const employeeContainer = document.getElementById('employeeContainer');
    employeeContainer.appendChild(card);

    // Task 4: Implementing Removal of Employee Cards with Event Bubbling //
    removeButton.addEventListener('click', (event) => { // adding event listener to the click 
        event.stopPropagation(); // prevents bubbling
        card.remove(); // removes the card
        console.log('Employee has been removed!'); // Logging message that employee has been removed
    });

    employeeContainer.addEventListener('click', () => {  // adds event listener to click on the employee container
    console.log('Employee card was clicked!'); // Message that the employee card has been clicked
    });
}

createEmployeeCard('Employee 1', 'Store Director');  // Test Data Employee 1
createEmployeeCard('Employee 2', 'Team Lead');  // Test Data Employee 2
createEmployeeCard('Employee 3', 'Team Member');  // Test Data Employee 3

// Task 3: Converting NodeLists to Arrays for Bulk Updates //

function updateEmployeeCard () {  // Creates function to update employee cards
    const employeeCards = document.querySelectorAll('.employee-card');  // selects every employee card
    const arrayEmployeeCards = Array.from(employeeCards); // converts the nodeList to an array

    arrayEmployeeCards.forEach(employeeCard => {  // for each employee card in the array
        employeeCard.style.backgroundColor = '#90EE90'; // adds green background to each card
        employeeCard.style.border = '2px solid #000000' // adds black border to each card
    });
}

updateEmployeeCard(); // calls the function

