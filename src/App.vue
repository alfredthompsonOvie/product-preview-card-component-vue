<template>
	<section
		class="max-w-7xl mx-auto min-h-screen flex items-center justify-center relative"
	>
		<section
			class="
      max-w-[370px]
      rounded-xl 
      bg-white 
      mt-[5em]
      mb-[2em]
      mx-[1em]
      overflow-hidden 
      md:grid 
      md:max-w-[650px] 
      md:grid-cols-2
      md:grid-rows-1
      md:mb-[1em]
      "
		>
			<section 
      class="h-[18em] overflow-hidden flex items-center justify-center md:h-full"
      >
				<picture class="w-full h-full  md:h-full">
					<source
						srcset="@/assets/images/image-product-desktop.jpg"
						media="(min-width: 700px)"
					/>
					<img 
          class="object-cover h-full smallS:h-auto md:h-full"
          src="@/assets/images/image-product-mobile.jpg" alt="an image of Gabrielle Essence Eau De Parfum" />
				</picture>
			</section>
			<div class="
      px-7
      py-8
      md:px-9">
				<h1
					class="uppercase tracking-widest font-medium text-dark-grayish-blue text-[.95rem] mb-[.9em]"
				>
					Perfume
				</h1>
				<h2 class="font-heading text-[2rem] font-bold text-very-dark-blue leading-[1.2] mb-5">
					Gabrielle Essence Eau De Parfum
				</h2>
				<p class="leading-[2] mt[1rem] mx-0 mb-[3.5em] text-[0.875rem]">
					A floral, solar and voluptuous interpretation composed by Olivier
					Polge, Perfumer-Creator for the House of CHANEL.
				</p>
				<section class="flex items-start gap-8 mb-[1rem]">
					<p class="text-[2.5rem] text-dark-cyan font-heading">$149.99</p>
					<small class="text-[1rem] pt-[.5em]"><s>$169.99</s></small>
				</section>
				<button
					class="w-full p-[1rem] text-[1rem] text-white bg-dark-cyan rounded-lg flex justify-center items-center gap-[1em] font-bold cursor-pointer transition-[duration] hover:bg-btn-hover"
				>
					<span class="btnImg"
						><img
							class="w-[1.15em]"
							src="@/assets/images/icon-cart.svg"
							alt="a shopping cart icon"
					/></span>
					<span class="content">Add to Cart</span>
				</button>
			</div>
		</section>
	</section>
  <section 
  class="text-xs text-center mt-1 mx-2 mb-5">
		Challenge by
		<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
			>Frontend Mentor</a
		>. Coded by
		<a 
    class="text-attribution"
    href="https://www.linkedin.com/in/alfredthompsonovie/" target="_blank"
			>Alfred Thompson Ovie</a
		>.
	</section>
</template>
