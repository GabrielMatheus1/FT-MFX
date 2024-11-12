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
      (height = window.innerHeight * 0.25),
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


/* grade de cursos */

// coleta de varias informações com a mesma classe // 
const botoesFlex = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacao = document.querySelectorAll(".informacao");

// função geral para cada botao //
botoesFlex.forEach((botao, indice) => {

    // evento que todos os botões faram //
    botao.addEventListener("click", () => {

        // buscara o botão com a classe //
        const botaoSelecionado = document.querySelector(".selecionado");

        // removera a classe de qual estiver //
        botaoSelecionado.classList.remove("selecionado");

        // add no botão que sera clicado //
        botao.classList.add("selecionado");

        // mesmo esquema dos botões so que para imagens //
        const imagemselecionado = document.querySelector(".selecionada");

        // removera a classe de qual estiver //
        imagemselecionado.classList.remove("selecionada");

        // add a classe de acordo com o botão selecionaod com o indice //
        imagens[indice].classList.add("selecionada");

        // mesmo esquema das imagens com o indice para exibir as informações //     
        const informacaoAtiva = document.querySelector(".ativa");

        // removera a classe do item q tiver //
        informacaoAtiva.classList.remove("ativa");

        // add a classe de acordo com o botão selecionaod com o indice //
        informacao[indice].classList.add("ativa");
    });
});

/* fim grade de curosos */



/*   depoimentos  */

const cardsContainer = document.querySelector(".card-carousel");
const cardsController = document.querySelector(".card-carousel + .card-controller")

class DraggingEvent {
  constructor(target = undefined) {
    this.target = target;
  }
  
  event(callback) {
    let handler;
    
    this.target.addEventListener("mousedown", e => {
      e.preventDefault()
      
      handler = callback(e)
      
      window.addEventListener("mousemove", handler)
      
      document.addEventListener("mouseleave", clearDraggingEvent)
      
      window.addEventListener("mouseup", clearDraggingEvent)
      
      function clearDraggingEvent() {
        window.removeEventListener("mousemove", handler)
        window.removeEventListener("mouseup", clearDraggingEvent)
      
        document.removeEventListener("mouseleave", clearDraggingEvent)
        
        handler(null)
      }
    })
    
    this.target.addEventListener("touchstart", e => {
      handler = callback(e)
      
      window.addEventListener("touchmove", handler)
      
      window.addEventListener("touchend", clearDraggingEvent)
      
      document.body.addEventListener("mouseleave", clearDraggingEvent)
      
      function clearDraggingEvent() {
        window.removeEventListener("touchmove", handler)
        window.removeEventListener("touchend", clearDraggingEvent)
        
        handler(null)
      }
    })
  }

  
  // Get the distance that the user has dragged
  getDistance(callback) {
    function distanceInit(e1) {
      let startingX, startingY;
      
      if ("touches" in e1) {
        startingX = e1.touches[0].clientX
        startingY = e1.touches[0].clientY
      } else {
        startingX = e1.clientX
        startingY = e1.clientY
      }
      

      return function(e2) {
        if (e2 === null) {
          return callback(null)
        } else {
          
          if ("touches" in e2) {
            return callback({
              x: e2.touches[0].clientX - startingX,
              y: e2.touches[0].clientY - startingY
            })
          } else {
            return callback({
              x: e2.clientX - startingX,
              y: e2.clientY - startingY
            })
          }
        }
      }
    }
    
    this.event(distanceInit)
  }
}


class CardCarousel extends DraggingEvent {
  constructor(container, controller = undefined) {
    super(container)
    
    // DOM elements
    this.container = container
    this.controllerElement = controller
    this.cards = container.querySelectorAll(".card")
    
    // Carousel data
    this.centerIndex = (this.cards.length - 1) / 2;
    this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
    this.xScale = {};
    
    // Resizing
    window.addEventListener("resize", this.updateCardWidth.bind(this))
    
    if (this.controllerElement) {
      this.controllerElement.addEventListener("keydown", this.controller.bind(this))      
    }

    
    // Initializers
    this.build()
    
    // Bind dragging event
    super.getDistance(this.moveCards.bind(this))
  }
  
  updateCardWidth() {
    this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
    
    this.build()
  }
  
