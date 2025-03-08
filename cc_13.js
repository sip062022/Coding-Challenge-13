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
}

createEmployeeCard('Employee 1', 'Manager');