import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'password-reset-heroku';
	@ViewChild('first', { read: ElementRef }) firstName: ElementRef<HTMLElement>;
	@ViewChild('last', { read: ElementRef }) lastName: ElementRef<HTMLElement>;
	firstNameAutofilled: boolean;
	lastNameAutofilled: boolean;
}
