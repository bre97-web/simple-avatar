import { Component, ElementRef, inject, Input, type OnChanges, type SimpleChanges } from '@angular/core';
import type { TAvatar } from '@core/avatar/interface/avatar';
import { AvatarFaceConfigService } from '@core/avatar/services/avatar-face-config.service';
import { AvatarRendererService } from '@core/avatar/services/avatar-renderer.service';

@Component({
  selector: 'app-avatar-scene',
  templateUrl: './avatar-scene.component.html',
  styleUrl: './avatar-scene.component.scss'
})
export class AvatarSceneComponent implements OnChanges {
  @Input() avatarPart!: TAvatar

  private avatarRenderer = inject(AvatarRendererService)
  private elementRef = inject(ElementRef)

  protected faceConfig = inject(AvatarFaceConfigService)

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['avatarPart'] && changes['avatarPart'].currentValue) {
      const sceneElement = (this.elementRef.nativeElement as HTMLElement).querySelector(`.${changes['avatarPart'].currentValue.type}`)! as HTMLElement
      sceneElement.childNodes.forEach(e => e.remove())
      this.avatarRenderer.render(sceneElement, changes['avatarPart']['currentValue'] as unknown as TAvatar)
    }
  }

}
