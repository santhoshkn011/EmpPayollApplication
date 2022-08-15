class EmployeePayrollData {

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        const NAME_REGEX = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if (NAME_REGEX.test(name)) {
            this._name = name;
        } else throw "Name is Incorrect!";
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }

    get profilePicture() {
        return this._profilePicture;
    }
    set profilePicture(profilePicture) {
        this._profilePicture = profilePicture;
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
    set startDate(startDate) {
        let now = new Date();
        if (startDate > now) throw "Start Date is a Futute Date!"
        let difference = Math.abs(now.getTime() - startDate.getTime());
        if (difference / (1000 * 60 * 60 * 24) < 30) {
            throw "Start Date is beyond 30 days!"
        }
        this._startDate = startDate;
    }

    get departments() {
        return this._departments;
    }
    set departments(departments) {
        if (departments.length != 0) {
            this._departments = departments;
        } else throw "No Department Entered!";
    }

    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }

    toString() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const employeeDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "[ id: " + this.id + ", name: " + this.name + ", gender: " + this.gender + ", profilePicture: " + this._profilePicture +
            ", salary: " + this.salary + ", startDate: " + employeeDate + ", departments: " + this.departments + ", note: " + this._note + " ]" + "\n";
    }
}