import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  constructor(public api: ApiService, private routeId: ActivatedRoute) {  }
  data: any;
  rating: number = 0;

  ngOnInit(){
    this.api.getData().subscribe((res:any)=>{
      let id= this.routeId.snapshot.paramMap.get('id');
      let response=res;
      let product=response.filter((e:any)=>(e.id==id));
      this.data = product[0];
    })
  }
}
