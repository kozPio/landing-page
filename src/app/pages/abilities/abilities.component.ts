import { Component, OnInit } from '@angular/core';
import { getportfolioData, Skill } from 'src/app/get-my-data';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss'],
})
export class AbilitiesComponent implements OnInit {
  public abilities: Skill[] = getportfolioData().resume.skills;
  constructor() {}

  ngOnInit(): void {}
}
