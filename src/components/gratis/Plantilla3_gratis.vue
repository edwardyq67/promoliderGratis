<script setup>
import { ref } from "vue";

const changeColor1 = () => {
  document.documentElement.style.setProperty("--color1", "#0D0421");
  document.documentElement.style.setProperty("--color2", "#B96E8F");
  document.documentElement.style.setProperty("--color3", "#7C466A");
  document.documentElement.style.setProperty("--color4", "#C297AA");
  document.documentElement.style.setProperty("--color5", "#5C3C63");
  document.documentElement.style.setProperty("--color6", "#ED7A68");
  document.documentElement.style.setProperty("--texto", "#ffff");
};

const changeColor3 = () => {
  document.documentElement.style.setProperty("--color1", "#CBE3E7");
  document.documentElement.style.setProperty("--color2", "#0691B0");
  document.documentElement.style.setProperty("--color3", "#BFB7B5");
  document.documentElement.style.setProperty("--color4", "#E7E6E4");
  document.documentElement.style.setProperty("--color5", "#758AA5");
  document.documentElement.style.setProperty("--color6", "#908b92");
  document.documentElement.style.setProperty("--texto", "#908b92");
};

const changeColor4 = () => {
  document.documentElement.style.setProperty("--color1", "#103233");
  document.documentElement.style.setProperty("--color2", "#5C3337");
  document.documentElement.style.setProperty("--color3", "#CA9783");
  document.documentElement.style.setProperty("--color4", "#B16674");
  document.documentElement.style.setProperty("--color5", "#E0C0BB");
  document.documentElement.style.setProperty("--color6", "#ED7A68");
  document.documentElement.style.setProperty("--texto", "#ffff");
};
</script>

