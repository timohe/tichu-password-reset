import { OnInit, AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	code: string;
	user: string;
	password: string;
	passwordRepeat: string;
	titleClass = 'initial';
	errorText = '';

	constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
	}


	// http://localhost:4200/?code=123&user=5ec6c41000a9363026f71884
	ngOnInit() {
		this.activatedRoute.queryParams.subscribe(params => {
			this.code = params.code;
			console.log(this.code);
			this.user = params.user;
			console.log(this.user);
		});
	}

	APIresetPassword(): Observable<any> {
		return this.httpClient.post<any>(`http://localhost:5000/api/users/resetPassword`, {
			user: this.user,
			code: this.code,
			newPassword1: this.password,
			newPassword2: this.passwordRepeat
		}).pipe(catchError(
			err => {
				console.log(err.error.error);
				this.titleClass = 'error';
				this.errorText = err.error.error;
				return throwError(err);
			}),
		);
	}

	resetPassword() {
		this.APIresetPassword().subscribe((response: Response) => {
			this.titleClass = 'success';
		});
	}
}
