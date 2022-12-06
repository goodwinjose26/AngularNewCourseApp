import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title=""
  description=""
  duration=""
  venue=""
  date=""
  constructor(private api:ApiService) {}

  addvalues=()=>
  {
    let data:any={"title":this.title,"description":this.description,"duration":this.duration,"venue":this.venue,"date":this.date}
    console.log(data)
    this.api.addcourse(data).subscribe(
      (response:any)=>
      {
        console.log(response)
      }
    )
  }

}
