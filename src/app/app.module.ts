import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToDoComponent } from './to-do/to-do.component';
import { HeaderComponent } from './header/header.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';
import { ToDoListService } from './to-do-list/to-do-list.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    HeaderComponent,
    ToDoListComponent,
    ToDoDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ToDoListService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
