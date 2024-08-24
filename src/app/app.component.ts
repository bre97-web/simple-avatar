import { Component } from '@angular/core';
import { type TAvatar } from '@core/avatar/interface/avatar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected lastClickAvatar: TAvatar | null = null

  protected onAvatarClick(avatar: TAvatar) {
    this.lastClickAvatar = avatar

  }
}
