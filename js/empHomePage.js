window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    
    const HeaderHtml = "<tr><th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    const innerHtml = `${HeaderHtml}
            <tr>
                <td>
                    <img class="profile" alt="" src="/assets/profile-images/Ellipse -3.png">
                </td>
                <td>Santhosh Kumar</td>
                <td>Male</td>
                <td>
                    <div class='dept-label'>HR</div>
                    <div class='dept-label'>Finance</div>
                </td>
                <td>3000000</td>
                <td>2 June 2022</td>
                <td>
                    <img id="1" onclick="remove(this)" alt="delete" src="/assets/icons/delete-black-18dp.svg">
                    <img id="1" alt="edit" onclick="update(this)" src="/assets/icons/create-black-18dp.svg">
                </td>
            </tr>
            `;
    document.querySelector('#display').innerHTML = innerHtml;
}