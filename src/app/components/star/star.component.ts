import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  @Input() rating: any;
  get stars(){
    return Array(Math.floor(this.rating)).fill(0);
  }
  get empStars(){
    return Array(5 - Math.round(this.rating)).fill(0);
  }
}
