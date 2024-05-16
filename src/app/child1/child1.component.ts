import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
 @Input() inputfromparent:string='';
 
 message:string=`Hello CVRians!!! Welcome to the angular course, this is message from child to parent!!! wonderful`;
 
 @Output() updatedMessage =new EventEmitter<string>();

 name:string=`Source of entertainment for students- IPL Matches? is it Right?`;
 
 postData()
 {
   this.updatedMessage.emit(this.message);
 }



}
