import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/Board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board:Board = new Board('test Board', [
    new Column('Ideas', [
      "Random Idea",
      "Other Idea",
      "other other idea"
    ]), 
    new Column('Research', [
      "Random research",
      "other Random research",
      "other other Random research"
    ]), 
    new Column('Todo', [
      'Get to work', 
      'Pick up groceries', 
      'Go home', 
      'Fall asleep'
    ]), 
    new Column('Done', [
      'Get up', 
      'Brush teeth', 
      'Take a shower', 
      'Check e-mail', 
      'Walk dog'
    ])
  ] )

  ngOnInit(): void {
  }


  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  research = ['find ideas'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
