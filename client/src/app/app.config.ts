import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import {JwtModule} from "@auth0/angular-jwt"
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
   
    provideAnimationsAsync(),

    importProvidersFrom(
      JwtModule.forRoot(
        {
          config: {
            tokenGetter:() => {
              if (typeof window !== 'undefined' && window.localStorage) {
                return localStorage.getItem("access_token")
              }
              return null;
            },
            allowedDomains: [
              "localhost:5270",
            ]
          }
        }
      )
    ),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
  
  ]
};
