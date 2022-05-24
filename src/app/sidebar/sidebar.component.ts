import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 toc=[
  {name:"Introduction", link:'#introduction'},
  {name:"Professional Skills", link:'#professional'},
  {name:"Career Progression", link:'#career'},
  {name:"Academedic Details", link:'#academedic'},
  {name:"Contact Me", link:'#contact'},
  {name:"Writing Work", link:'#writing'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
