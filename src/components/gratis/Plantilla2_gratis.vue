<script setup>
import { ref } from "vue";
/*Adding 'P2' after -- because id overridden with Plantilla3*/
const changeColor2 = () => {
  document.documentElement.style.setProperty("--P2color1", "#213A59");
  document.documentElement.style.setProperty("--P2color2", "#3784DC");
  document.documentElement.style.setProperty("--P2color3", "#92B2D2");
  document.documentElement.style.setProperty("--P2color4", "#5E8AC3");
  document.documentElement.style.setProperty("--P2color5", "#758AA5");
  document.documentElement.style.setProperty("--P2color6", "#ED7A68");
  document.documentElement.style.setProperty("--P2texto", "#ffff");

  function toggleAccordion(id) {
      const content = document.getElementById(id);
      const icon = document.getElementById(`icon-${id}`);
      content.classList.toggle('active');
      icon.classList.toggle('fa-chevron-down');
      icon.classList.toggle('fa-chevron-up');
    }
};

</script>

<template>

  <section :style="{ backgroundColor: 'var(--P2color1)' }" class="px-2 md:mx-0">
    <div class="grid grid-cols-2 container mx-auto items-center gap-10 py-10">
      <div class="col-span-2 lg:col-span-1">
        <div class="grid gap-5 text-center">
          <h1 :style="{ color: 'var(--P2texto)' }" class="text-8xl font-bold">CURSO</h1>
          <p
            :style="{ color: 'var(--P2texto)' }"
            class="text-xl text-center md:text-start"
          >
            Breve descripción del curso que se va a ofertar con sus
            características más importantes.
          </p>
          <div>
            <button
              type="button"
              :style="{ background: 'var(--P2color2)', hover: (background = '') }"
              class="text-white font-semibold min-w-[300px] outline-none hover:bg-opacity-70  rounded-lg text-base px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              COMPRAR AHORA
            </button>
          </div>
        </div>
      </div>
      <div
        :style="{ color: 'var(--P2color4)' }"
        class="relative rounded-md w-[350px] h-[350px] mx-auto overflow-hidden col-span-2 lg:col-span-1"
      >
        <img
          :style="{ background: 'var(--P2color4)' }"
          class="absolute inset-0 w-full h-full object-cover"
          src="https://elpoderdelconsumidor.org/wp-content/uploads/2021/04/cafe.jpg"
          alt=""
        />
      </div>
    </div>
  </section>
  <section
    :style="{ backgroundColor: 'var(--P2color3)' }"
    class="px-2 md:mx-0 py-10"
  >
    <div
      class="grid container mx-auto justify-center items-center gap-10 py-10"
    >
      <h2
        :style="{ borderBottomColor: 'var(--P2texto)' }"
        class="text-center border-b-2 px-10 pb-3 text-white text-6xl font-bold"
      >
        SOBRE EL CURSO
      </h2>
      <div class="grid gap-2 font-medium">
        <div
          :style="{ background: 'var(--P2color1)' }"
          class="rounded-md flex gap-2 py-3 px-4 items-center"
        >
          <i :style="{ color: 'var(--P2texto)' }" class="fa-solid fa-plus"></i>
          <h4 :style="{ color: 'var(--P2texto)' }">
            Módulo 1: Título del módulo 1
          </h4>
        </div>
        <div
          :style="{ background: 'var(--P2color1)' }"
          class="rounded-md flex gap-2 py-3 px-4 items-center"
        >
          <i :style="{ color: 'var(--P2texto)' }" class="fa-solid fa-plus"></i>
          <h4 :style="{ color: 'var(--P2texto)' }">
            Módulo 2: Título del módulo 2
          </h4>
        </div>
        <div
          :style="{ background: 'var(--P2color1)' }"
          class="rounded-md flex gap-2 py-3 px-4 items-center"
        >
          <i :style="{ color: 'var(--P2texto)' }" class="fa-solid fa-plus"></i>
          <h4 :style="{ color: 'var(--P2texto)' }">
            Módulo 3: Título del módulo 3
          </h4>
        </div>
        <div
          :style="{ background: 'var(--P2color1)' }"
          class="rounded-md flex gap-2 py-3 px-4 items-center"
        >
          <i :style="{ color: 'var(--P2texto)' }" class="fa-solid fa-plus"></i>
          <h4 :style="{ color: 'var(--P2texto)' }">
            Módulo 4: Título del módulo 4
          </h4>
        </div>
      </div>
    </div>
  </section>
  <section :style="{ backgroundColor: 'var(--P2color4)' }" class="px-2 md:mx-0">
    <div class="grid container mx-auto justify-center items-center gap-5 py-10">
      <h2
        :style="{ color: 'var(--P2color2)' }"
        class="text-center text-4xl font-semibold"
      >
        ¡APROVECHA ESTA OFERTA!
      </h2>
      <i
        :style="{ color: 'var(--P2color2)' }"
        class="mx-auto text-4xl fa-solid fa-trophy"
      ></i>
      <div class="grid gap-2 font-medium mx-auto">
        <div>
          <button
            type="button"
            :style="{ background: 'var(--P2color2)', hover: (background = '') }"
            class="text-white min-w-[300px] outline-none hover:bg-opacity-70 font-semibold rounded-lg text-base px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            COMPRAR AHORA
          </button>
        </div>
      </div>
    </div>
  </section>
  <section
    :style="{ backgroundColor: 'var(--P2color3)' }"
    class="px-2 md:mx-0 py-10"
  >
    <div
      class="grid container grid-cols-2 mx-auto justify-center items-center gap-10 py-10"
    >
      <div class="grid col-span-2 lg:col-span-1">
        <h2
          :style="{ borderBottomColor: 'white', borderTopColor: 'white' }"
          class="text-center border-y-2 py-5 px-10 text-white text-6xl font-bold"
        >
          Nombre del <br />
          Creador
        </h2>
        <p class="text-white lg:text-start text-center py-5 lg:py-10">
          Breve descripción del nombre del creador del curso que se va a ofertar
          con datos relevantes
        </p>
      </div>
      <div class="grid col-span-2 lg:col-span-1">
        <div
          :style="{ color: 'var(--P2color4)' }"
          class="relative rounded-full w-[350px] h-[350px] mx-auto overflow-hidden col-span-2 lg:col-span-1"
        >
          <img
            :style="{ background: 'var(--P2color4)' }"
            class="absolute inset-0 w-full h-full object-cover"
            src="https://elpoderdelconsumidor.org/wp-content/uploads/2021/04/cafe.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section :style="{ backgroundColor: 'var(--P2color1)' }" class="px-2 md:mx-0">
    <div class="grid container mx-auto items-center gap-5 py-20">
      <div
        :style="{ color: 'var(--P2texto)' }"
        class="text-center flex gap-5 justify-center items-end"
      >
        <i class="fa-solid fa-star text-5xl"></i>
        <i class="fa-solid fa-star text-7xl"></i>
        <i class="fa-solid fa-star text-5xl"></i>
      </div>
      <h2
        :style="{ color: 'var(--P2texto)' }"
        class="text-center text-4xl lg:text-6xl font-bold mb-5"
      >
        G A R A N T Í A
      </h2>
      <div
        :style="{ borderBottomColor: 'white', borderTopColor: 'white' }"
        class="text-center border-y-2 py-5 px-10 grid gap-3"
      >
        <h2 :style="{ color: 'var(--P2texto)' }" class="text-4xl font-semibold">
          Garantía incondicional de 7 días
        </h2>
        <p :style="{ color: 'var(--P2texto)' }" class="text-xl">
          Tendrás tu dinero de vuelta sin preguntas hasta 7 días después de tu
          compra
        </p>
      </div>
    </div>
  </section>
  <section :style="{ backgroundColor: 'var(--P2color5)' }" class="px-2 md:mx-0">
    <div class="grid container mx-auto items-center gap-5 py-10 text-center">
      <div
        :style="{ color: 'var(--P2texto)' }"
        class="text-center flex gap-5 justify-center items-end text-4xl"
      >
        <i class="fa-solid fa-mobile-screen"></i>
        <i class="fa-solid fa-laptop"></i>
        <i class="fa-solid fa-tablet-screen-button"></i>
      </div>
      <h4 :style="{ color: 'var(--P2texto)' }" class="text-xl">
        Accede desde cualquier dispositivo
      </h4>
      <div class="flex mx-auto">
        <div :style="{background:'var(--P2color6)'}"  class="grid gap-4 py-8 px-4 lg:px-14 rounded-sm">
        <h6 class="text-white text-sm">Por apertura</h6>
        <h3 class="text-white text-7xl font-semibold">$49,99</h3>
        <div>
          <button
            type="button"
            :style="{ background: 'var(--P2color2)', hover: (background = '') }"
            class="text-white min-w-[300px] outline-none hover:bg-opacity-70 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            COMPRAR AHORA
          </button>
        </div>
      </div>
      </div>
      
    </div>
  </section>
    <!-- Preguntas Frecuentes -->
    <section :style="{ backgroundColor: 'var(--color3)' }" class="px-2 md:mx-0">
    <div class="grid container mx-auto items-center gap-5 py-20">
      <h4
        :style="{ color: 'var(--texto)' , borderBottomColor: '--texto'}"
        class="text-center text-4xl lg:text-6xl font-bold mb-5 pb-6 border-b-2 mx-auto"
      >
        PREGUNTAS FRECUENTES
      </h4>
      <div
        class="text-justify py-5 px-10 grid gap-3 text-xl"
      >
        <div @click="toggleAccordion('faq1')" :style="{ color: 'var(--texto)' }" class="grid grid-cols-2 container mx-auto items-center gap-10 py-10 cursor-pointer">
            <h4 :style="{ color: 'var(--texto)' }" class="text-3xl font-semibold">
                ¿Para quién es este producto?
            </h4>
            <i id="icon-faq1" class="fa-solid fa-chevron-up text-3xl flex justify-end"></i>
        </div>
        <p id="faq1" :style="{ color: 'var(--texto)' }" class="text-xl accordion-content">
            Quién es el público objetivo de tu producto.
        </p>
      </div>
      <div
        class="text-justify py-5 px-10 grid gap-3 text-xl"
      >
        <div @click="toggleAccordion('faq2')" :style="{ color: 'var(--texto)' }" class="grid grid-cols-2 container mx-auto items-center gap-10 py-10 cursor-pointer">
            <h4 :style="{ color: 'var(--texto)' }" class="text-3xl font-semibold">
                ¿Cómo funciona el 'Plazo de Garantía'?
            </h4>
            <i id="icon-faq2" class="fa-solid fa-chevron-up text-3xl flex justify-end"></i>
        </div>
        <p id="faq2" :style="{ color: 'var(--texto)' }" class="text-xl accordion-content">
            El Plazo de Garantía es el periodo que tienes para pedir el reembolso integral del valor de tu compra, en caso de que el producto no sea satisfactorio. 
        </p>
      </div>
      <div
        class="text-justify py-5 px-10 grid gap-3 text-xl" 
      >
        <div @click="toggleAccordion('faq3')" :style="{ color: 'var(--texto)' }" class="grid grid-cols-2 container mx-auto items-center gap-10 py-10 cursor-pointer">
            <h4 :style="{ color: 'var(--texto)' }" class="text-3xl font-semibold">
                ¿Qué es y cómo funciona el Certificado de Conclusión digital?
            </h4>
            <i id="icon-faq3" class="fa-solid fa-chevron-up text-3xl flex justify-end"></i>
        </div>
        <p id="faq3" :style="{ color: 'var(--texto)' }" class="text-xl accordion-content">
            Algunos cursos online ofrecen un certificado digital de conclusión. Los alumnos pueden emitir este certificado dentro del curso o ponerse en contacto con el Autor o Autora. Estos certificados pueden compartirse en redes sociales como LinkedIn e incluirse en informaciones curriculares.
        </p>
      </div>
      <div
        class="text-justify py-5 px-10 grid gap-3 text-xl"
      >
        <div @click="toggleAccordion('faq4')" :style="{ color: 'var(--texto)' }" class="grid grid-cols-2 container mx-auto items-center gap-10 py-10 cursor-pointer">
            <h4 :style="{ color: 'var(--texto)' }" class="text-3xl font-semibold">
                ¿Cómo hago para comprar?
            </h4>
            <i id="icon-faq4" class="fa-solid fa-chevron-up text-3xl flex justify-end"></i>
        </div>
        <p id="faq4" :style="{ color: 'var(--texto)' }" class="text-xl accordion-content">
            Para comprar este curso, haz clic en el botón “Comprar ahora”. Recuerda que no todos los productos estarán siempre disponibles para su compra. Es posible que el Productor esté preparando un nuevo grupo todavía sin inscripciones abiertas.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="css">
:root {
  --P2color1: #213A59;
  --P2color2: #3784DC;
  --P2color3: #92B2D2;
  --P2color4: #031930;
  --P2color5: #5E8AC3;
  --P2color6: #758AA5;
  --P2texto: #FFFFFF;
}

.accordion-content {
      display: none;
      transition: max-height 0.2s ease-out;
    }
    .accordion-content.active {
      display: block;
    }
</style>