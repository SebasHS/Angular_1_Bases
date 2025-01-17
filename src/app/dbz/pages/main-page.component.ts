import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
constructor( private dbzService: DbzService ){
  dbzService
}

get characters(): Character[] {
  return [...this.dbzService.characters]
}

onDeleteCharacter(id: string){
  this.dbzService.deleteCharacterById( id );
}

AddCharacter( character: Character){
  this.dbzService.AddCharacter(character);
}

}
