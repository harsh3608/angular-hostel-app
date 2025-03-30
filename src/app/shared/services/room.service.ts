import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room, RoomAddRequest } from '../models/room';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  AddRoom(request: RoomAddRequest): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}room/add`, request);
  }

  GetAllRooma(): Observable<Room[]> {
    return this.http.get<Room[]>(`${environment.apiUrl}room/add`);
  }

}
