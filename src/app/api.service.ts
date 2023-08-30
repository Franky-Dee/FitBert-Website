import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4200';

  constructor(private http : HttpClient) {}

  editCell(cellIndex: number, newContent: string): Observable<any> {
    const url = `${this.baseUrl}/edit_cell`;
    const data = { cell_index: cellIndex, new_content: newContent };
    return this.http.post(url, data);
  }

  getCell(cellIndex: number): Observable<any> {
    const url = `${this.baseUrl}/get_cell?cell_index=${cellIndex}`;
    return this.http.get(url);
  }

  executeCell(cellIndex: number): Observable<any> {
    const url = `${this.baseUrl}/execute_cell`;
    const data = { cell_index: cellIndex };
    return this.http.post(url, data);
  }
}
