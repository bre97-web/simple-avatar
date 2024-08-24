import { Component, EventEmitter, inject, Output } from '@angular/core';
import type { TAvatar, TAvatarType } from '@core/avatar/interface/avatar';
import { AvatarDatabaseService } from '@core/avatar/services/avatar-database.service ';
import { AvatarFaceConfigService } from '@core/avatar/services/avatar-face-config.service';

@Component({
  selector: 'app-avatar-database-preview',
  templateUrl: './avatar-database-preview.component.html',
  styleUrl: './avatar-database-preview.component.scss'
})
export class AvatarDatabasePreviewComponent {
  @Output() avatarClick = new EventEmitter<TAvatar>()

  private faceConfig = inject(AvatarFaceConfigService)
  private database = inject(AvatarDatabaseService)

  public getAll() {
    return Object.entries(this.database.avatars()).map(value => ({ label: value[0] as TAvatarType, values: value[1] }))
  }

  public onAvatarClick(avatar: TAvatar) {
    this.avatarClick.emit(avatar)
  }

  protected onEyeOffsetInput(range: 'left' | 'right', type: 'x' | 'y', e: Event) {
    const value = `${(e.target as HTMLInputElement).value}px`
    if (range === 'left') {
      if (type === 'x') {
        this.faceConfig.eyeLeftOffsetX.set(value)
      } else {
        this.faceConfig.eyeLeftOffsetY.set(value)
      }
    } else {
      if (type === 'x') {
        this.faceConfig.eyeRightOffsetX.set(value)
      } else {
        this.faceConfig.eyeRightOffsetY.set(value)
      }
    }
  }
  protected onMouthOffsetInput(type: 'x' | 'y', e: Event) {
    const value = `${(e.target as HTMLInputElement).value}px`
    if (type === 'x') {
      this.faceConfig.mouthOffsetX.set(value)
    } else {
      this.faceConfig.mouthOffsetY.set(value)
    }

  }
}
