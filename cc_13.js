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
    
    // Task 3: See bottom of code! //

    // Task 4: Implementing Removal of Employee Cards with Event Bubbling //
    removeButton.addEventListener('click', (event) => { // adding event listener to the click 
        event.stopPropagation(); // prevents bubbling
        card.remove(); // removes the card
        console.log('Employee has been removed!'); // Logging message that employee has been removed
    });

    employeeContainer.addEventListener('click', () => {  // adds event listener to click on the employee container
    console.log('Employee card was clicked!'); // Message that the employee card has been clicked
    });

    // Task 5: Inline Editing of Employee Details // 
    
    const editButton = document.createElement('button'); // creates edit button
    editButton.textContent = 'Edit'; // creates text for the button as "Edit"
    card.appendChild(editButton); // Appends the edit button to the card

    editButton.addEventListener('click', () => {  // adds event listener to the edit Button'
        const nameInput = document.createElement('input'); // creates input for name
        nameInput.value = nameHeader.textContent; // pre-populates the edit field with the current name

        const positionInput = document.createElement('input'); // creates input for position
        positionInput.value = positionParagraph.textContent; // pre-populates the edit field with current position

        const saveButton = document.createElement('button'); // creates save button
        saveButton.textContent = 'Save'; // creates text "Save" for the button

        card.replaceChild(nameInput, nameHeader); // replaces current text with updated text for name
        card.replaceChild(positionInput, positionParagraph); // replaces current with updated for position
        card.replaceChild(saveButton, editButton); // replaces the edit with the save button

        saveButton.addEventListener('click', () => { // adds listener for clicking the save button
            nameHeader.textContent = nameInput.value; // replaces name header with new input value
            positionParagraph.textContent = positionInput.value; // replaces position with new input position

            card.replaceChild(nameHeader, nameInput); // replaces input with updated info for name
            card.replaceChild(positionParagraph, positionInput); // replaces input with updated info for position
            card.replaceChild(editButton, saveButton); // replaces edit button with save button
        
        console.log('Employee details updated.'); // message to confirm updated details
        });
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

