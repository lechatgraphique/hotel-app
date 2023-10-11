import { Injectable } from '@angular/core';
import {Reservation} from "../models/reservation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservations: Reservation[] = [];
  urlApi = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {

  }
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.urlApi + '/reservations');
  }
  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.urlApi + '/reservations/' + id);
  }
  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.urlApi + '/reservation/', reservation);
  }
  updateReservation(id: string, updatedReservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(this.urlApi + '/reservation/' + id, updatedReservation);
  }
  deleteReservation(id: string): Observable<Reservation> {
    return this.http.delete<Reservation>(this.urlApi + '/reservation/' + id);
  }
}
