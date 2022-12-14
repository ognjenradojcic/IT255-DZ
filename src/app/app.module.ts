import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormAddComponent } from './form-add/form-add.component';
import { RoomListComponent } from './room-list/room-list.component';
import { EditRoomDialogComponent } from './edit-room-dialog/edit-room-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormAddValidateComponent } from './form-add-validate/form-add-validate.component';
import { RoomServiceService } from './services/room-service.service';
import { FormReservationComponent } from './form-reservation/form-reservation.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/room.reducer';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FilterPipePipe,
    FormAddComponent,
    RoomListComponent,
    EditRoomDialogComponent,
    FormAddValidateComponent,
    FormReservationComponent,
  ],
  entryComponents:[
    EditRoomDialogComponent,
    FormReservationComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({rooms: reducer})
  ],
  providers: [RoomServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
