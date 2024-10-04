import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  expressjs: boolean = false;
  java: boolean = false;
  angular: boolean = false;
  nodejs: boolean = false;
  bootstrap: boolean = false;
  react: boolean = false;
  mongodb: boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Julian Mauricio - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.expressjs) {
      filterTags.push(Tag.EXPRESSJS);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.bootstrap) {
      filterTags.push(Tag.BOOTSTRAP);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.mongodb) {
      filterTags.push(Tag.MONGODB);
    }

    if (filterTags.length > 0){
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.python = false;
    this.expressjs = false;
    this.java = false;
    this.angular = false;
    this.typescript = false;
    this.nodejs = false;
    this.bootstrap = false;
    this.javascript = false;
    this.react = false;
    this.mongodb = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
