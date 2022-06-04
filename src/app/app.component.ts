import { Component } from '@angular/core';
import {Activity} from './activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mindful-life';

  activitiesList: Activity[] = [
    {
      name: "Elements Yoga Studio",
      type: "Yoga",
      city: "Fleet",
      county: "Hampshire",
      photoUrl: "https://www.elementsyogastudio.co.uk/wp-content/uploads/2020/01/charity-day-yoga.jpg",
      website: "https://www.elementsyogastudio.co.uk/"
    },
    {
      name: "Miss Maker",
      type: "Sewing",
      city: "Fleet",
      county: "Hampshire",
      photoUrl: "https://static.wixstatic.com/media/48d73c_9dd8fb1337654fada0efc9be1a958fbf~mv2.jpg/v1/crop/x_0,y_94,w_4032,h_1062/fill/w_1902,h_504,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Set%20up%20white%20background%20banner.jpg",
      website: "https://www.missmaker.com/"
    },
    {
      name: "Avondale Tennis Club",
      type: "Tennis",
      city: "Fleet",
      county: "Hampshire",
      photoUrl: "http://avondaletennisclub.co.uk/wp-content/uploads/header_f.jpg",
      website: "http://avondaletennisclub.co.uk/"
    },
    {
      name: "Love 2 Meditate",
      type: "Meditation",
      city: "Fleet",
      county: "Hampshire",
      photoUrl: "https://www.love2meditate.com/uploads/1/2/7/0/12703112/published/hub-2-cg-112.jpg?1648918043",
      website: "https://www.love2meditate.com/"
    },
    {
      name: "ColourWheel Art Class",
      type: "Art",
      city: "Hook",
      county: "Hampshire",
      photoUrl: "https://secureservercdn.net/160.153.137.14/4f4.abc.myftpupload.com/wp-content/uploads/2019/03/art-class-students-0719.jpg",
      website: "https://colourwheelartclass.co.uk/"
    },
    {
      name: "The Natural Cook Company ",
      type: "Cooking",
      city: "Alton",
      county: "Hampshire",
      photoUrl: "https://thenaturalcookcompany.com/wp-content/uploads/2018/11/adult-workshops.jpg",
      website: "https://thenaturalcookcompany.com/"
    }
  ];

  selectedActivity: Activity | undefined;

  updateSelectedActivity(activity: Activity) {
    this.selectedActivity = activity;
  }

  emptySelectedActivity() {
    this.selectedActivity = undefined;
  }
}
