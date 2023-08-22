function mdToHTML () {
    // const markdownContent = `
    // # Hello, Markdown!

    // This is a **Markdown** content converted to *HTML* using \`marked\` library.
    //         `;
    const markdownContent = document.getElementById('section7_4').querySelector('.markd');
    const markdownArea = document.getElementById('section7_4').querySelector('.markLoad');
    console.log('markdownContent', markdownContent.innerText)

    // 使用 marked 將 Markdown 轉換為 HTML
    const htmlContent = marked.parse(markdownContent.innerText);

    // 將轉換後的 HTML 放入 <div> 中
    markdownArea.innerHTML = htmlContent;
}

        