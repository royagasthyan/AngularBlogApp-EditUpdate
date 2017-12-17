import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

	@ViewChild('addPost') addBtn: ElementRef;

	constructor(private commonService: CommonService){
		
		this.commonService.postEdit_Observable.subscribe(res => {
			this.addBtn.nativeElement.click();
		});

	}
  
}
