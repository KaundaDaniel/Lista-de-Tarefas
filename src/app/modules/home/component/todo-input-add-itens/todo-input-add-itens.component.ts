import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  constructor() {}
  @Output()
  public emitItemListaTarefas = new EventEmitter();

  public addItemListaTarefa!: string;
  ngOnInit(): void {}

  public submitItemListatarefas() {
    this.addItemListaTarefa = this.addItemListaTarefa.trim();
    if (this.addItemListaTarefa) {
      this.emitItemListaTarefas.emit(this.addItemListaTarefa);
      this.addItemListaTarefa = '';
    }
  }
}
