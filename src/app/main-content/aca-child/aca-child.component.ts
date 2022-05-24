import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aca-child',
  templateUrl: './aca-child.component.html',
  styleUrls: ['./aca-child.component.scss']
})
export class AcaChildComponent implements OnInit {
  @Input() dataUpdate: any
  constructor() { }
  ngOnInit(): void {
    console.log(this.dataUpdate)

  }

}
