import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { UserService } from './shared/services/user.service';
import { AdminService } from './shared/services/admin.service';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserFundTransferComponent } from './components/user-fund-transfer/user-fund-transfer.component';






@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AccountListComponent,
    UserDashboardComponent,
    UserFundTransferComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
