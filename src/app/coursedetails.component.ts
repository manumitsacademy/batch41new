import { Component, Input, EventEmitter,Output, SimpleChanges } from '@angular/core';
import { Course } from './course';
@Component({
  selector: 'course-details',
  templateUrl: "./coursedetails.component.html"
})
export class CourseDetailsComponent  {
	d:boolean=false;
	title:string="Manumits";
	constructor(){
		console.log("Hello Course Details Component!!!");
	}
	ngOnInit():void{
		console.log("Hello ngOnInit of Course Details Component")
	}
	ngOnChanges(s:SimpleChanges):void{
		console.log("Hello ngOnChanges of Course Details Component",s)
	}
	@Input() sc:Course;
	@Output() xyz = new EventEmitter<any>();
	
	pqr():void{
		this.d=!this.d;
		this.xyz.emit({"name":"Praveen","age":34});
	}
	
}