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
  if (isMainColor) {
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
  switchButton.classList.toggle('isMainColor', isMainColor);
});