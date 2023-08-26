import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  photoCover:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";
  contentTitle:string = "Meu artigo";
  contentDescription:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos excepturi ab alias sed numquam. Aliquid quisquam mollitia, vero pariatur quod cupiditate asperiores veniam iusto quis dolorem sint facilis velit?";

}
