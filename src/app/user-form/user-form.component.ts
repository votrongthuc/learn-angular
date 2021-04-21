import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name='';

  showEvent(event){
    this.name = event.target.value;
    console.log(this.name);
  }
  constructor() { }

  ngOnInit() {
  }



}
