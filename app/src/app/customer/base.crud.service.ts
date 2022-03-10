import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface BaseItem {
  id?: number;
  created_at?: string;
  deleted_at?: string;
}


@Injectable({
  providedIn: 'root'
})
export abstract class BaseCrudService<ITEM extends BaseItem> {

  baseUrl = 'http://localhost:3000/';



  constructor(public http: HttpClient) { }


  getItems(): Observable<ITEM[]> {
    return this.http.get<ITEM[]>(this.baseUrl + this.suffix);
  }

  saveItem(item: ITEM): Observable<ITEM> {
    return this.http.post<ITEM>(this.baseUrl + this.suffix, item);
  }

  getItem(id: number): Observable<ITEM> {
    return this.http.get<ITEM>(this.baseUrl + this.suffix + '/' + id);
  }

  updateItem(item: ITEM): Observable<ITEM> {
    return this.http.put<ITEM>(this.baseUrl + this.suffix + '/' + item.id, item);
  }

  deleteItem(id: number): Observable<ITEM>  {
    return this.http.delete<ITEM>(this.baseUrl + this.suffix + '/' + id);
  }

  abstract get  suffix(): string;
}
