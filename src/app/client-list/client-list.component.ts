import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../client.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  @Input() clients: Client[] = [];
  @Output() clientSelected = new EventEmitter<Client>();
  @Output() clientDeleted = new EventEmitter<number>();
  @Output() clientToEdit = new EventEmitter<Client>();

  constructor() {}

  ngOnInit(): void {}

  selectClient(client: Client): void {
    this.clientSelected.emit(client);
  }
  deleteClient(id: number): void {
    this.clientDeleted.emit(id);
  }
  editClient(client: Client): void {
    this.clientToEdit.emit(client);
  }
}
