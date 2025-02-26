import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { landingRoutes } from './landing.routing';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../../shared/shared.module';
import { AppLandingHeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    SharedModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    NgOptimizedImage,
    MatCheckboxModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(landingRoutes),
  ],
  declarations: [LandingComponent, AppLandingHeaderComponent],
})
export class LandingModule {}
