import { Component, ElementRef, inject, Input, type AfterViewInit } from '@angular/core';
import type { TAvatar } from '@core/avatar/interface/avatar';
import { AvatarRendererService } from '@core/avatar/services/avatar-renderer.service';

@Component({
  selector: 'app-avatar-preview',
  templateUrl: './avatar-preview.component.html',
  styleUrl: './avatar-preview.component.scss'
})
export class AvatarPreviewComponent implements AfterViewInit {
  @Input() avatar!: TAvatar
  @Input() height!: number
  @Input() width!: number

  private avatarRenderer = inject(AvatarRendererService)
  private elementRef = inject(ElementRef)


  ngAfterViewInit(): void {
    const root = (this.elementRef.nativeElement as HTMLElement).querySelector('.preview-container')! as HTMLElement

    root.style.setProperty('height', `${this.height}px`)
    root.style.setProperty('width', `${this.width}px`)

    this.avatarRenderer.render(root, this.avatar)
  }
}
