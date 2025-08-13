import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero-service';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule ,UpperCasePipe, FormsModule], 
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  }

  heroes: Hero[] = [];

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
