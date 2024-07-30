class SpanLang extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
    this.updateTranslation();
    // // 監聽屬性變化事件
    // const observer = new MutationObserver(mutationsList => {
    //   for (const mutation of mutationsList) {
    //     if (mutation.type === 'attributes' && mutation.attributeName === 'data-language') {
    //       this.updateLanguageDoc();
    //       break;
    //     }
    //   }
    // });
    
    // observer.observe(this, { attributes: true });
  }

  static get observedAttributes() {
      return ['data-langKey', 'data-language'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
          this.updateTranslation();
      }
  }

  updateTranslation() {
      const langKey = this.getAttribute('data-langKey');
      const language = this.getAttribute('data-language');
      if (translations[langKey] && translations[langKey][language]) {
          this.innerHTML = `<span>${translations[langKey][language]}</span>`;
      } else {
          this.innerHTML = `<span>Translation not found</span>`;
      }
  }
}


if (typeof window !== 'undefined') {
  window.SpanLang = SpanLang;
  customElements.define('span-lang', SpanLang);
}