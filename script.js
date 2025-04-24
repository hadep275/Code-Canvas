// Typing effect
class TypeWriter {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];
    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    const that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) delta /= 2;
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  }
}

window.onload = () => {
  const elements = document.getElementsByClassName('typewrite');
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-type');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TypeWriter(elements[i], JSON.parse(toRotate), period);
    }
  }

  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
};

// Modal logic
const modalData = [
  {
    title: "E-Commerce Store",
    desc: "A full-featured eCommerce store with Stripe integration, cart, product filters and responsive layout.",
    img: "images/project1.png",
    link: "https://yourproject1.com"
  },
  {
    title: "Blog Platform",
    desc: "Modern blog platform with CMS backend, SEO-friendly routing, and Markdown support.",
    img: "images/project2.png",
    link: "https://yourproject2.com"
  },
  {
    title: "Business Website + CMS",
    desc: "Complete business website with dynamic content, contact forms, and backend CMS.",
    img: "images/project3.png",
    link: "https://yourproject3.com"
  }
];

function openModal(index) {
  const modal = document.getElementById("modal");
  const data = modalData[index];
  document.getElementById("modal-img").src = data.img;
  document.getElementById("modal-title").innerText = data.title;
  document.getElementById("modal-desc").innerText = data.desc;
  document.getElementById("modal-link").href = data.link;
  modal.style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
