import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideHttpClient(withFetch())
  ]
};