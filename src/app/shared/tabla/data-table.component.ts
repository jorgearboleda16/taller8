import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  
  data = [
    { column1: 'Pueba', column2: 'Row 1 Col 2', column3: 'Row 1 Col 3' },
    { column1: 'Row 2 Col 1', column2: 'Row 2 Col 2', column3: 'Row 2 Col 3' },
    { column1: 'test', column2: 'Row 3 Col 2', column3: 'Row 3 Col 3' },
    { column1: 'Row 4 Col 1', column2: 'Row 4 Col 2', column3: 'Row 4 Col 3' }
  ];
}
