import { Pokemon, Tipes } from './../../model/pokemon.model';
import { PokemomService } from './../../services/pokemom.service';
import { Component, OnInit } from '@angular/core';
import { Sprites } from 'src/app/model/sprites.model';


const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemon = new Pokemon();
  abilidades:[];
  tipos: Tipes[];
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
