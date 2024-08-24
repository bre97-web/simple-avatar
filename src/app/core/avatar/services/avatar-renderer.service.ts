import { Injectable } from '@angular/core';
import type { TAvatar } from '../interface/avatar';

@Injectable({
    providedIn: 'root'
})
export class AvatarRendererService {

    public render(to: HTMLElement, avatar: TAvatar) {
        this.mountElementTo(this.wrapAvatarElements(this.resolveAvatar(avatar, to)), to)
    }

    private mountElementTo(element: HTMLElement, to: HTMLElement) {
        to.appendChild(element)
    }

    private resolveAvatar(avatar: TAvatar, containerElement: HTMLElement) {
        const containerWidthProperty = containerElement.computedStyleMap().get('width') || containerElement.style.width
        const containerHeightProperty = containerElement.computedStyleMap().get('height') || containerElement.style.height
        const { data, colorMapping } = avatar
        const elements = []
        for (const line of data) {
            for (const block of line) {
                const styles = {
                    color: colorMapping[block],
                    width: `calc(${containerWidthProperty.toString()} / ${line.length})`,
                    height: `calc(${containerHeightProperty.toString()} / ${data.length})`,
                }
                elements.push(this.createAvatarBlockElement(styles))
            }
        }
        return elements
    }

    private wrapAvatarElements(elements: Array<HTMLElement>) {
        const parent = document.createElement('div')
        parent.style.setProperty('display', 'flex')
        parent.style.setProperty('flex-wrap', 'wrap')
        parent.style.setProperty('height', '100%')
        parent.style.setProperty('width', '100%')
        for (const element of elements) {
            parent.appendChild(element)
        }
        return parent
    }

    private createAvatarBlockElement(styles: { color: string, width: string, height: string }) {
        const element = document.createElement('div')
        element.style.setProperty('background-color', styles.color)
        element.style.setProperty('width', styles.width)
        element.style.setProperty('height', styles.height)
        return element
    }
}
