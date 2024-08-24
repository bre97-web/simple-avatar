import { inject, Injectable } from '@angular/core';
import { AvatarBuilderService } from './avatar-builder.service';



@Injectable({
  providedIn: 'root'
})
export class AvatarDatabaseService {
  private readonly avatarBuilder = inject(AvatarBuilderService)

  private readonly eyeLeft = () => [
    this.avatarBuilder.drawAvatar({
      data: [
        ['e', 'e', 'e'],
        ['e', 's', 'e'],
        ['e', 'e', 'e'],
      ],
      colorMapping: {
        e: 'red',
        s: 'black'
      },
      type: 'eye-left'
    }),
    this.avatarBuilder.drawAvatar({
      data: [
        ['s', 's', 's'],
        ['s', 'e', 'e'],
        ['s', 'e', 'e'],
      ],
      colorMapping: {
        e: 'orange',
        s: 'yellow'
      },
      type: 'eye-left'
    }),
    this.avatarBuilder.drawAvatar({
      data: [
        ['s', 's', 's'],
        ['e', 'e', 's'],
        ['e', 'e', 's'],
      ],
      colorMapping: {
        e: 'orange',
        s: 'yellow'
      },
      type: 'eye-left'
    }),
    this.avatarBuilder.drawAvatar({
      data: [
        ['', 's', ''],
        ['e', 's', 'e'],
        ['', 'e', ''],
      ],
      colorMapping: {
        e: 'blue',
        s: 'darkblue'
      },
      type: 'eye-left'
    }),
    this.avatarBuilder.drawAvatar({
      data: [
        ['', '', 's', '', ''],
        ['s', 's', 's'],
        ['', 's', 'e', 's', ''],
        ['s', 's', 's'],
        ['', '', 's', '', ''],
      ],
      colorMapping: {
        e: 'blue',
        s: 'lightblue'
      },
      type: 'eye-left'
    }),
  ]

  private readonly _database = {
    head: [
      this.avatarBuilder.drawAvatar({
        data: [
          ['h'],
          ['h', 'h', '', '', '', '', '', 'h', 'h',],
          ['h', '', '', '', '', '', '', '', 'h',],
        ],
        colorMapping: {
          'h': 'black',
        },
        type: 'head'
      }),
      this.avatarBuilder.drawAvatar({
        data: [
          ['h'],
          ['', 'h', '', 'h', '', 'h', '', 'h', '',],
          [''],
        ],
        colorMapping: {
          'h': 'gray',
        },
        type: 'head'
      }),
    ],
    'eye-left': this.eyeLeft(),
    'eye-right': this.eyeLeft().map(e => {
      e.type = 'eye-right'
      return e
    }),
    mouth: [
      this.avatarBuilder.drawAvatar({
        data: [
          ['', 'e', '', '', '', '', '', 'e', ''],
          ['', 'e', '', '', '', '', '', 'e', ''],
          ['', '', 'e', 'e', 'e', 'e', 'e', '', ''],
          [''],
        ],
        colorMapping: {
          e: '#d68f5c',
        },
        type: 'mouth'
      }),
      this.avatarBuilder.drawAvatar({
        data: [
          ['', 'e', '', '', '', '', '', 'e', ''],
          ['', 'e', 'e', '', '', '', 'e', 'e', ''],
          ['', '', 'e', 'e', 'e', 'e', 'e', '', ''],
          [''],
        ],
        colorMapping: {
          e: '#d6a15c',
        },
        type: 'mouth'
      }),
      this.avatarBuilder.drawAvatar({
        data: [
          [''],
          [''],
          ['', '', 'e', 'e', 'e', 'e', 'e', '', ''],
          ['', 'e', '', '', '', '', '', 'e', ''],
        ],
        colorMapping: {
          e: '#d6a15c',
        },
        type: 'mouth'
      }),
      this.avatarBuilder.drawAvatar({
        data: [
          [''],
          ['', '', '', 'e', 'e', 'e', '', '', ''],
          ['', '', 'e', 'e', '', '', '', 'e', 'e', '', ''],
          ['', 'e', '', '', '', '', '', 'e', ''],
        ],
        colorMapping: {
          e: '#d6a15c',
        },
        type: 'mouth'
      }),
      this.avatarBuilder.drawAvatar({
        data: [
          [''],
          ['', '', 'e', 'e', 'e', 'e', 'e', '', ''],
          [''],
        ],
        colorMapping: {
          e: '#d6a15c',
        },
        type: 'mouth'
      }),
    ]
  } as const

  public avatars() {
    return this._database
  }


}


