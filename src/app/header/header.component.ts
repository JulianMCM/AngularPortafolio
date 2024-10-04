// @ts-ignore
import Typewriter from 't-writer.js';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {ngSkipHydration: 'true'}
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const target = this.renderer.selectRootElement('.tw', true);
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    });

    writer
      .strings(
        400,
        "Desarrollador Junior FullStack",
        "MEAN Stack",
        "JavaScript",
        "Angular",
        "MySql"
      )
      .start();
  }
}
