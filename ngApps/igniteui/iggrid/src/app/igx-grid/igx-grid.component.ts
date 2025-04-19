import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Company, localData } from './localData';
import { IgxGridComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxPaginatorComponent } from 'igniteui-angular';

@Component({
  selector: 'app-igx-grid',
  templateUrl: './igx-grid.component.html',
  styleUrls: ['./igx-grid.component.scss'],
  standalone: true,
  imports: [IgxGridComponent,
    IgxColumnComponent,
    IgxColumnGroupComponent,
    IgxPaginatorComponent]
})
export class IgxDataGridComponent implements OnInit, AfterViewInit  {
  @ViewChild('paginator', { static: true })
  public paginator!: IgxPaginatorComponent;

  public localDataArr: Company[] = [];
  title = 'igxGrid';
  public itemsPerPage = [3, 4, 5];

  constructor(public cdr: ChangeDetectorRef) { }

  public ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  public get localData(): Company[] {
    let coms = this.localDataArr;
    coms = this.paginator ? 
    this.localDataArr.slice(
      this.paginator.page * this.paginator.perPage, 
      (this.paginator.page * this.paginator.perPage) + this.paginator.perPage*5
      
    ): this.localDataArr;
   
    return coms;
  }



  ngOnInit(): void {
    this.localDataArr = localData;
  }



  public navigateToFirstPage() {
    this.paginator.page = 0;
  }
}
