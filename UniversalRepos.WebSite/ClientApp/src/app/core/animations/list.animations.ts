import { trigger, state, style, transition, animate } from '@angular/animations';

export const listanimations = [
    trigger('flyInOut', [
        state('in', style({ transform: 'translateX(0)' })),
        transition('void => *', [
            style({ transform: 'translateX(100%)' }),
            animate(500)
        ]),
        transition('* => void', [
            animate(500, style({ transform: 'translateX(-100%)' }))
        ])
    ])
];
export const insertanimations = trigger('myInsertRemoveTrigger', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
    ])
]);
