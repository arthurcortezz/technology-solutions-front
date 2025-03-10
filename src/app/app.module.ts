import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { routes } from './app-routing';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { AuthLayoutComponent } from './modules/layout/auth-layout.component';

const config: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [
    ToastModule,
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, config),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  declarations: [AppComponent, AuthLayoutComponent],
})
export class AppModule {}
