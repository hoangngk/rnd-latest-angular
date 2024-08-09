import { AfterViewChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChildBaComponent } from '../child-ba/child-ba.component';

@Component({
  selector: 'app-parent-b',
  standalone: true,
  imports: [ChildBaComponent],
  templateUrl: './parent-b.component.html',
  styleUrl: './parent-b.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentBComponent implements OnInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {
    console.log('ParentBComponent: ngOnInit');
  }

  ngAfterViewChecked(): void {
    console.log('ParentBComponent: ngAfterContentChecked');
  }
}
