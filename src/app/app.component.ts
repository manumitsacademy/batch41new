import { Component } from '@angular/core';
import {Course} from './course';
@Component({
  selector: 'my-app',
  templateUrl: "./app.component.html",
  styleUrls:['./app.component.css']
})
export class AppComponent  { 
	temp2:string;
	
	a="PHP";
	name = 'Manumits'; 
	
	save(t1:string,t2:string):void{
		console.log(t1,t2);
	}
	updatetemp1(n:string):void{
		console.log(n);
		this.temp2=n;
	}
	selectedCourseIndex:number;
	selectedCourse:Course;
	courses:Course[]=[	{id:1,name:"AngularJS","img_url":"http://www.tivix.com/uploads/blog_pics/square.png"}
						,{id:2,name:"Angular","img_url":"https://www.ag-grid.com/images/angular2.png"}
						,{id:3,name:"React","img_url":"https://i0.wp.com/www.wptutor.io/wp-content/uploads/2016/11/react.jpg"}
						,{id:4,name:"jQuery","img_url":"http://taswar.zeytinsoft.com/wp-content/uploads/2014/05/jquery-logo.png"}];
	addCourse():void{
		console.log("Adding Course!!!!",this.a);
		this.courses.push({id:this.courses.length+1,name:this.a,img_url:""});
		console.log("Added Course!!!!");
		console.log(this.courses);		
	}
	viewCourse(c:Course):void{
		console.log(c);
		this.selectedCourse=c;
	}
	deleteCourse(index:number):void{
		this.courses.splice(index,1);
		console.log("Hello ",index);
	}
	abc(e:Event):void{
		console.log("Hello Abc",e);
	}
}