import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',   // * NOTE: default behavior
  // selector: '[app-servers]', // * NOTE: custom attribute selector
  selector: '.app-servers',     // * NOTE: custom class selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
