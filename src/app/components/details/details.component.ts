import { Pokemon } from './../../model/pokemon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  pokemon = new Pokemon();
  img: any;
  constructor() { }

  ngOnInit(): void {
  }

}
