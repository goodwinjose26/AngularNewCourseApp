import { Component } from '@angular/core';

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

  addvalues=()=>
  {
    let data:any={"title":this.title,"description":this.description,"duration":this.duration,"venue":this.venue,"date":this.date}
    console.log(data)
  }

}
