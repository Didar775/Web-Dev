import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { ActivatedRoute } from '@angular/router';
import { VacancyServiceService } from '../vacancy-service.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit{

  vacancies:Vacancy[];
  company_id :number  ;

  constructor(private route: ActivatedRoute, private service:VacancyServiceService){

    this.vacancies = []
    this.company_id = 0

  }


  ngOnInit(): void {
    this.company_id = Number(this.route.snapshot.paramMap.get('id'));
    this.getVacancies(this.company_id)
  }

  getVacancies(id:number){
    this.service.getVacanciesService(id).subscribe((data) => {
      this.vacancies = data
      console.log(this.vacancies.length)
    })
  }


}
