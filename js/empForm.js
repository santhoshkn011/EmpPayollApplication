window.addEventListener('DOMContentLoaded', (event) => {
    salaryOutput();
    validateName();
    //validateDate();

});

function salaryOutput() {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;

    });
}

function validateName() {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
}

// function validateDate() {
//     let day = document.querySelector('#day');
//     let month = document.querySelector('#month');
//     let year = document.querySelector('#year');
//     day.addEventListener('input', checkDate);
//     month.addEventListener('input', checkDate);
//     year.addEventListener('input', checkDate);
// }

// function checkDate() {
//     let dateError = document.querySelector('.dates-error');
//     let date = day.value + " " + month.value + " " + year.value;
//     try {
//         checkStartDate(new Date(Date.parse(date)));
//         dateError.textContent = "";
//     } catch (e) {
//         dateError.textContent = e;
//     }

// }

// function checkStartDate(startDate) {
//     let currentDate = new Date();
//     if (startDate > currentDate) {
//         throw new Error("Start date is a future date")
//     }
//     let differnce = Math.abs(currentDate.getTime() - startDate.getTime());
//     let date = differnce / (1000 * 60 * 60 * 24);
//     if (date > 30) {
//         throw new Error("Start date is beyond 30 days");
//     }

// }

function save(event) {
    alert("save")

    event.preventDefault();
    event.stopPropagation();

    try {
       let EmployeePayrollData= createEmployeePayroll();
    } catch (e) {
        return;
    }

}

const createEmployeePayroll=()=>{
    let employeePayrollData=new EmployeePayrollData();
    try {
        employeePayrollData.name=getInputValueById('#name');
    } catch (error) {
        setTextValue('.text-error',e);
        throw e;
    }

    employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('[name=department]');
    employeePayrollData.salary=getSelectedValues('#salary');
    employeePayrollData.note=getInputValueById('#notes');
    let date=getInputValueById('#day')+" "+getInputValueById('#month')+" "+
            getInputValueById('#year');
    employeePayrollData.date=Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues=(propertyValue)=>{
    let allItmes=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItmes.forEach(item =>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById=(id)=>{
    let value=document.querySelector(id).value;
    return value;
}

const getInputElementValue=(id)=>{
    let value=document.getElementById(id).value;
    return value;
}