import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		RouterModule.forRoot([]),
		BrowserModule,
		NoopAnimationsModule,
		MatInputModule,
		MatButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
