import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { ContentfulService } from 'src/app/contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  courses: Entry<any>[] = [];

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    this.contentfulService.getCourses()
      .then(courses => this.courses = courses);
  }

  goToCourseDetailsPage(courseId) {
    this.router.navigate(['/course', courseId]);
  }


}