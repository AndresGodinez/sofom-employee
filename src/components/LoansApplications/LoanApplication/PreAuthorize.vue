<template>
    <b-card>
        <b-card-header>
            <b-container>
                <b-card-title>
                    <h4>Estatus de la solicitud</h4>
                </b-card-title>
            </b-container>
        </b-card-header>
        <b-card-body v-if="loanApplication.status==='pending'">
            <b-card-body>
                <b-icon icon="circle-fill" variant="warning"></b-icon>
                Pendiente
            </b-card-body>
            <b-icon icon="circle-fill" variant="primary"></b-icon>
            En proceso
            <span class="small">Se actualizará el estatus cuando pre- autorize la solicitud</span>
            <span class="small">Fecha de solicitud {{ loanApplication.diffCreatedAt }} </span>
        </b-card-body>
        <b-card-body v-if="loanApplication.status === 'pending' ">
            <b-button-group>
                <b-button variant="dark" @click="showRejectedForm">Rechazar</b-button>

                <b-button variant="primary" @click="preauthorize">Pre autorizar</b-button>
            </b-button-group>
        </b-card-body>
        <b-card-body v-if="loanApplication.status === 'preauthorized' ">
            <span class="small d-block"> <b-icon icon="circle-fill" variant="primary"></b-icon>Preautorizada por </span>
            <span class="d-block text-primary">{{ loanApplication.PreauthorizedBy.name }}</span>
            <span class="small d-block">Fecha de preutorización  </span>
            <span class="d-block text-primary"> {{ loanApplication.diffPreauthorizedAt }}</span>
            <b-button-group>
                <b-button variant="dark" @click="showRejectedForm">Rechazar</b-button>

                <b-button variant="primary" @click="authorize">Autorizar</b-button>
            </b-button-group>
        </b-card-body>
        <b-card-body v-if="showRejectedReason">
            <b-form-row>
                <b-form-group label="Motivo de rechazo" label-for="reason">
                    <b-form-textarea id="reason" name="reason" v-model="rejectedReason" rows="4"></b-form-textarea>
                </b-form-group>

            </b-form-row>
            <b-form-row>
                <b-form-group>
                    <b-button variant="danger" @click="reject">Confirmar</b-button>

                </b-form-group>
            </b-form-row>

        </b-card-body>
        <b-card-body v-if="loanApplication.status === 'approved' ">
            <span class="small d-block"> <b-icon icon="circle-fill"
                                                 variant="primary"></b-icon> Preautorizada por </span>
            <span class="d-block text-primary">{{ loanApplication.PreauthorizedBy.name }}</span>
            <span class="small d-block">Fecha de preutorización  </span>
            <span class="d-block text-primary"> {{ loanApplication.diffPreauthorizedAt }}</span>
            <span class="small d-block"><b-icon icon="circle-fill" variant="primary"></b-icon>  Autorizada por </span>
            <span class="d-block text-primary">{{ loanApplication.approvedBy.name }}</span>
            <span class="small d-block">Fecha de autorización  </span>
            <span class="d-block text-primary"> {{ loanApplication.diffApprovedAt }}</span>
        </b-card-body>
    </b-card>
</template>
<script>

import NotificationUtils from "../../Utils/notification-utils";
import RouteUtils from "../../../Utils/RouteUtils";

export default {
    name: 'PreAuthorize',
    data: () => {
        return {
            showRejectedReason: false,
            rejectedReason: '',
        }
    },
    props: {
        loanApplication: {
            type: Object,
            required: true
        }
    },

    methods: {
        showRejectedForm() {
            this.showRejectedReason = !this.showRejectedReason;
        },
        async preauthorize() {
            try {
                NotificationUtils.loading();
                const url = '/api/loans-applications/preauthorize';
                let responsePreauthorize = await axios.post(url, {
                    loan_application_id: this.loanApplication.id
                });
                if (responsePreauthorize.status === 204) {
                    NotificationUtils.close();
                    await NotificationUtils.showSuccess('Solicitud preautorizada');
                    RouteUtils.reloadPage()
                } else {
                    await NotificationUtils.showError(responsePreauthorize.data.message);
                }
            } catch (e) {
                NotificationUtils.close();

                await NotificationUtils.showError(e.response.data.message);
            }
        },
        async authorize() {
            NotificationUtils.loading();
            try {
                let responseApproved = await axios.post('/api/loans-applications/approve', {
                    loan_application_id: this.loanApplication.id
                });
                console.log({responseApproved});
                if (responseApproved.status === 204) {
                    NotificationUtils.close();
                    await NotificationUtils.showSuccess('Solicitud autorizada');
                    RouteUtils.reloadPage()
                }
                console.log({responseApproved});
            } catch (e) {
                NotificationUtils.close();
                await NotificationUtils.showError(e.response.data.message);
            }

        },
        reject() {

            let responseReject = axios.post('/api/loans-applications/reject', {
                loan_application_id: this.loanApplication.id,
                rejected_reason: this.rejectedReason
            });
            console.log({responseReject});
        },
    },
}

</script>
