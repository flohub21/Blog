import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle:   			string;
  @Input() postContent:			  string
  @Input() postLove:					number;
	@Input() postDateCreation:  Date;
	
	col = "red";
  constructor() { }

  ngOnInit() {
  }
	/**
		change le nombre de "love" d'un post
		@param: n int  le nombre de love à ajouter (peut être négatif)
	*/
	changeLove(n :number){
		this.postLove += n;
	}
	

}
