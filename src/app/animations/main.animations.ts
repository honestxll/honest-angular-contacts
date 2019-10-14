import {
  animate,
  trigger,
  transition,
  query,
  style,
} from '@angular/animations';

export const mainPageSwitchTransition = trigger('mainPageSwitchTransition', [
  transition(
    ':enter',
    query('.table', [
      style({ opacity: 0, transform: 'scale3d(0.95, 0.95, 0)' }),
      animate('200ms 200ms'),
    ]),
  ),
  transition(':leave', [
    query('.table', [
      animate('200ms', style({ opacity: 0, transform: 'translateX(10px)' })),
    ]),
  ]),
]);
