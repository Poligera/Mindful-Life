import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit {
  nameInput = "";

  constructor() {
  }

  ngOnInit(): void {
  }


  @Input() activities: Activity[] = [];

  results: Activity[] = [];

  @Output() activitySelected = new EventEmitter<Activity>();

  @Output() activityEmptied = new EventEmitter<undefined>();

  notFoundMessage = "";

  // updateName(event: Event) {
  //   console.log(event);
  //   this.nameInput = (<HTMLInputElement>event.target).value;
  // }

  getColor(): string {
    return !this.results.length? 'lavenderBlush': 'aliceBlue';
  };

  searchActivities(searchText: string){
    if (!searchText) return;
    this.results = this.activities.filter((activity: Activity) => activity.city.toLowerCase().includes(searchText.toLowerCase())||activity.county.toLowerCase().includes(searchText.toLowerCase()));
    if (!(this.results.length)) this.notFoundMessage = "No results, try another location!";
    }

  onSelectActivity(activity: Activity){
    this.activitySelected.emit(activity);
  }
  
  onEmptyActivity(){
    this.activityEmptied.emit();
  }
}
