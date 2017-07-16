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
        },
        error => {
          console.log(error);
        });
  };
}
