import { Pokemon } from './../../model/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemomService } from 'src/app/services/pokemom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  pokemons: Pokemon[];
  constructor(private pokemonService: PokemomService,
              private router: Router) { }

  ngOnInit(): void {
    this.pokemons = []
    this.getTodos();
  }

  getTodos(){
    this.pokemonService.getAllPokemons().subscribe((res: any) =>{
     if(res){
       this.pokemons = res
       console.log(res)
     }
    })
  }

  getDetalhes(id: any){
    this.router.navigate(['/detalhe/'+id])
  }

  public getSearch(value: string){
    console.log(value)
  }

}
