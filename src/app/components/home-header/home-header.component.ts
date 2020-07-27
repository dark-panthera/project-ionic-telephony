import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Input() header: string;
  @Input() hide: boolean;
  
  constructor() { }

  ngOnInit() {}

}
