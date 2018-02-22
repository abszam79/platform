import Typed from 'typed.js';

function loadDynamicBannerText() {
  const bannerText = document.getElementById('banner-typed-text');
  if (bannerText) {
    new Typed('#banner-typed-text', {
      strings: ["Let's bid your next holidays rental", "Guests save money, Hosts earn more"],
      typeSpeed: 80,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
