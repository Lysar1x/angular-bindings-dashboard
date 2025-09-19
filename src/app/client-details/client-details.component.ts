import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
})
export class ClientsDetailsComponent implements OnInit {
  @Input() client: Client | null = null;

  constructor() {}

  ngOnInit(): void {}
}
