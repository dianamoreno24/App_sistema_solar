import { Component, OnInit } from '@angular/core';
import { Planeta, planetas } from '../mock';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {
  proyectos = planetas;
  constructor() { }

  ngOnInit() {
  }

}
