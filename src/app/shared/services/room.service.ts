import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomAddRequest } from '../models/room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  AddRoom(request: RoomAddRequest): Observable<any> {
    return this.http.post<any>(``, request);
  }


}
