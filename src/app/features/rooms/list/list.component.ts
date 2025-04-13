import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RoomService } from '../../../shared/services/room.service';
import { Room } from '../../../shared/models/room';


@Component({
  selector: 'app-list',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  rooms: Room[] = [];

  constructor(
    private roomService: RoomService
  ) { }

  ngOnInit(): void {

  }

  fetchRooms() {
    this.roomService.GetAllRooms().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.rooms = response.response;
        }
      },
      error: (err) => console.log(err)
    })
  }


}
