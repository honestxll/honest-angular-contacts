import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000,
});

export const Confirm = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-danger mr-3',
    cancelButton: 'btn btn-secondary',
  },
  buttonsStyling: false,
});
