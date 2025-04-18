import { Component, OnInit } from '@angular/core';
import { Company, localData } from './localData';
import { IgxGridComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxPaginatorComponent } from 'igniteui-angular';

@Component({
  selector: 'app-igx-grid',
  templateUrl: './igx-grid.component.html',
  styleUrls: ['./igx-grid.component.scss'],
  standalone: true,
  imports: [IgxGridComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxPaginatorComponent]
})
export class IgxDataGridComponent implements OnInit {
  public localData: Company[] = [];
  title = 'igxGrid';

  ngOnInit(): void {
    this.localData = localData;
  }
}
