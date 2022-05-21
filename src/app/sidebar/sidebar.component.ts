import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public pages = [
    { name: 'About Me', route: '/aboutme' },
    { name: 'Abilities', route: '/abilities' },
    { name: 'Projects', route: '/projects' },
    { name: 'Contact', route: '/contact' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
