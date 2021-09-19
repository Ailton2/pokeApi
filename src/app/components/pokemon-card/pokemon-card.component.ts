import { Pokemon } from './../../model/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemomService } from 'src/app/services/pokemom.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  pokemons: Pokemon[];
  constructor(private pokemonService: PokemomService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.pokemons = []
    this.pokemonService.getAllPokemons().subscribe((res: any) =>{
     if(res){
       this.pokemons = res
       console.log(res)
     }
    })
  }

  getDetalhes(id: any){
    alert(id)
  }

}
