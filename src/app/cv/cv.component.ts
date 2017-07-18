import { Component, NgModule, OnInit } from '@angular/core';
import { CVService} from './cv.service';
import { CVModel} from './cv.model';

@Component({
  selector: 'cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [CVService]
})

export class CvComponent implements OnInit {
  cvModel = new CVModel();

  constructor(private cvs: CVService) {}
  ngOnInit() {
    this.cvs.getCV('dml').subscribe(
      result => {
          this.cvModel.id = result.cv.id;
          this.cvModel.name = result.cv.name;
          this.cvModel.email = result.cv.email;
          this.cvModel.profession = result.cv.profession;
          this.cvModel.city = result.cv.city;
          this.cvModel.zip = result.cv.zip;
          this.cvModel.email = result.cv.email;
          this.cvModel.github = result.cv.github;
          this.cvModel.linkedin = result.cv.linkedin;
          this.cvModel.linkedinShort = result.cv.linkedinShort;
          this.cvModel.twitter = result.cv.twitter;
          this.cvModel.twitterShort = result.cv.twitterShort;
          this.cvModel.education = result.cv.education;
          this.cvModel.workExperience = result.cv.workExperience.slice().reverse();
        },
        error => {
          console.log(error);
        });
  };
}
