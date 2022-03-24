import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',          // * NOTE: default behavior w/ element selctor
  // selector: '[app-servers]',     // * NOTE: custom attribute selector
  // selector: '.app-servers',      // * NOTE: custom class selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverName: string = '';
  serverCreationStatus: string = 'No server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: Event){
    // this.serverName = (event.target as HTMLInputElement).value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
