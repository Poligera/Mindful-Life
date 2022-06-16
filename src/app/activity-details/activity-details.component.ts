import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  @Input()
  activity: Activity|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
