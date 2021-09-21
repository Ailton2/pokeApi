import { Pokemon } from './../../model/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemomService } from 'src/app/services/pokemom.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  public pokemons: Pokemon[];
  private setPokemons: Pokemon[];
  public pageSlice: any;
  pageSize: number = 5;

  constructor(private pokemonService: PokemomService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.pokemonService.getAllPokemons().subscribe((res: any) => {
      if (res) {
        this.setPokemons = res;
        this.pokemons = this.setPokemons;
        this.pageSlice = res;
      }
    })
  }

  getDetalhes(id: any) {
    this.router.navigate(['/detalhe/' + id])
  }

  public getSearch(value: string) {
    const filter = this.setPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.pageSlice = filter;
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.pokemons.length) {
      endIndex = this.pokemons.length;
    }
    this.pageSize = event.pageSize;
    this.pageSlice = this.pokemons.slice(startIndex, endIndex);
  }

}
