import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [{name: 'wash the dishes', done: 1}, {name: 'laundry', done: null}, {name: 'clean room', done: null}];
  deletedtasks = [];
  checkTask(index) {
    if (this.tasks[index].done === 1) {
      this.tasks[index].done = null;
    } else {
      this.tasks[index].done = 1;
    }
  }
  deleteTask(index) {
    let task = this.tasks[index];
    this.tasks.splice(index, 1);
    this.deletedtasks.push(task);
  }
  changeName(name, index) {
    this.tasks[index].name = name;
  }
  createNewTask() {
    this.tasks.push({name: 'new task', done: null});
  }
  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
