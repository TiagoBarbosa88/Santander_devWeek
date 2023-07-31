import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit{

accountData: AccountDataModel = {
	name: "Tiago Barbosa",
	account: {
		agency: "0000",
		number: "00.0000-0",
	},
	card: {
		limit: 10000,
		number: "0000"
	}
}

ngOnInit(): void {
	throw new Error('Method not implemented.');
}
}
