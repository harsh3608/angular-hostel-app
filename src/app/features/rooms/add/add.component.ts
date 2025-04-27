import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../../shared/services/room.service';
import { RoomAddRequest } from '../../../shared/models/room';
import {  MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
  providers: [
    RoomService,
    MessageService
  ]
})
export class AddComponent implements OnInit {
  roomAddRequest: RoomAddRequest = {
    number: 0,
    capacity: 0,
    rent: 0,
    remarks: '',
    customers: []
  };
  addForm!: FormGroup;

  constructor(
    private roomService: RoomService,
        private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      number: new FormControl(0),
      capacity: new FormControl(0),
      rent: new FormControl(0),
      remarks: new FormControl(''),
      customers: new FormControl()
    });
  }

  addRoom() {
    this.roomService.AddRoom(this.roomAddRequest).subscribe({
      next: (response) => {
        console.log('Room added successfully', response);
        // Handle success response
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'New room added successfully.' });
      },
      error: (error) => {
        console.error('Error adding room', error);
        // Handle error response
      }
    });
  }

}
