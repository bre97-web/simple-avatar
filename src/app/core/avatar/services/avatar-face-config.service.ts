import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarFaceConfigService {

  public readonly eyeLeftOffsetX = signal(`0px`)
  public readonly eyeLeftOffsetY = signal(`0px`)
  public readonly eyeRightOffsetX = signal(`0px`)
  public readonly eyeRightOffsetY = signal(`0px`)
  public readonly mouthOffsetX = signal(`0px`)
  public readonly mouthOffsetY = signal(`0px`)
}
