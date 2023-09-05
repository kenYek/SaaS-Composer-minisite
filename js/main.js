// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show the "Scroll to Top" button when scrolling down
window.onscroll = function () {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

const switchButton = document.getElementById('switchButton');
let isMainColor = true;

switchButton.addEventListener('click', () => {
  isMainColor = !isMainColor;
  const root = document.documentElement;
  const markdownDivs = document.body.querySelectorAll('markdown-div');
  if (isMainColor) {
    root.style.setProperty('--white', '#ffffff');
    root.style.setProperty('--gray', 'rgb(226 226 226)');
    root.style.setProperty('--gray1', '#ddd');
    root.style.setProperty('--gray2', '#f2f2f2');
    root.style.setProperty('--gray3', '#f5f5f5');
    root.style.setProperty('--gray4', '#787878');
    root.style.setProperty('--black', '#000000');
    root.style.setProperty('--black1', '#333333');
    // document.body.querySelectorAll('markdown-div').setAttribute('data-markdown', 'light');
    markdownDivs.forEach(markdownDiv => {
      // 這裡處理每個 markdown-div 標籤的邏輯
      markdownDiv.setAttribute('data-color', 'light');
    });
  } else {
    root.style.setProperty('--white', '#000000');
    root.style.setProperty('--gray', 'rgb(29 29 29)');
    root.style.setProperty('--gray1', '#222');
    root.style.setProperty('--gray2', '#0d0d0d');
    root.style.setProperty('--gray3', '#0a0a0a');
    root.style.setProperty('--gray4', '#787878');
    root.style.setProperty('--black', '#ffffff');
    root.style.setProperty('--black1', '#cccccc');
    // document.body.querySelectorAll('markdown-div').setAttribute('data-markdown', 'dark');
    markdownDivs.forEach(markdownDiv => {
      // 這裡處理每個 markdown-div 標籤的邏輯
      markdownDiv.setAttribute('data-color', 'dark');
    });
  }
  switchButton.classList.toggle('isMainColor', isMainColor);
});



function Export2Word(element, filename = ''){
  var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  var postHtml = "</body></html>";
  var html = preHtml+document.getElementById(element).innerHTML+postHtml;

  var blob = new Blob(['\ufeff', html], {
      type: 'application/msword'
  });
  
  // Specify link url
  var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
  
  // Specify file name
  filename = filename?filename+'.doc':'document.doc';
  
  // Create download link element
  var downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);
  
  if(navigator.msSaveOrOpenBlob ){
      navigator.msSaveOrOpenBlob(blob, filename);
  }else{
      // Create a link to the file
      downloadLink.href = url;
      
      // Setting the file name
      downloadLink.download = filename;
      
      //triggering the function
      downloadLink.click();
  }
  
  document.body.removeChild(downloadLink);
}

// document.getElementById('exportDoc').addEventListener('click' ,() => {
//   Export2Word('exportContent', 'word-content.docx');
// })