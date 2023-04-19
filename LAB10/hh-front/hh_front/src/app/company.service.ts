import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Company } from './models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private client:HttpClient) { }

  BASE_URL = 'http://127.0.0.1:8001'

  getCompanies():Observable<Company[]>{
    
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies/`)
  }
}
