<template>
  <section 
  class="
  max-w-7xl 
  mx-auto 
  min-h-screen 
  flex 
  items-center 
  justify-center
  relative
  ">
			<section 
      class="
      max-w-[370px]
      rounded-xl
      bg-white
      overflow-hidden
      sm:max-w-[650px] grid grid-cols-[repeat(2, 1fr)] grid-rows-[auto]
      ">
				<div class="branding">
          <picture>
            <source srcset="@/assets/images/image-product-mobile.jpg"  media="(min-width: 600px)">
            <img src="@/assets/images/image-product-desktop.jpg" alt="">
          </picture>
        </div>
				<div 
        class="
        p-[2em 1.8em 2em]
        sm:p-[2em 2.2em]
        ">
        <!-- .product__type{
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: var(--fw-md);
  color: var(--DarkGrayishBlue);
  font-size: .95rem;
  margin-bottom: .8em;
} -->
					<h1 
          class="
          uppercase
          tracking-widest
          font-medium
          text-dark-grayish-blue
          text-[.95rem]
          mb-[.8em]
          ">Perfume</h1>
					<!-- .title{
  font-family: var(--ff-title);
  font-size: 2rem;
  color: var(--VeryDarkBlue);
  font-weight: var(--fw-bold);
} -->
          <h2 
          class="
          font-heading
          text-[2rem]
          font-bold
          text-very-dark-blue
          ">Gabrielle Essence Eau De Parfum</h2>
          <!-- .text {
  line-height: 1.8;
  margin: 1em 0 3.5em;
  font-size: var(--fs-paragraph);
} -->
					<p class="text">
						A floral, solar and voluptuous interpretation composed by Olivier
						Polge, Perfumer-Creator for the House of CHANEL.
					</p>
					<div class="product__price">
						<p class="newPrice">$149.99</p>
						<small class="oldPrice"><s>$169.99</s></small>
					</div>
					<button class="addToCartBtn">
						<span class="btnImg"
							><img src="@/assets/images/icon-cart.svg" alt="a shopping cart icon"
						/></span>
						<span class="content">Add to Cart</span>
					</button>
				</div>
			</section>
		</section>

		<div class="attribution">
			Challenge by
			<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
				>Frontend Mentor</a
			>. Coded by <a href="https://www.linkedin.com/in/alfredthompsonovie/" target="_blank">Alfred Thompson Ovie</a>.
		</div>
</template>

<script setup>
</script>

<style scoped>

</style>