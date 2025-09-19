import { Component, OnInit, Input } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
