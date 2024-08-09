import { AfterContentChecked, AfterViewChecked, Component, DoCheck } from '@angular/core';
import { ChildAaComponent } from "../child-aa/child-aa.component";
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent-a',
  standalone: true,
  imports: [ChildAaComponent],
  templateUrl: './parent-a.component.html',
  styleUrl: './parent-a.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentAComponent implements AfterViewChecked {
  ngAfterViewChecked() {
    console.log('ParentAComponent: ngAfterContentChecked');
  }

  callMe() {
    console.log('ParentAComponent: callMe');
  }

}
