import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/popular.css";
import "../styles/components/trending.css";
import "../styles/components/subscription.css";
import "../styles/components/footer.css";
import "../styles/utils.css";

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  disable: "phone",
  duration: 1500,
  offset: 100,
});

// document.addEventListener('DOMContentLoaded',() => {
//   AOS.init({
//     duration: 2000,
//     offset: 100,
// });
// })
