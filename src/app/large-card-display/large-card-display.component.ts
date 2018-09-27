import { Component, OnInit } from '@angular/core';
import { MoviedbService} from '../moviedb.service';

@Component({
  selector: 'app-large-card-display',
  templateUrl: './large-card-display.component.html',
  styleUrls: ['./large-card-display.component.css']
})
export class LargeCardDisplayComponent implements OnInit {

  constructor(private _mdbs: MoviedbService) {}

  ngOnInit() {
    this._mdbs.getData()
    .subscribe( (res: any ) => {
      console.log("loggin the response", res);

    })
  }

}
