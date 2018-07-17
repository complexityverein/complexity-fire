import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  console.log(this.dataService.getAllPPers());
  }

}
