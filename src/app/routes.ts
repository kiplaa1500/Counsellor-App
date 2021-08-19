import { Routes } from '@angular/router'
import { ClientsComponent } from './clients/clients.component';
import { SignUpComponent } from './clients/sign-up/sign-up.component';
import { SignInComponent } from './clients/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientlistComponent } from './counsellor/clientlist/clientlist.component';
import { MedicationComponent } from './medication/medication.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { PrescribedComponent } from './prescribed/prescribed.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ViewAppointmentDetailsComponent } from './view-appointment-details/view-appointment-details.component';


export const appRoutes: Routes = [
    
    

    
    
    {
        path: 'signup', component: ClientsComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: ClientsComponent,

        children: [{ path: '', component: SignInComponent }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    { path: '', redirectTo: '/home', pathMatch: 'full' },    

    { path: 'home', component: HomeComponent },

    { path: 'counsellor', component: SidebarComponent },

    { path: 'client-profile', component: ClientProfileComponent },
    
    { path: 'groups', component: GroupsComponent },

    { path: 'appointments', component: AppointmentsComponent },

    { path: 'clientslist', component: ClientlistComponent },

    { path: 'about', component: AboutComponent },

    { path: 'contact', component: ContactComponent },

    { path: 'client-home', component: ClientHomeComponent },

    { path: 'medic', component: MedicationComponent },


    { path: 'logout', component: HomeComponent },


    { path: 'detail/:id', component: GroupDetailComponent },

    { path: 'appoint/:id', component: AppointmentDetailsComponent },


    { path: 'updatedappoint/:id', component: ViewAppointmentDetailsComponent },


    { path: 'prescribeMedics', component: PrescribedComponent },




    { path: 'updateAppointment/:id', component: UpdateAppointmentComponent },


    { path: 'viewAppointments', component: ViewAppointmentComponent },


    { path: '**', component: PagenotfoundComponent },

    

    

    


];