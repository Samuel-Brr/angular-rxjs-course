import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, noop, Observable } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    const http$ = new Observable(observer => {
      fetch('/api/courses')
        .then(response=>{
          return response.json()
        })
        .then(body=>{
          console.log(body)
          observer.complete()
        })
        .catch(err=>{
          observer.error(err)
        })
    })

    http$.subscribe(
      value => console.log(value),
      noop,
      ()=>console.log("completed !")
    )

  }

}
