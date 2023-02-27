import { BaseComponent } from "./../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  //❤️‍🔥전달받은 데이터를 활용해서 요소를 동적으로 생성함 : constructor
  //❤️‍🔥사용자에게 받은 값을 innerHTML로 바로 사용하는 것은 위험하다 : 동적으로 바로 html을 만들 수있기 떄문에
  //템플릿안에 요소에 접근에서 필요한 것만 업데이트
  constructor(title: string, url: string) {
    super(`<section class="image">
            <div class="image__holder"><img class="image__thumbnail"></div>
            <h2 class="image__title"></h2>
          </section>`);

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
