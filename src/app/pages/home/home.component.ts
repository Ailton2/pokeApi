import { Pokemon, Types } from './../../model/pokemon.model';
import { PokemomService } from './../../services/pokemom.service';
import { Component, OnInit } from '@angular/core';
import { Sprites } from 'src/app/model/sprites.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemon = new Pokemon();
  types: Types[];
  nome: any;
  img: any;
  spritesList: Sprites[];


  constructor(private service: PokemomService) { }

  ngOnInit(): void {
  }

  getPokemom(){
      this.service.getPokemom(this.nome).subscribe((res: any) => {
        this.pokemon = res
        let imagem = res.sprites.other.dream_world.front_default;
        if(imagem === null){
          this.img = res.sprites.front_default
        }else{
          this.img = res.sprites.other.dream_world.front_default;
        }

      })
  }

}
