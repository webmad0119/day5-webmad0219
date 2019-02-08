//this is a constructor function
function Student(nameParam, ageParam, salaryParam) {
    //start of business logics validations
    if (salaryParam > 100000) {
        salaryParam = 100000
    }

    if (ageParam > 100) {
        throw new Error("You are too old to use this app")
    }

    if (nameParam.length < 4) {
        throw new Error("Wrong name length")
    }
    //end of business logics validations

    //this = {} 

    this.name = nameParam

    //{name: nameParam}
    
    this.age = ageParam
    //{name: nameParam,
        //age: ageParam}

    this.salary = salaryParam
}

Student.prototype.school = "ironhack"

Student.prototype.getSalary = function () {
    return this.salary
}

Student.prototype.getSalaryWithTaxes = function () {
    return this.salary * 1.21
}