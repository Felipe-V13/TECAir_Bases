/* This is the main module of an Angular application that declares and imports various components and
sets up routing. */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sing/sing-in.component';
import { NavClientComponent } from './nav-client/nav-client.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    SignInComponent,
    NavClientComponent,
    NavAdminComponent,
  ],
  imports: [
    //preguntar a carlos xd
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: InitComponent },
      { path: 'signIn', component: SignInComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
