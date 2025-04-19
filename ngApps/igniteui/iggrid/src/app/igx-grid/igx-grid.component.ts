import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Company, localData } from './localData';
import { IgxGridComponent, IgxColumnComponent, IgxColumnGroupComponent, IgxPaginatorComponent, IgxRowSelectorDirective, IgxSwitchComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-igx-grid',
  templateUrl: './igx-grid.component.html',
  styleUrls: ['./igx-grid.component.scss'],
  standalone: true,
  imports: [IgxGridComponent,
    IgxColumnComponent,
    IgxColumnGroupComponent,
    IgxPaginatorComponent,
    IgxRowSelectorDirective,
    IgxSwitchComponent,
  FormsModule]
})
export class IgxDataGridComponent implements OnInit, AfterViewInit  {
  @ViewChild('paginator', { static: true })
  public paginator!: IgxPaginatorComponent;
  public hideRowSelectors = false;

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
