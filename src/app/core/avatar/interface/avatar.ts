
/**
 * @example
 * [
 *     [ 'header', 'header', 'header', 'header' ],
 *     [ '',       'eye',    'eye',    ''       ],
 *     [ '',       '',       '',       ''       ],
 *     [ '',       'mouth',  'mouth',  ''       ],
 * ]
 */
export type TAvatarData = Array<Array<string>>
export type TAvatarColorMapping = Record<string, string>
export type TAvatarType = "head" | "eye-left" | "eye-right" | "nose" | "mouth" | "face"

export interface IAvatar {
    data: TAvatarData
    colorMapping: TAvatarColorMapping
    type: TAvatarType
}
export type TAvatar = IAvatar
