class MarkdownDiv extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    async connectedCallback() {
      const markdownPath = this.getAttribute('data-markdown');
      const color = this.getAttribute('data-color');
      if (markdownPath) {
        const div = document.createElement('div');
        div.className = 'ex-contain';
        div.innerHTML = await this.loadMarkdown(markdownPath);
        // this.shadowRoot.innerHTML = `<div>${htmlContent}</div>`;
        this.shadowRoot.appendChild(div);
        // 遍歷所有 <code> 標籤
        const codeTags = this.shadowRoot.querySelectorAll('code');
        codeTags.forEach((codeTag) => {
        // 檢查父元素是否是 <pre> 標籤
        if (codeTag.parentElement.tagName === 'PRE') {
            codeTag.parentElement.classList.add('codeArea');
        }
        });

         // 創建 <style> 標籤
        const style = document.createElement('style');
        style.textContent = `
        :host {
            --black: ${color === 'light' ? '#000000' : '#ffffff'};
            --black1:${color === 'light' ? '#333333' : '#cccccc'};
            --white: ${color === 'light' ? '#ffffff' : '#000000'};
            --gray1: ${color === 'light' ? '#dddddd' : '#222222'};
            --gray2: ${color === 'light' ? '#f2f2f2' : '#0d0d0d'};
            --gray3: ${color === 'light' ? '#f5f5f5' : '#0a0a0a'};
        }
        .ex-contain img{
            max-width: 100%;
        }
        .codeArea {
            position: relative;
            box-sizing: border-box;
            margin-top: 10px;
            background-color: var(--black);
            color: var(--white);
            padding: 10px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid var(--gray1);
        }

        th {
          background-color: var(--gray2);
          color: var(--black1);
        }

        tbody tr:hover {
          background-color: var(--gray3);
          color: var(--black);
        }
        `;
        this.shadowRoot.appendChild(style);
        // 監聽屬性變化事件
        const observer = new MutationObserver(mutationsList => {
            for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-color') {
                this.updateColor();
                break;
            }
            }
        });
        
        observer.observe(this, { attributes: true });
      }

    }

    updateColor() {
        const color = this.getAttribute('data-color');
        const root = this.shadowRoot.querySelector('.ex-contain');
        if (color === 'light') {
            root.style.setProperty('--white', '#ffffff');
            root.style.setProperty('--gray', 'rgb(226 226 226)');
            root.style.setProperty('--gray1', '#ddd');
            root.style.setProperty('--gray2', '#f2f2f2');
            root.style.setProperty('--gray3', '#f5f5f5');
            root.style.setProperty('--gray4', '#787878');
            root.style.setProperty('--black', '#000000');
            root.style.setProperty('--black1', '#333333');
        } else {
            root.style.setProperty('--white', '#000000');
            root.style.setProperty('--gray', 'rgb(29 29 29)');
            root.style.setProperty('--gray1', '#222');
            root.style.setProperty('--gray2', '#0d0d0d');
            root.style.setProperty('--gray3', '#0a0a0a');
            root.style.setProperty('--gray4', '#787878');
            root.style.setProperty('--black', '#ffffff');
            root.style.setProperty('--black1', '#cccccc');
        }
    }

    async loadMarkdown (markdownPath) {
        const response = await fetch(markdownPath);
        const markdownContent = await response.text();
        const convertedContent = this.convertImagesPath(markdownContent, markdownPath);
        marked.use({
            gfm: true,
        });
  
        const htmlContent = marked.parse(convertedContent);
        return htmlContent;
    }
  
    convertImagesPath(content, basePath) {
      // Implement your logic to convert image paths here
      // You can use regular expressions or other methods to modify image paths
      // For example, you can replace ![alt text](image.jpg) with ![alt text](path/to/image.jpg)
        //   return content;
        // 假設 basePath 是指 md 檔案的相對路徑（例如：path/to/your/file.md）
        const baseUrl = basePath.replace(/\/[^/]*$/, ''); // 從 basePath 中提取目錄部分

        // 正則表達式模式用於匹配 ![alt text](image.jpg) 格式的圖片語法
        const imageRegex = /!\[.*?\]\((.*?)\)/g;

        // 使用 replace 函式來替換圖片路徑
        const convertedContent = content.replace(imageRegex, (match, imagePath) => {
            // 將相對路徑轉換為相對於 basePath 的路徑
            console.log(imagePath, baseUrl)
            // const relativeImagePath = new URL(imagePath, baseUrl).pathname;
            const relativeImagePath = `${baseUrl}/${imagePath}`;
            return `![alt text](${relativeImagePath})`;
        });

        return convertedContent;
    }
  }
  
//   customElements.define('mddiv', MarkdownDiv);
  if (typeof window !== 'undefined') {
    window.MarkdownDiv = MarkdownDiv;
    window.customElements.define('markdown-div', MarkdownDiv);
  }