import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scanSuccessHandler(e) {
    console.log('https://measuring.h-wie-honig.de/redirecter.php?unit=' + e);
    window.location.href = 'https://measuring.h-wie-honig.de/redirecter.php?unit=' + e;
  }

}
