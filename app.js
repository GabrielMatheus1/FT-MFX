/* parte dos professores */


(function () {
  "use strict";

  var carousel = document.getElementsByClassName("carousel-professores")[0],
    slider = carousel.getElementsByClassName("carousel__slider")[0],
    items = carousel.getElementsByClassName("carousel__slider__item"),
    prevBtn = carousel.getElementsByClassName("carousel__prev")[0],
    nextBtn = carousel.getElementsByClassName("carousel__next")[0];

  var width,
    height,
    totalWidth,
    margin = 20,
    currIndex = 0,
    interval,
    intervalTime = 10000;

  function init() {
    resize();
    move(Math.floor(items.length / 2));
    bindEvents();

    timer();
  }


  function resize() {
    (width = Math.max(window.innerWidth * 0.25, 275)),
      (height = window.innerHeight * 0.5),
      (totalWidth = width * items.length);

    slider.style.width = totalWidth + "px";

    for (var i = 0; i < items.length; i++) {
      let item = items[i];
      item.style.width = width - margin * 2 + "px";
      item.style.height = height + "px";
    }
  }

  function move(index) {
    if (index < 1) index = items.length;
    if (index > items.length) index = 1;
    currIndex = index;

    for (var i = 0; i < items.length; i++) {
      let item = items[i],
        box = item.getElementsByClassName("item__3d-frame")[0];
      if (i == index - 1) {
        item.classList.add("carousel__slider__item--active");
        box.style.transform = "perspective(1200px)";
      } else {
        item.classList.remove("carousel__slider__item--active");
        box.style.transform =
          "perspective(1200px) rotateY(" + (i < index - 1 ? 40 : -40) + "deg)";
      }
    }

    slider.style.transform =
      "translate3d(" +
      (index * -width + width / 2 + window.innerWidth / 2) +
      "px, 0, 0)";
  }

  function timer() {
    clearInterval(interval);
    interval = setInterval(() => {
      move(++currIndex);
    }, intervalTime);
  }

  function prev() {
    move(--currIndex);
    timer();
  }

  function next() {
    move(++currIndex);
    timer();
  }

  function bindEvents() {
    window.onresize = resize;
    prevBtn.addEventListener("click", () => {
      prev();
    });
    nextBtn.addEventListener("click", () => {
      next();
    });
  }

  init();
})();






/* fim sessao dos professores */

/* formulario */

/* da promeira sessao do formulario p/ segunda */
const inputName = document.getElementById('nome');
const botaoUmForm = document.getElementById('next-btn1');

/* loading de troca de passos */
function loadFormulario() {
    
    const loadingScreen = document.querySelector('.load-form');
    
    loadingScreen.style.display = 'flex';
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2000);
}

inputName.addEventListener('input', () => {
    
    if (inputName.value.length >= 3) {
        botaoUmForm.disabled = false;
    } else {
        botaoUmForm.disabled = true;
    }
});

const stepUm = document.querySelector('#step-1');
const stepDois = document.querySelector('#step-2');

botaoUmForm.addEventListener('click', () => {
    
    var  name = null;
    
    if (inputName.value.length !== " ") {
        loadFormulario();
        stepUm.classList.remove('active');
        stepDois.classList.add('active');
        name = inputName.value;
        
    }
    console.log(name);
});

/* da segunda sessao do formulario p/ terceira */
const inputPhone = document.getElementById('phone');
const botaoDoisFormBack = document.getElementById('back-btn2');
const botaoDoisFormNext = document.getElementById('next-btn2');
const stepTres = document.querySelector('#step-3');

botaoDoisFormBack.addEventListener('click', () => {
    
    stepDois.classList.remove('active');
    stepUm.classList.add('active');
    
});

inputPhone.addEventListener('input', () => {
    
    if (inputPhone.value.length === 11) {
        botaoDoisFormNext.disabled = false;
    } else {
        botaoDoisFormNext.disabled = true;
    }
});

botaoDoisFormNext.addEventListener('click', () => {
    
    const  phone = inputPhone.value;
    
    if(phoneValide(phone)){
        loadFormulario();
        stepDois.classList.remove('active');
        stepTres.classList.add('active');
        console.log(phone);
    }
});

function phoneValide(inputPhone) {
    
    const regex = /^(\+55\s?)?\(?\d{2}\)?\s?\d{4,5}\d{4}$/;
    return regex.test(inputPhone);
}

/* da terceira sessao do formulario p/ quarta e ultima */
const inputEmail = document.getElementById('email');
const botaoTresFormBack = document.getElementById('back-btn3');
const botaoTresFormNext = document.getElementById('submit-btn');
const stepQuatro = document.querySelector('#step-4');


inputEmail.addEventListener('input', () => {
    
    if (inputEmail.value.length >= 1 ) {
        botaoTresFormNext.disabled = false;
    } else {
        botaoTresFormNext.disabled = true;
    }
});

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return regex.test(email);
}

botaoTresFormNext.addEventListener('click', () => {
    
    var  email = inputEmail.value;
    
    if (validarEmail(email)) {
        loadFormulario();
        stepTres.classList.remove('active');
        stepQuatro.classList.add('active');
        console.log(email);
    }
});

botaoTresFormBack.addEventListener('click', () => {
    
    stepTres.classList.remove('active');
    stepDois.classList.add('active');
});

var form = document.getElementById('form');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  }).then(response => response.json())
    .then(data => {
    });
});
/* fim formulario */


/* faq */
const input = document.getElementById('faq-input');
const quest = document.getElementById('link-quest');

quest.addEventListener('click', () => {
  const mensagem = input.value;
  const wapp = '5511930876062'; 
  const txtWapp = encodeURIComponent(mensagem);
  const link = `https://wa.me/${wapp}?text=${txtWapp}`;
  quest.href = link;
});
/* fim do encaminhamento do site para pergunta no whatsapp */