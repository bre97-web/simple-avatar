import { Injectable } from '@angular/core';
import type { IAvatar } from '../interface/avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarBuilderService {

  constructor() { }

  public drawAvatar(field: IAvatar) {
    return new class implements IAvatar {
      type = field.type
      data = field.data
      colorMapping = field.colorMapping
    }()
  }
}
