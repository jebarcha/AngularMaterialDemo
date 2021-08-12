export class Employee {
    name: string;
    phone: string;
    email: string;
    initDate: Date;
    state: string;
    sex: string;

    constructor(name: string,phone: string, email: string, initDate: Date, state: string, sex: string) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.initDate = initDate;
        this.state = state;
        this.sex = sex;
    }

}