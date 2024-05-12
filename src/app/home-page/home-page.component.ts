import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UserList } from '../../models/user-list';
import { UserModel } from '../../models/user-model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatPaginatorModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  usermodel: UserModel[] = UserList;
  dataSource = new MatTableDataSource<UserModel>(this.usermodel)
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
}
