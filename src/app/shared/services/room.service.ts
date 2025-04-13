import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room, RoomAddRequest } from '../models/room';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Response } from '../models/dto/response';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  AddRoom(request: RoomAddRequest): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}room/add`, request);
  }

  GetAllRooms(): Observable<Response<Room[]>> {
    return this.http.get<Response<Room[]>>(`${environment.apiUrl}room/add`);
  }

}
