import { Injectable } from '@angular/core';import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';


@Injectable({
	providedIn: 'root'
})

export class AccountsService {

	private apiUrl = environments.API_URL

	constructor(private http: HttpClient) { }

	getAccount(): Observable<any> {
		return this.http.get<any>(this.apiUrl)
	}
}
