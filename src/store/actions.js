import {SET_EMPLOYEE, SET_LOAN_APPLICATION, SET_TOKEN, SET_USER} from "@/store/mutations-types";

export default {
    setUser({commit, state, dispatch}, user) {
        commit(SET_USER, user);
    },
    setEmployee({commit, state, dispatch}, employee) {
        commit(SET_EMPLOYEE, employee);
    },
    setToken({commit, state, dispatch}, token) {
        commit(SET_TOKEN, token);
    },
    setLoanApplication({commit, state, dispatch}, loanApplication) {
        commit(SET_LOAN_APPLICATION, loanApplication);
    },
}
