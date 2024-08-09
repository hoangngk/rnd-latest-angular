import { AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck } from '@angular/core';
import { ChildAbComponent } from "../child-ab/child-ab.component";

@Component({
  selector: 'app-child-aa',
  standalone: true,
  imports: [ChildAbComponent],
  templateUrl: './child-aa.component.html',
  styleUrl: './child-aa.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildAaComponent implements DoCheck, AfterViewChecked {
  public title = 'Child AA';

  constructor(private cdr: ChangeDetectorRef) {}
  
  ngOnInit() {
    setTimeout(() => {
      console.log('ChildAAComponent: setTimeout');
      this.title = 'Child AA - Updated';
      this.cdr.detectChanges();
    }, 5000);
  }

  ngDoCheck() {
    // console.log('ChildAaComponent: ngDoCheck');
  }

  ngAfterViewChecked(): void {
    console.log('ChildAaComponent: ngAfterContentChecked');
  }

  public updateTitle() {
    this.title = 'Child AA - Updated';
  }

}
