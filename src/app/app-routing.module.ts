import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
  {path: 'portfolio', component: PortfolioComponent, data: { animation: 'PortfolioPage' }},
  {path: 'resume', component: ResumeComponent, data: { animation: 'ResumePage' }},
  {path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' }},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
