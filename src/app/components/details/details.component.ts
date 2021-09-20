import { Pokemon } from './../../model/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemomService } from 'src/app/services/pokemom.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  pokemon = new Pokemon();
  img: any;
  constructor(private routerActive: ActivatedRoute,
              private pokemonService: PokemomService,
              private router: Router) { }

  ngOnInit(): void {
    let id = this.routerActive.snapshot.paramMap.get('id');
    if (id != null) {
      this.pokemonService.getPokemom(id).subscribe((p) =>{
        this.img = p.sprites.other.dream_world.front_default;
        this.pokemon = p;

      })
    }
  }

  goHome(){
    this.router.navigate([('home')])
  }

}
