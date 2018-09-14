import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  post = [
	{
		title:"Premier post",
		content:"Vous connaissez la blague la plus coutre sur les zoophile ? C'est un homme qui rentre dans un bar.",
		loveIts:0,
		create_at: new Date(2018,15,5)
	},
	{
		title:"Deuxième post",
		content:"Quel est l'oiseau le plus fort ? La grue .",
		loveIts:3,
		create_at: new Date()
	}
  ];
  


}
