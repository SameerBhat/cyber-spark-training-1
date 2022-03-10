import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface TableColumn {
  key: string;
  label: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  @Input() columns: TableColumn[];

  @Input() rows: any[] = [];


  @Input() showActions = false;

  @Output() onClickDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
