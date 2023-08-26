import { Component } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent {

  bigCardData:any = {}
  smallCardData:any[] = []

  ngOnInit():void {
    this.bigCardData = dataFake[0]
    this.smallCardData = dataFake.slice(1)
  }

}
