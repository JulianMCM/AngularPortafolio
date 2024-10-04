import { trigger, style, animate, transition, query, group } from '@angular/animations';
import {Component, ViewChild, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { MatTabNav, MatTabLink } from '@angular/material/tabs';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Julian Mauricio - Home');
  }
  links = [
    {path: 'home', label: 'Inicio'},
    {path: 'portfolio', label: 'Portafolio'},
    {path: 'resume', label: 'Currículum'},
    {path: 'contact', label: 'Contacto'}
  ];
  activeLink = this.links[0].path;

  setActiveLink(link: { path: string; }) {
    this.activeLink = link.path;
  }
}
