import {
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child-ab',
  standalone: true,
  imports: [],
  templateUrl: './child-ab.component.html',
  styleUrl: './child-ab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildAbComponent implements DoCheck, OnInit, AfterViewChecked {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('ChildAbComponent: setTimeout');

    //   this.cdr.markForCheck();
    // }, 5000);
  }

  ngDoCheck() {
    // console.log('ChildAbComponent: ngDoCheck');
  }

  callMe() {
    console.log('ChildAbComponent: callMe');
  }

  ngAfterViewChecked(): void {
    console.log('ChildAbComponent: ngAfterContentChecked');
  }
}
