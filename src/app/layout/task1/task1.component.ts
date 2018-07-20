import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { User } from './user';
import { ViewChild } from '@angular/core';
import { MockDataService } from '../../shared/mock-data.service';
declare var require: any;

@Component({
  selector: 'task1',
  templateUrl: './task1.template.html',
  styleUrls: ['./task1.style.scss']
})
export class Task1Component implements OnInit {
  omegaLogo = require('../../../assets/img/04_crop.png');
  target = require('../../../assets/targets/task1.png');

  constructor(private mockDataService: MockDataService) {}

  showPreview = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'avatar', 'first_name', 'last_name', 'email', 'gender', 'title', 'company'];
  dataSource: MatTableDataSource<User>;
  totalRecords;

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.mockDataService.getUsers()
        .subscribe(users => {
          console.log(users);
          this.dataSource = new MatTableDataSource(users);
          this.totalRecords = (users ? users.length : 0);
          this.dataSource.paginator = this.paginator;
        });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
