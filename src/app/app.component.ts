import { Component } from '@angular/core';
import { trigger, style, animate, transition, query, group } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        // Ocultar el contenido actual
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),

        // La animación al entrar (slide hacia la derecha)
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),  // Comienza fuera de la pantalla
            animate('300ms ease-in-out', style({ transform: 'translateX(0%)' }))  // Desliza hacia adentro
          ], { optional: true }),

          // La animación al salir (slide hacia la izquierda)
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('300ms ease-in-out', style({ transform: 'translateX(-100%)' }))  // Desliza hacia afuera
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'AngularPortafolio';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || '';
  }
}
