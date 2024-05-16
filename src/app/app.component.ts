import { Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parent child-data sharing Demo';
  forparent:string="This is for the parent component!!!";
  forchild:string="This is from parent to child !!! wonderful lets look";
  
  
  X:string='';
  //method 3 
  @ViewChild(Child1Component) child:any;

  callParent(message:string)
  {
    this.X=message;
  }

  buttonClick(){ this.forparent=this.child.name;}

}
