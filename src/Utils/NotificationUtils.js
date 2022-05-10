import Swal from "sweetalert2";

export default class NotificationUtils {

    static loading(text) {
        let message = text ? text : 'Procesando';
        Swal.fire({
            title: message,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false,
            onOpen: () => {
                Swal.showLoading();
            }
        }).then(r => {
            console.log({r});
            return r;
        });
    }

    static close() {
        Swal.close()
    }

    static showSuccessAlert(text) {
        return Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: text,
        });
    }

    static error(text) {
        return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: text,
        });
    }


}
