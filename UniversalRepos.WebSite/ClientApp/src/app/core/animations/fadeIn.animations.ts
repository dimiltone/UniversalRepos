import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInAnimation = trigger('visibilityChanged', [
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: 0 })),
    transition('true => false', animate('250ms 250ms ease-out')),
    transition('false => true', animate('500ms 500ms ease-in'))
  ]);
