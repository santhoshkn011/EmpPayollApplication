class EmployeePayrollData {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw new Error("Invalid Name");
    }

    get profilePic() {
        return this._profilePic;
    }

    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {

        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {

        this._salary = salary;

    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate){
        this._startDate=startDate;
    }
    
    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : 
        this.startDate.toLocaleDateString("en-us", options);
        return "id=" + this.id + "Name = " + this.name + ", profilePic = " + this.profilePic + ", Gender = " + this.gender + 
        ", Department = " + this.department + ", Salary = " + this.salary + ", Start Date = " + employeeDate + ", Notes = " + this.notes;
    }
}