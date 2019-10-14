import {
  animate,
  trigger,
  transition,
  query,
  style,
} from '@angular/animations';

export const sessionTransition = trigger('sessionTransition', [
  transition(':enter', [
    query('form.wrapper', [
      style({ opacity: 0, transform: 'translate3d(0, 10px, 0)' }),
      animate('400ms 200ms'),
    ]),
  ]),
  transition(':leave', [animate('200ms', style({ opacity: 0 }))]),
]);
