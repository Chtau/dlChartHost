import { Component } from '@angular/core';
import { Value, TooltipConfiguration } from 'dl-chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  values: Value[] = [
    new Value('Red', 5, 'Red', null, new TooltipConfiguration(null, (val, perc) => { return val.name + ' ( ' + perc + '% )' })),
    new Value('Blue', 3, 'Blue'),
    new Value('Green', 10, 'Green', null, new TooltipConfiguration(null, (val: Value, perc) => { return val.name + ' (' + val.value + ')' })),
    new Value('Orange', 3, 'Orange'),
    new Value('Yellow', 7, 'Yellow', null, new TooltipConfiguration(true)),
  ];

  filterValues: Value[] = this.values;
  filterValuesBar: Value[] = this.values;

  onKey(event: any) {
    let inputValue = event.target.value;
    this.filterValues = this.values.filter(val => {
      if (inputValue === undefined || inputValue === '') {
        return true;
      }
      if (val.name === inputValue || val.value.toString() === inputValue) {
        return true;
      }
      return false;
    });
  }

  onKeyBar(event: any) {
    let inputValue = event.target.value;
    this.filterValuesBar = this.values.filter(val => {
      if (inputValue === undefined || inputValue === '') {
        return true;
      }
      if (val.name === inputValue || val.value.toString() === inputValue) {
        return true;
      }
      return false;
    });
  }

}
