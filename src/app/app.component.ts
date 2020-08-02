import { OnInit, AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	id: string;
	title = 'password-reset-heroku';
	@ViewChild('first', { read: ElementRef }) password: ElementRef<HTMLElement>;
	@ViewChild('last', { read: ElementRef }) passwordRepeat: ElementRef<HTMLElement>;
	firstNameAutofilled: boolean;
	lastNameAutofilled: boolean;

	constructor(private activatedRoute: ActivatedRoute) {
	}


	// http://localhost:4200/?id=21313
	ngOnInit() {
		this.activatedRoute.queryParams.subscribe(params => {
			this.id = params.id;
			console.log(this.id);
		});
	}
}
