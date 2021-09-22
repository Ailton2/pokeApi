import { Pokemon } from './../../model/pokemon.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemomService } from 'src/app/services/pokemom.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit, OnDestroy {

  public pokemons: Pokemon[];
  private setPokemons: Pokemon[];
  public pageSlice: any;
  pageSize: number = 5;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private pokemonService: PokemomService,
    private router: Router,
    public loadingService: LoadingService) {
  }

  ngOnInit(): void { 
    this.getTodos();
  }

  getTodos() {
    this.pokemonService.getAllPokemons().pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
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

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
