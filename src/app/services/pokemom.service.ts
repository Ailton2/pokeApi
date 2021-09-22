import { Pokemon } from './../model/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemomService {

  private BASE_URL = ' https://pokeapi.co/api/v2';
  pokemons:any=[];

  constructor(private http: HttpClient) { }

  getPokemom(id: string):Observable<any>{
    return this.http.get(this.BASE_URL+`/pokemon/${id}`)
  }

  getAllPokemons():Observable<Pokemon>{
    this.pokemons = []
    for(let i = 1; i <= 350;i++){
        this.http.get(this.BASE_URL+`/pokemon/${i}`).subscribe((res) =>{
          this.pokemons.push(res)
        })
    }
    return of(this.pokemons);
  }

}
