import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  {path: '', component: CompaniesComponent},
  {path: 'companies/:id', component: VacanciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
