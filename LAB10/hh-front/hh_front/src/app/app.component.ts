import { Component, OnInit } from '@angular/core';
import { Company } from './models';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'hh_front';
  
  companies: Company[]= []

  constructor(private companyService: CompanyService){


  }

  ngOnInit(): void {
    
   this.companyService.getCompanies().subscribe((data) =>{
    
    this.companies = data

   })

}
}