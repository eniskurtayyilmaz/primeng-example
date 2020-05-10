import { Component, OnInit } from '@angular/core';
import { Client, ClientCard } from './client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  cols: any[];
  clientCardList: Client[];

  displayDialog: boolean;

  selectedClientCard: Client;
  newClientCard: boolean;
  clientCard: Client = new ClientCard();

  constructor() {
  }

  ngOnInit(): void {
    this.clientCardList = [
      new ClientCard(1, 'Kurtay', 'Yılmaz', 'ben@eniskurtayyilmaz.com'),
      new ClientCard(2, 'Sena', 'Ablak Yılmaz', 'ben@senaablakyilmaz.com'),
      new ClientCard(3, 'Uras Koray', 'Yılmaz', 'ben@uraskorayyilmaz.com'),
      new ClientCard(4, 'Uras Koray 2', 'Yılmaz', 'ben@uraskorayyilmaz.com'),
      new ClientCard(5, 'Uras Koray 3', 'Yılmaz', 'ben@uraskorayyilmaz.com'),
      new ClientCard(6, 'Uras Koray 4', 'Yılmaz', 'ben@uraskorayyilmaz.com'),
      new ClientCard(7, 'Uras Koray 5', 'Yılmaz', 'ben@uraskorayyilmaz.com'),
      new ClientCard(8, 'Uras Koray 6', 'Yılmaz', 'ben@uraskorayyilmaz.com'),
      new ClientCard(9, 'Uras Koray 7', 'Yılmaz', 'ben@uraskorayyilmaz.com'),
      new ClientCard(10, 'Uras Koray 8', 'Yılmaz', 'ben@uraskorayyilmaz.com'),
      new ClientCard(11, 'Uras Koray 9', 'Yılmaz', 'ben@uraskorayyilmaz.com'),
    ];

    console.log(this.clientCardList);

    this.cols = [
      { field: 'id', header: 'Unique ID' },
      { field: 'name', header: 'Adı' },
      { field: 'surname', header: 'Soyadı' },
      { field: 'email', header: 'E-Posta Adresi' }
    ];
  }

  onRowSelect(event) {
    this.newClientCard = false;
    this.clientCard = { ...event.data };
    this.displayDialog = true;
  }

  findSelectedCarIndex(): number {
    return this.clientCardList.indexOf(this.selectedClientCard);
  }

  showDialogToAdd() {
    this.newClientCard = true;
    this.clientCard = new ClientCard();
    this.displayDialog = true;
  }

  save() {
    const cars = [...this.clientCardList];
    if (this.clientCard) {
      cars.push(this.clientCard);
    } else {
      cars[this.findSelectedCarIndex()] = this.clientCard;
    }
    this.clientCardList = cars;
    this.clientCard = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.findSelectedCarIndex();
    this.clientCardList = this.clientCardList.filter((val, i) => i !== index);
    this.clientCard = null;
    this.displayDialog = false;
  }


}
