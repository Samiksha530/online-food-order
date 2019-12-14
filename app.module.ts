import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { PagenotpaundComponent } from './pagenotpaund/pagenotpaund.component';
import { CardComponent } from './card/card.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResistationComponent } from './resistation/resistation.component';
// import { FormGroup } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { GenderpipePipe } from './genderpipe.pipe';
import { Login2Component } from './login2/login2.component';
import { Resistation2Component } from './resistation2/resistation2.component';
import { GardCompoComponent } from './gard-compo/gard-compo.component';
import { MyguardGuard } from './myguard.guard';
import { IndianComponent } from './indian/indian.component';
import { ChaineesComponent } from './chainees/chainees.component';
import { SouthindianComponent } from './southindian/southindian.component';
import { PementComponent } from './pement/pement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MymoduleModule } from './mymodule/mymodule.module';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {CommonServiceService} from './common-service.service';





const appRouters: Routes =
  [
    { path: "Home", component: HomeComponent },
    { path: "login2", component: Login2Component },
    { path: "resistation2", component: Resistation2Component },
    { path: "menu", component: MenuComponent },
    { path: "indian", component: IndianComponent },
    { path: "chainees", component: ChaineesComponent },
    { path: "southindian", component: SouthindianComponent },
    { path: "card", component: CardComponent},
    { path: "admin", component: AdminComponent },

  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    PagenotpaundComponent,
    CardComponent,
    ResistationComponent,
    // FormGroup,
    GenderpipePipe,
    Login2Component,
    Resistation2Component,
    GardCompoComponent,
    IndianComponent,
    ChaineesComponent,
    SouthindianComponent,
    PementComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    // CommonServiceService,
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    MymoduleModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters),
    BrowserAnimationsModule,
    HttpClientModule,
    // FormGroup
    



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
