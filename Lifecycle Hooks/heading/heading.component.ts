import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck , OnDestroy} from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
  @Input() text:string[]= []
  ngOnChanges(changes: SimpleChanges): void {
     console.log('ngOnChanges Called!', changes['text'].currentValue)
  }
  
  ngOnInit(): void {
    console.log('ngOnInit Called!');
    this.text.push('My First Name');
  }

  ngDoCheck(): void {
     console.log('ngDoCheck Called!')
  }

  ngOnDestroy(): void {
     console.log('ngOnDestroy Called!')
  }
}
