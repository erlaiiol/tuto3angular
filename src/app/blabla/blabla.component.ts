import { Component, OnInit } from '@angular/core';
import { Blablanon} from '../blablanon';

@Component({
  selector: 'sign-up',
  templateUrl: './blabla.component.html',
  styleUrls: ['./blabla.component.css']
})
export class BlablaComponent implements OnInit {
  blabla : Blablanon = {
    id: "gentilhomme@hommegentil.sympa",
    name: "Blabla",
    date: "21",
  }
  constructor() { }

  ngOnInit() {
  }

}
