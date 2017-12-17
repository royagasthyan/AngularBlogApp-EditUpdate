import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable()
export class ShowPostService {

	constructor(private http: HttpClient){

	}
	
	getAllPost(){
		return this.http.post('/api/post/getAllPost',{})
	}

}