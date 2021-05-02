import { Component, OnInit } from '@angular/core';
import {planetas, Planeta} from '../mock';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  planeta: Planeta;
  constructor() { }
  ngOnInit() {
    planetas.forEach((item) => {
      console.log(item.id);
      if (1 == item.id) {
        this.planeta = item;
        return;
      }
    });
  }
}
