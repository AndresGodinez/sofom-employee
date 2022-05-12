import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import PresentationView from '@/views/PresentationView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AreYouView from '@/views/AreYouView.vue'
import ChangePasswordEmployeeView from '@/views/ChangePasswordEmployeeView.vue'
import UserCreatedSuccessfullyView from '@/views/UserCreatedSuccessfullyView.vue'
import WelcomeEmployeeView from '@/views/WelcomeEmployeeView.vue'
import LoginView from '@/views/LoginView.vue'
import RequestLoanApplicationView from '@/views/RequestLoanApplicationView.vue'
import ListPendingLoanApplicationsView from '@/views/ListPendingLoanApplicationsView.vue'
import MyLoansView from '@/views/MyLoansView.vue'
import AmortizationTableView from '@/views/AmortizationTableView.vue'
import HistoryLoansView from '@/views/HistoryLoansView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: WelcomeView
    },
    {
        path: '/presentation',
        name: 'presentation',
        component: PresentationView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/are-you',
        name: 'areYou',
        component: AreYouView
    },
    {
        path: '/change-password-employee',
        name: 'changePasswordEmployee',
        component: ChangePasswordEmployeeView
    },
    {
        path: '/user-created-successfully',
        name: 'userCreatedSuccessfully',
        component: UserCreatedSuccessfullyView
    },
    {
        path: '/welcome-employee',
        name: 'welcomeEmployee',
        component: WelcomeEmployeeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/request-loan-application',
        name: 'requestLoanApplication',
        component: RequestLoanApplicationView
    },
    {
        path: '/list-pending-loan-applications',
        name: 'listPendingLoanApplications',
        component: ListPendingLoanApplicationsView
    },
    {
        path: '/amortization-table',
        name: 'amortizationTable',
        component: AmortizationTableView
    },
    {
        path: '/my-loans',
        name: 'myLoans',
        component: MyLoansView
    },
    {
        path: '/history-loans',
        name: 'historyLoans',
        component: HistoryLoansView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
