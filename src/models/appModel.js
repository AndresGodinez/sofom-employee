export default class AppModel {
    constructor() {
        this.employee = {}
        this.user = {}
        this.company = {}
        this.bank = {}
        this.token = ''
        this.loanApplication = {}
    }

    setToken(token) {
        this.token = token
    }

    setLoanApplication(loanApplication) {
        this.loanApplication = loanApplication
    }

    setUser(user) {
        this.user = user
    }

    setEmployee(employee) {
        this.employee = employee
        this.setUser(employee.user)
        this.setCompany(employee.company)
        this.setBank(employee.bank)
    }

    setCompany(company) {
        this.company = company
    }

    setBank(bank) {
        this.bank = bank
    }

    //Getters
    getToken() {
        return this.token
    }

    getUser() {
        return this.user
    }

    getEmployee() {
        return this.employee
    }

    getCompany() {
        return this.company
    }

    getCompanyName() {
        return this.company.name
    }

    getLoanApplication() {
        return this.loanApplication
    }

    getDateOfAdmission() {
        return this.employee.date_admission
    }

    getPhone() {
        return this.employee.phone
    }

    getBank() {
        return this.bank
    }

    logout() {
        this.token = ''
    }
}
