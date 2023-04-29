"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, gender) {
        this.salary = 0;
        this.name = name;
        this.gender = gender;
    }
    ;
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Employee.prototype.getGender = function () {
        return this.gender;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
exports.Employee = Employee;
