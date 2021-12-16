import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'front';
  message$: Observable<string> | undefined;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
     this.httpService.getMessage().subscribe(res=>console.log(res));
    
  }
}
