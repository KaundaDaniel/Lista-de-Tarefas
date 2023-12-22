import { Component, DoCheck, OnInit } from '@angular/core';
import { ListaTarefa } from '../../model/lista-tarefa';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public listaTarefas: Array<ListaTarefa> = JSON.parse(
    localStorage.getItem('lista') || '[]'
  );
  constructor() {}
  ngDoCheck(): void {
    this.setLocalStore();
  }
  public apagaTarefa(evento: number) {
    this.listaTarefas.splice(evento, 1);
  }
  public setEmitListaTarefas(evento: string) {
    this.listaTarefas.push({ tarefa: evento, verificado: false });
    console.log(evento);
  }
  public apagarTodasTarefas() {
    const confirmacao = window.confirm(
      'Deseja realmente apagar todas as tarefas?'
    );
    if (confirmacao == true) {
      this.listaTarefas = [];
    }
  }

  public validacao(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Deseja deixar vazio ou apagar?');

      if (confirm) {
        this.apagaTarefa(index);
      }
    }
  }

  public setLocalStore() {
    if (this.listaTarefas) {
      this.listaTarefas.sort(
        (first, last) => Number(first.verificado) - Number(last.verificado)
      );
      localStorage.setItem('lista', JSON.stringify(this.listaTarefas));
    }
  }

  ngOnInit(): void {}
}
