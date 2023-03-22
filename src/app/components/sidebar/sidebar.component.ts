import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  links:{icon:string, name:string, path:string}[] = [
    {
      icon: '',
      name: 'Home',
      path: '/home',
    },
    {
      icon: '',
      name: 'Albums',
      path: '/albums',
    },
    {
      icon: '',
      name: 'Songs',
      path: '/songs',
    }
  ]
}
