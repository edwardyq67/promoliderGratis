<script setup>
</script>

<template>
  <main class="bg-gray-900">
    <section class="mb-[5vh] lg:mb-[8vh]">
      <div
        class="relative mb-10 h-[80vh] lg:h-[50vh] xl:h-[70vh] 2xl:h-[80vh]"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-image: url('https://theressa.net/images/services/5b55f050bbf55edificio-coorp.jpg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;

          color: #fff;
        "
      >
        <div class="w-full h-full" style="background: rgba(0, 0, 0, 0.5)">
          <div class="container mx-auto px-4 lg:px-0">
            <div class="grid grid-cols-3">
              <div
                class="col-span-3 lg:col-span-2 grid grid-cols-1 gap-4 px-2 py-16"
              >
                <div class="grid">
                  <img
                    class="lg:max-w-[20em] w-[10em] md:w-[15em]"
                    src="https://nft.promolider.org/img/logo-promolider.png"
                    alt=""
                  />
                </div>
                <div class=" h-[60vh] flex items-center lg:items-start">
                  <div class="grid text-center lg:text-end">
                    <h1 class="font-bold text-5xl text-plantilla1_gratis-50">
                      PROMOLIDER
                    </h1>
                    <h2
                      class="text-plantilla1_gratis-50 font-semibold text-3xl mb-4"
                    >
                      DISPONIBLE
                    </h2>
                    <p class="text-plantilla1_gratis-50 mb-5 font-light">
                      Haz que tus alumnos tengan la necesidad de estar
                      conectados a tus entrenamientos, que estén dispuestos a
                      referirte con alto nivel de satisfacción y que tus
                      ingresos suban a una escala exponencial.
                    </p>
                    <div class="flex justify-center">
                      <button
                        type="button"
                        class="min-w-[20em] focus:outline-none text-white bg-plantilla1_gratis-800 hover:bg-plantilla1_gratis-700 transition-all duration-200 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      >
                        Comenzar
                      </button>
                    </div>
                  </div>
                </div>

                <div class="absolute inset-x-0 bottom-0 h-16">
                  <div
                    class="container mx-auto hidden lg:flex gap-4 justify-center"
                  >
                    <div
                      class="grid text-center min-w-[20vw] items-center min-h-[10vh] bg-plantilla1_gratis-900 rounded"
                    >
                      <div class="grid">
                        <h3 class="text-[1.3em] text-plantilla1_gratis-200">
                          Clientes Satisfecho
                        </h3>
                        <span class="text-[1.25em]">+400</span>
                      </div>
                    </div>
                    <div
                      class="grid text-center min-w-[20vw] items-center min-h-[10vh] bg-plantilla1_gratis-900 rounded"
                    >
                      <div class="grid">
                        <h3 class="text-[1.3em] text-plantilla1_gratis-200">
                          Contactanos
                        </h3>
                        <span class="text-[1.25em]"> 01-1234567 </span>
                      </div>
                    </div>
                    <div
                      class="grid text-center min-w-[20vw] items-center min-h-[10vh] bg-plantilla1_gratis-900 rounded"
                    >
                      <div class="grid">
                        <h3 class="text-[1.3em] text-plantilla1_gratis-200">
                          Ubicanos
                        </h3>
                        <span class="text-[1.25em]"
                          >mz-f lote cerca por ahi</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-2 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto grid lg:hidden gap-4 justify-center">
        <div
          class="grid text-center w-[60vw] md:w-[50vw] items-center min-h-[10vh] bg-plantilla1_gratis-900 rounded"
        >
          <div class="grid">
            <h3 class="text-[1.3em] text-plantilla1_gratis-200">
              Clientes Satisfecho
            </h3>
            <span class="text-[1.25em] text-white">+400</span>
          </div>
        </div>
        <div
          class="grid text-center min-w-[20vw] items-center min-h-[10vh] bg-plantilla1_gratis-900 rounded"
        >
          <div class="grid">
            <h3 class="text-[1.3em] text-plantilla1_gratis-200">Contactanos</h3>
            <span class="text-[1.25em] text-white"> 01-1234567 </span>
          </div>
        </div>
        <div
          class="grid text-center min-w-[20vw] items-center min-h-[10vh] bg-plantilla1_gratis-900 rounded"
        >
          <div class="grid">
            <h3 class="text-[1.3em] text-plantilla1_gratis-200">Ubicanos</h3>
            <span class="text-[1.25em] text-white"
              >mz-f lote cerca por ahi</span
            >
          </div>
        </div>
      </div>
    </section>
    <section class="mb-[8vh] px-2 container mx-auto text-center lg:text-start">
      <h2
        class="pb-2 relative text-plantilla1_gratis-500 font-semibold text-4xl mb-4 border-b-[.1em] lg:border-transparent border-plantilla1_gratis-300"
      >
        Sobre el Contenido
        <span
          class="absolute bottom-0 left-0 h-[.3vh] w-[10vw] bg-transparent lg:bg-plantilla1_gratis-300"
        ></span>
      </h2>
      <p class="mb-5 font-light sm:text-xl text-gray-400">
        Conviértete en nuestro socio fundador del proyecto educativo más
        disruptivo del momento, obtén dividendos residuales por décadas y se
        dueño de tu propio negocio.
      </p>
      <div class="plyr__video-embed" id="player">
        <iframe
          class="rounded mx-auto min-w-[80vw] md:min-w-[60vw] min-h-[30vh] md:min-h-[50vh]"
          src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
          allowfullscreen
          allowtransparency
          allow="autoplay"
          frameborder="0"
        ></iframe>
      </div>
    </section>
    <section class="grid grid-cols-2 bg-white pt-10 lg:py-0">
      <div
        class="col-span-2 grid lg:text-start text-center justify-center items-center lg:col-span-1 px-2 lg:px-20"
      >
        <div class="grid px-2">
          <h2
            class="pb-2 relative text-plantilla1_gratis-500 font-semibold text-4xl mb-4 border-b-[.1em] lg:border-transparent border-plantilla1_gratis-300"
          >
            Conocenos quienes somos
            <span
              class="absolute bottom-0 left-0 h-[.3vh] w-[10vw] bg-white lg:bg-plantilla1_gratis-300"
            ></span>
          </h2>
          <p class="mb-5 sm:text-xl font-light">
            Somos una plataforma educativa gamificada con inteligencia
            artificial y un plan de beneficios económicas para productores,
            estudiantes y distribuidores.
          </p>
        </div>
      </div>
      <div class="col-span-2 lg:col-span-1 flex items-center">
        <img
          src="https://marketing4ecommerce.net/wp-content/uploads/2017/02/salarios-en-marketing-informe.jpg"
          alt=""
        />
      </div>
    </section>
    <section class="bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Diseñado para equipos empresariales como el suyo
          </h2>
          <p class="mb-5 font-light sm:text-xl text-gray-400">
            Aquí en Promolider nos centramos en mercados donde la tecnología, la
            innovación y el capital pueden generar valor a largo plazo e
            impulsar el crecimiento económico.
          </p>
        </div>
        <div
          class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"
        >
          <!-- Pricing Card -->
          <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          >
            <h3 class="mb-4 text-2xl font-semibold">Inicio</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              La mejor opción para uso personal y para su próximo proyecto.
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$29</span>
              <span class="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Configuración personalizada</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Sin instalación ni tarifas ocultas</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Tamaño del equipo:
                  <span class="font-semibold"> 1 desarrollador</span></span
                >
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Soporte premium:
                  <span class="font-semibold">6 meses</span></span
                >
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Actualizaciones gratuitas:
                  <span class="font-semibold">6 meses</span></span
                >
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
              >Empezar</a
            >
          </div>
          <!-- Pricing Card -->
          <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          >
            <h3 class="mb-4 text-2xl font-semibold">Compañía</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Relevante para múltiples usuarios, soporte extendido y premium.
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$99</span>
              <span class="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Configuración personalizada</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Sin instalación ni tarifas ocultas</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Tamaño del equipo:
                  <span class="font-semibold">10 desarrolladores</span></span
                >
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Soporte premium:
                  <span class="font-semibold">24 meses</span></span
                >
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Actualizaciones gratuitas:
                  <span class="font-semibold">24 meses</span></span
                >
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
              >Empezar</a
            >
          </div>
          <!-- Pricing Card -->
          <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          >
            <h3 class="mb-4 text-2xl font-semibold">Empresa</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Lo mejor para usos a gran escala y derechos de redistribución
              ampliados.
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">$499</span>
              <span class="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Configuración personalizada</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Sin instalación ni tarifas ocultas</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Tamaño del equipo:
                  <span class="font-semibold"
                    >más de 100 desarrolladores</span
                  ></span
                >
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Soporte premium:
                  <span class="font-semibold">36 meses</span></span
                >
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  >Actualizaciones gratuitas::
                  <span class="font-semibold">36 meses</span></span
                >
              </li>
            </ul>
            <a
              href="#"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
              >Empezar</a
            >
          </div>
        </div>
      </div>
    </section>
    <section>
      
    </section>
  </main>
</template>
