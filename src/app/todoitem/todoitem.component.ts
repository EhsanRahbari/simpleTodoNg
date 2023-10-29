import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss'],
})
export class TodoitemComponent {
  @Input() title: string = 'todo title';
  @Input() description: string = 'todo description';
}
