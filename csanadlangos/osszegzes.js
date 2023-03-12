var rendelesek = JSON.parse(localStorage.getItem('rendelesekJSON'));

let osszeg = (rendelesek.sajtostejfoloslangos[0] * rendelesek.sajtostejfoloslangos[1] + rendelesek.nutellaslangos[1] * rendelesek.nutellaslangos[0] + rendelesek
  .kaproslangos[1] * rendelesek.kaproslangos[0] + rendelesek.krumplissonkaslangos[1] * rendelesek.krumplissonkaslangos[0] + rendelesek
  .sajtossonkastoltottlangos[1] * rendelesek.sajtossonkastoltottlangos[0] + rendelesek.simalangos[1] * rendelesek.simalangos[0]);

function sajtostejfoloslangos() {
  for (let i = 1; i < 4; i += 1) {
    if (i == 1) {
      htmltext = `${rendelesek.sajtostejfoloslangos[i]} `;
    } else {
      if (rendelesek.sajtostejfoloslangos[i] == false) {
        htmltext = `<svg class="w-6 h-6" stroke-width="2" viewBox="0 0 20 20">
                <path fill="#713f12" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
            </svg>`;
      } else {
        htmltext = `<svg class="w-6 h-6" stroke-width="2" viewBox="0 0 20 20">
                <path fill="#713f12" d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
            </svg>`;
      }
    }
    document.getElementById(`sajtostejfoloslangos_${i}`).innerHTML = htmltext;
  }
}

function nutellaslangos() {
  for (let i = 1; i < 2; i += 1) {
    if (i == 1) {
      htmltext = `${rendelesek.nutellaslangos[i]} `;
    }
    document.getElementById(`nutellaslangos_${i}`).innerHTML = htmltext;
  }
}

function kaproslangos() {
  for (let i = 1; i < 4; i += 1) {
    if (i == 1) {
      htmltext = `${rendelesek.kaproslangos[i]} `;
    } else {
      if (rendelesek.kaproslangos[i] == false) {
        htmltext = `<svg class="w-6 h-6" stroke-width="2" viewBox="0 0 20 20">
                <path fill="#713f12" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
            </svg>`;
      } else {
        htmltext = `<svg class="w-6 h-6" stroke-width="2" viewBox="0 0 20 20">
                <path fill="#713f12" d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
            </svg>`;
      }
    }
    document.getElementById(`kaproslangos_${i}`).innerHTML = htmltext;
  }
}

function krumplissonkaslangos() {
  for (let i = 1; i < 4; i += 1) {
    if (i == 1) {
      htmltext = `${rendelesek.krumplissonkaslangos[i]} `;
    } else {
      if (rendelesek.krumplissonkaslangos[i] == false) {
        htmltext = `<svg class="w-6 h-6" stroke-width="2" viewBox="0 0 20 20">
                <path fill="#713f12" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
            </svg>`;
      } else {
        htmltext = `<svg class="w-6 h-6" stroke-width="2" viewBox="0 0 20 20">
                <path fill="#713f12" d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
            </svg>`;
      }
    }
    document.getElementById(`krumplissonkaslangos_${i}`).innerHTML = htmltext;
  }
}

function sajtossonkastoltottlangos() {
  for (let i = 1; i < 4; i += 1) {
    if (i == 1) {
      htmltext = `${rendelesek.sajtossonkastoltottlangos[i]} `;
    } else {
      if (rendelesek.sajtossonkastoltottlangos[i] == false) {
        htmltext = `<svg class="w-6 h-6" stroke-width="2" viewBox="0 0 20 20">
                <path fill="#713f12" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
            </svg>`;
      } else {
        htmltext = `<svg class="w-6 h-6" stroke-width="2" viewBox="0 0 20 20">
                <path fill="#713f12" d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
            </svg>`;
      }
    }
    document.getElementById(`sajtossonkastoltottlangos_${i}`).innerHTML = htmltext;
  }
}

function simalangos() {
  for (let i = 1; i < 4; i += 1) {
    if (i == 1) {
      htmltext = `${rendelesek.simalangos[i]} `;
    } else {
      if (rendelesek.simalangos[i] == false) {
        htmltext = `<svg class="w-6 h-6" stroke-width="2" viewBox="0 0 20 20">
                <path fill="#713f12" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
            </svg>`;
      } else {
        htmltext = `<svg class="w-6 h-6" stroke-width="2" viewBox="0 0 20 20">
                <path fill="#713f12" d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
            </svg>`;
      }
    }
    document.getElementById(`simalangos_${i}`).innerHTML = htmltext;
  }
}

function kiirattatas() {
  sajtostejfoloslangos();
  nutellaslangos();
  kaproslangos();
  krumplissonkaslangos();
  sajtossonkastoltottlangos();
  simalangos();
  document.getElementById("osszeg").innerHTML = `${osszeg} Ft`;
}

function langos_erkezes() {

  document.getElementById("kiszallitas").innerHTML = `Sikeres megrendelés!
    A lángosokat 30 perc múlva szállítjuk.`;
  var kiszallitas = document.getElementById("kiszallitas");
  kiszallitas.classList.remove('hidden');
}