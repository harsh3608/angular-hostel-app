import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RoomService } from '../../../shared/services/room.service';
import { Room } from '../../../shared/models/room';
import { TooltipModule } from 'primeng/tooltip';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddComponent } from '../add/add.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-list',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ConfirmDialog,
    ToastModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [
    DialogService,
    RoomService,
    ConfirmationService,
    MessageService

  ]
})
export class ListComponent implements OnInit {
  rooms: Room[] = [];

  constructor(
    private roomService: RoomService,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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

  openAddDialog() {
    const ref = this.dialogService.open(AddComponent, {
      header: 'Add Room',
      width: '50%',
      contentStyle: { "max-height": "80vh", "overflow": "auto" },
      baseZIndex: 10000,
      closable: true,
      modal: true,
    });

    ref.onClose.subscribe((room: Room) => {
      if (room) {
        this.rooms.push(room);
      }
    });
  }

  openUpdateDialog(roomId: any) {
    const ref = this.dialogService.open(AddComponent, {
      header: 'Add Room',
      width: '50%',
      contentStyle: { "max-height": "80vh", "overflow": "auto" },
      baseZIndex: 10000,
      closable: true,
      modal: true,
    });

    ref.onClose.subscribe((room: Room) => {
      if (room) {
        this.rooms.push(room);
      }
    });
  }

  confirmDelete(event: any, roomId: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this room?',
      header: 'Danger Zone',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },

      accept: () => {
        this.roomService.DeleteRoom(roomId).subscribe({
          next: (response) => {
            if (response.isSuccess) {
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            } else {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: response.message });
            }
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      },
    });

  }



}
