import {LOGOUT, SET_EMPLOYEE, SET_LOAN_APPLICATION, SET_TOKEN, SET_USER} from "@/store/mutations-types";

export default {
    [SET_USER](state, user) {
        state.appModel.setUser(user);
    },
    [SET_EMPLOYEE](state, employee) {
        state.appModel.setEmployee(employee);
    },
    [SET_TOKEN](state, token) {
        state.appModel.setToken(token);
    },
    [SET_LOAN_APPLICATION](state, loanApplication) {
        state.appModel.setLoanApplication(loanApplication);
    },
    [LOGOUT](state) {
        state.appModel.logout();
    },
}
