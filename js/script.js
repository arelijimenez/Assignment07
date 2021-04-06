// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let employeesTable = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id          = document.querySelector('#id').value;
    let name        = document.querySelector('#name').value;
    let extension   = document.querySelector('#extension').value;
    let email       = document.querySelector('#email').value;
    let department  = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employeesTable.insertRow();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount++;
    document.getElementById('empCount').innerHTML = empCount;
 

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellid          = row.insertCell();
    let cellname        = row.insertCell();
    let cellextension   = row.insertCell();
    let cellemail       = row.insertCell();
    let celldepartment  = row.insertCell();
    let celldeleteBtn   = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellid.appendChild(document.createTextNode(id));
    cellname.appendChild(document.createTextNode(name));
    cellextension.appendChild(document.createTextNode(extension));
    cellemail.appendChild(document.createTextNode(email));
    celldepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');

    //ADD NECESSARY CLASSES TO BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //CREATE TEXT NODE, SET IT TO 'X' AND APPEND TO DELETE BUTTON
    deleteBtn.appendChild(document.createTextNode('X'));

    // DELETE EMPLOYEE    
    deleteBtn.addEventListener('click', (e) => {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this task?')) {
            //SELECT THE ROW AND DELETE
            employeesTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
            // DECREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
            empCount--;
            document.getElementById('empCount').innerHTML = empCount;
        };
    });

    //APPEND DELETE BUTTON TO THE LI
    celldeleteBtn.appendChild(deleteBtn);

    // RESET THE FORM
    document.querySelector('#id').value = ''; 
    document.querySelector('#name').value = ''; 
    document.querySelector('#extension').value = ''; 
    document.querySelector('#email').value = ''; 
    document.querySelector('#department').value = ''; 

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

});

