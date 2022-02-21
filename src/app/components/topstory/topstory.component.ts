import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from 'src/app/services/newsapiservice.service'; //imports service

@Component({
  selector: 'app-topstory',
  templateUrl: './topstory.component.html',
  styleUrls: ['./topstory.component.css']
})
export class TopstoryComponent implements OnInit {

  constructor( private service:NewsapiserviceService) { }

  ngOnInit(): void {
    this.service.fetchTopStoriesBBC()
  }

}
