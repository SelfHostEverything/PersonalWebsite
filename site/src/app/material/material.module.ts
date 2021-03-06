import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatOptionModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';




const MaterialComponents = [
  MatSliderModule,
  MatOptionModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatSelectModule,
  MatMenuModule,
  MatCardModule,
  MatSnackBarModule
]

@NgModule({
  imports: [
    MaterialComponents

  ],
  exports: [MaterialComponents]
  
})
export class MaterialModule { }
