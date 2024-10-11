import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any[] = [];

  dataSourceInstance = new MatTableDataSource(this.dataSource);

  ngOnChanges() {
    this.dataSourceInstance.data = this.dataSource;
  }
}
