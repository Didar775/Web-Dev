import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Company, Vacancy } from './models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyServiceService {
  
  constructor(private client:HttpClient) { }

  BASE_URL = 'http://127.0.0.1:8001'

  getVacanciesService(company_id:Number):Observable<Vacancy[]>{
    
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${company_id}/vacancies`)
  }
}
