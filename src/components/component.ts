export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 *  * ❤️‍🔥html element를 만드는 것을 캡슐화 함
 * Encapsulate the HTML element creation
 */
//💡base component
export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
