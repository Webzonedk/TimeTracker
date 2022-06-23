import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimelogCreateComponent } from './timelog-create/timelog-create.component';
import { TimelogListComponent } from './timelog-list/timelog-list.component';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      TimelogCreateComponent,
      TimelogListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