  build(fix = 0) {
    for (let i = 0; i < this.cards.length; i++) {
      const x = i - this.centerIndex;
      const scale = this.calcScale(x)
      const scale2 = this.calcScale2(x)
      const zIndex = -(Math.abs(i - this.centerIndex))
      
      const leftPos = this.calcPos(x, scale2)
     
      
      this.xScale[x] = this.cards[i]
      
      this.updateCards(this.cards[i], {
        x: x,
        scale: scale,
        leftPos: leftPos,
        zIndex: zIndex
      })
    }
  }
  
  
  controller(e) {
    const temp = {...this.xScale};
      
      if (e.keyCode === 39) {
        // Left arrow
        for (let x in this.xScale) {
          const newX = (parseInt(x) - 1 < -this.centerIndex) ? this.centerIndex : parseInt(x) - 1;

          temp[newX] = this.xScale[x]
        }
      }
      
      if (e.keyCode == 37) {
        // Right arrow
        for (let x in this.xScale) {
          const newX = (parseInt(x) + 1 > this.centerIndex) ? -this.centerIndex : parseInt(x) + 1;

          temp[newX] = this.xScale[x]
        }
      }
      
      this.xScale = temp;
      
      for (let x in temp) {
        const scale = this.calcScale(x),
              scale2 = this.calcScale2(x),
              leftPos = this.calcPos(x, scale2),
              zIndex = -Math.abs(x)

        this.updateCards(this.xScale[x], {
          x: x,
          scale: scale,
          leftPos: leftPos,
          zIndex: zIndex
        })
      }
  }
  
  calcPos(x, scale) {
    let formula;
    
    if (x < 0) {
      formula = (scale * 100 - this.cardWidth) / 2
      
      return formula

    } else if (x > 0) {
      formula = 100 - (scale * 100 + this.cardWidth) / 2
      
      return formula
    } else {
      formula = 100 - (scale * 100 + this.cardWidth) / 2
      
      return formula
    }
  }
  
  updateCards(card, data) {
    if (data.x || data.x == 0) {
      card.setAttribute("data-x", data.x)
    }
    
    if (data.scale || data.scale == 0) {
      card.style.transform = `scale(${data.scale})`

      if (data.scale == 0) {
        card.style.opacity = data.scale
      } else {
        card.style.opacity = 1;
      }
    }
   
    if (data.leftPos) {
      card.style.left = `${data.leftPos}%`        
    }
    
    if (data.zIndex || data.zIndex == 0) {
      if (data.zIndex == 0) {
        card.classList.add("highlight")
      } else {
        card.classList.remove("highlight")
      }
      
      card.style.zIndex = data.zIndex  
    }
  }
  
  calcScale2(x) {
    let formula;
   
    if (x <= 0) {
      formula = 1 - -1 / 4 * x
      
      return formula
    } else if (x > 0) {
      formula = 1 - 1 / 4 * x
      
      return formula
    }
  }
  
  calcScale(x) {
    const formula = 1 - 1 / 30 * Math.pow(x, 2)
    
    if (formula <= 0) {
      return 0 
    } else {
      return formula      
    }
  }
  
  checkOrdering(card, x, xDist) {    
    const original = parseInt(card.dataset.x)
    const rounded = Math.round(xDist)
    let newX = x
    
    if (x !== x + rounded) {
      if (x + rounded > original) {
        if (x + rounded > this.centerIndex) {
          
          newX = ((x + rounded - 1) - this.centerIndex) - rounded + -this.centerIndex
        }
      } else if (x + rounded < original) {
        if (x + rounded < -this.centerIndex) {
          
          newX = ((x + rounded + 1) + this.centerIndex) - rounded + this.centerIndex
        }
      }
      
      this.xScale[newX + rounded] = card;
    }
    
    const temp = -Math.abs(newX + rounded)
    
    this.updateCards(card, {zIndex: temp})

    return newX;
  }
  
  moveCards(data) {
    let xDist;
    
    if (data != null) {
      this.container.classList.remove("smooth-return")
      xDist = data.x / 250;
    } else {

      
      this.container.classList.add("smooth-return")
      xDist = 0;

      for (let x in this.xScale) {
        this.updateCards(this.xScale[x], {
          x: x,
          zIndex: Math.abs(Math.abs(x) - this.centerIndex)
        })
      }
    }

    for (let i = 0; i < this.cards.length; i++) {
      const x = this.checkOrdering(this.cards[i], parseInt(this.cards[i].dataset.x), xDist),
            scale = this.calcScale(x + xDist),
            scale2 = this.calcScale2(x + xDist),
            leftPos = this.calcPos(x + xDist, scale2)
      
      
      this.updateCards(this.cards[i], {
        scale: scale,
        leftPos: leftPos
      })
    }
  }
}

const carousel = new CardCarousel(cardsContainer)


/* fim depoimentos */




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