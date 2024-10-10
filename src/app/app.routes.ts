import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'appointments', component: AppointmentsComponent },
  ];
