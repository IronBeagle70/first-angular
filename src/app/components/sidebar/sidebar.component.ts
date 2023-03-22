import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  links:{icon:string, name:string, path:string}[] = [
    {
      icon: 'home',
      name: 'Home',
      path: '/home',
    },
    {
      icon: 'album',
      name: 'Albums',
      path: '/albums',
    },
    {
      icon: 'library_music',
      name: 'Songs',
      path: '/songs',
    }
  ]

  showNames = true;

  toggleNames(){
    this.showNames = !this.showNames;
  }

}
