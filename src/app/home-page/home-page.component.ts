import { Component, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UserList } from '../../models/user-list';
import { UserModel } from '../../models/user-model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatPaginatorModule, MatSortModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  usermodel: UserModel[] = UserList;
  dataSource = new MatTableDataSource<UserModel>(this.usermodel)
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'gender',
    'age',
    'phone',
    'companyId',
    'companyName',
    'companyLocation'
  ]

   /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