<template>
  <div class="flex gap-5 py-5">
    <button
      @click="changeColor3"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Cambiar Color 3
    </button>
    <button
      @click="changeColor4"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Cambiar Color 4
    </button>
     <button
      @click="changeColor1"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Cambiar Color 1
    </button>
  </div>

  <section :style="{ backgroundColor: 'var(--color1)' }" class="px-2 md:mx-0">
    <div class="grid grid-cols-2 container mx-auto items-center gap-10 py-10">
      <div
        :style="{ color: 'var(--color4)' }"
        class="relative rounded-full w-[350px] h-[350px] mx-auto overflow-hidden col-span-2 lg:col-span-1"
      >
        <img
          :style="{ background: 'var(--color4)' }"
          class="absolute inset-0 w-full h-full object-cover"
          src="https://elpoderdelconsumidor.org/wp-content/uploads/2021/04/cafe.jpg"
          alt=""
        />
      </div>
      <div class="col-span-2 lg:col-span-1">
        <div class="grid gap-5 text-center">
          <h1 :style="{ color: 'var(--texto)' }" class="text-8xl font-bold">CURSO</h1>
          <p
            :style="{ color: 'var(--texto)' }"
            class="text-xl text-center md:text-start"
          >
            Breve descripción del curso que se va a ofertar con sus
            características más importantes.
          </p>
          <div>
            <button
              type="button"
              :style="{ background: 'var(--color2)', hover: (background = '') }"
              class="text-white font-semibold min-w-[300px] outline-none hover:bg-opacity-70  rounded-lg text-base px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              COMPRAR AHORA
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    :style="{ backgroundColor: 'var(--color3)' }"
    class="px-2 md:mx-0 py-10"
  >
    <div
      class="grid container mx-auto justify-center items-center gap-10 py-10"
    >
      <h2
        :style="{ borderBottomColor: 'var(--color2)' }"
        class="text-center border-b-2 px-10 pb-3 text-white text-6xl font-bold"
      >
        SOBRE EL CURSO
      </h2>
      <div class="grid gap-2 font-medium">
        <div
          :style="{ background: 'var(--color1)' }"
          class="rounded-md flex gap-2 py-3 px-4 items-center"
        >
          <i :style="{ color: 'var(--texto)' }" class="fa-solid fa-plus"></i>
          <h4 :style="{ color: 'var(--texto)' }">
            Módulo 1: Título del módulo 1
          </h4>
        </div>
        <div
          :style="{ background: 'var(--color1)' }"
          class="rounded-md flex gap-2 py-3 px-4 items-center"
        >
          <i :style="{ color: 'var(--texto)' }" class="fa-solid fa-plus"></i>
          <h4 :style="{ color: 'var(--texto)' }">
            Módulo 2: Título del módulo 2
          </h4>
        </div>
        <div
          :style="{ background: 'var(--color1)' }"
          class="rounded-md flex gap-2 py-3 px-4 items-center"
        >
          <i :style="{ color: 'var(--texto)' }" class="fa-solid fa-plus"></i>
          <h4 :style="{ color: 'var(--texto)' }">
            Módulo 3: Título del módulo 3
          </h4>
        </div>
        <div
          :style="{ background: 'var(--color1)' }"
          class="rounded-md flex gap-2 py-3 px-4 items-center"
        >
          <i :style="{ color: 'var(--texto)' }" class="fa-solid fa-plus"></i>
          <h4 :style="{ color: 'var(--texto)' }">
            Módulo 4: Título del módulo 4
          </h4>
        </div>
      </div>
    </div>
  </section>
  <section :style="{ backgroundColor: 'var(--color1)' }" class="px-2 md:mx-0">
    <div class="grid container mx-auto justify-center items-center gap-5 py-10">
      <h2
        :style="{ color: 'var(--color2)' }"
        class="text-center text-4xl font-semibold"
      >
        ¡APROVECHA ESTA OFERTA!
      </h2>
      <i
        :style="{ color: 'var(--color2)' }"
        class="mx-auto text-4xl fa-solid fa-trophy"
      ></i>
      <div class="grid gap-2 font-medium mx-auto">
        <div>
          <button
            type="button"
            :style="{ background: 'var(--color2)', hover: (background = '') }"
            class="text-white min-w-[300px] outline-none hover:bg-opacity-70 font-semibold rounded-lg text-base px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            COMPRAR AHORA
          </button>
        </div>
      </div>
    </div>
  </section>
  <section
    :style="{ backgroundColor: 'var(--color3)' }"
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
          :style="{ color: 'var(--color4)' }"
          class="relative rounded-md w-[350px] h-[350px] mx-auto overflow-hidden col-span-2 lg:col-span-1"
        >
          <img
            :style="{ background: 'var(--color4)' }"
            class="absolute inset-0 w-full h-full object-cover"
            src="https://elpoderdelconsumidor.org/wp-content/uploads/2021/04/cafe.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section :style="{ backgroundColor: 'var(--color1)' }" class="px-2 md:mx-0">
    <div class="grid container mx-auto items-center gap-5 py-20">
      <div
        :style="{ color: 'var(--texto)' }"
        class="text-center flex gap-5 justify-center items-end"
      >
        <i class="fa-solid fa-star text-5xl"></i>
        <i class="fa-solid fa-star text-7xl"></i>
        <i class="fa-solid fa-star text-5xl"></i>
      </div>
      <h2
        :style="{ color: 'var(--texto)' }"
        class="text-center text-4xl lg:text-6xl font-bold mb-5"
      >
        G A R A N T Í A
      </h2>
      <div
        :style="{ borderBottomColor: 'white', borderTopColor: 'white' }"
        class="text-center border-y-2 py-5 px-10 grid gap-3"
      >
        <h2 :style="{ color: 'var(--texto)' }" class="text-4xl font-semibold">
          Garantía incondicional de 7 días
        </h2>
        <p :style="{ color: 'var(--texto)' }" class="text-xl">
          Tendrás tu dinero de vuelta sin preguntas hasta 7 días después de tu
          compra
        </p>
      </div>
    </div>
  </section>
  <section :style="{ backgroundColor: 'var(--color4)' }" class="px-2 md:mx-0">
    <div class="grid container mx-auto items-center gap-5 py-10 text-center">
      <div
        :style="{ color: 'var(--color2)' }"
        class="text-center flex gap-5 justify-center items-end text-4xl"
      >
        <i class="fa-solid fa-mobile-screen"></i>
        <i class="fa-solid fa-laptop"></i>
        <i class="fa-solid fa-tablet-screen-button"></i>
      </div>
      <h4 :style="{ color: 'var(--color2)' }" class="text-xl">
        Accede desde cualquier dispositivo
      </h4>
      <div class="flex mx-auto">
        <div :style="{background:'var(--color5)'}"  class="grid gap-4 py-8 px-4 lg:px-14 rounded-sm">
        <h6 class="text-white text-sm">Por apertura</h6>
        <h3 class="text-white text-7xl font-semibold">$49,99</h3>
        <div>
          <button
            type="button"
            :style="{ background: 'var(--color2)', hover: (background = '') }"
            class="text-white min-w-[300px] outline-none hover:bg-opacity-70 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            COMPRAR AHORA
          </button>
        </div>
      </div>
      </div>
      
    </div>
  </section>
</template>

<style lang="css">
:root {
  --color1: #cbe3e7;
  --color2: #0691b0;
  --color3: #bfb7b5;
  --color4: #e7e6e4;
  --color5: #758aa5;
  --color6: #908b92;
  --texto: #908b92;
}
</style>
