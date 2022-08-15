
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

let createInnerHtml = () => {
    let headerHTML = "<tr><th>Profile</th><th>Name</th> <th>Gender</th> <th>Department</th> <th>Salary</th> <th>StartDate</th><th>Actions</th> </tr>"
    let innerHTML = `${headerHTML}`;
    let empPayrollList = createEmployeePayrollJSON();

    for (const empPayrollData of empPayrollList) {
        innerHTML = `
        ${innerHTML}
    <tr>
    <td>
        <img class="profile" src="${empPayrollData._profilePic}">
    
    </td>
    <td> 
       ${empPayrollData._name}
    </td>
    <td>${empPayrollData._gender}</td>
    <td>
        ${getDeptHtml(empPayrollData._department)}
    </td>
    <td>${empPayrollData._salary}</td>
    <td>${empPayrollData._startDate}</td>
    <td>
        <img alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img alt="edit" src="../assets/icons/create-black-18dp.svg">
    </td>
      </tr>  `;
    }

    document.querySelector("#display").innerHTML = innerHTML;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class = 'dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollDB = [

        {
            "_id": 1,
            "_name": "Santhosh Kumar Nayak",
            "_gender": "Male",
            "_department": [
                "Engineer",
                "Other"
            ],
            "_salary": "498700",
            "_startDate": "2 June 2022",
            "_note": "New Employee",
            "_profilePic": "../assets/profile-images/Ellipse -3.png"
        },
        {
            "_id": 2,
            "_name": "Namitha Nayak",
            "_gender": "Female",
            "_department": [
                "Sales",
                "Finance"
            ],
            "_salary": "400000",
            "_startDate": "4 July 2022",
            "_note": "New Employee",
            "_profilePic": "../assets/profile-images/Ellipse -1.png",
        }
    ];
    return empPayrollDB;
}