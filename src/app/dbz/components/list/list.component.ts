import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent2 {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacterById(id?: string):void {

    if(!id) return;

    console.log('UUID a borrar: ' + {id})
    this.onDelete.emit(id);

   /* const char: Character = characters[index];
   // this.characterList.splice(index, 1);
    console.log('El indice del personaje es: ' + index);
    this.onDelete.emit(char); */

  }
}
