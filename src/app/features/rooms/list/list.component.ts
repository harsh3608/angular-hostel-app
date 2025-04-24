import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RoomService } from '../../../shared/services/room.service';
import { Room } from '../../../shared/models/room';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-list',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [RoomService]
})
export class ListComponent implements OnInit {
  rooms: Room[] = [];

  constructor(
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.fetchRooms();
  }

  fetchRooms() {
    this.roomService.GetAllRooms().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.rooms = response.response;
          console.log(this.rooms);
        }
      },
      error: (err) => console.log(err)
    })
  }


}
