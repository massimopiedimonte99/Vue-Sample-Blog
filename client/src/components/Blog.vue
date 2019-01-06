<template>
  <div class="main">
		<section class="main-section">
			<h2>Blog</h2><hr>
			<div class="main-section-sub">
			<img src="https://picsum.photos/600/300" alt="Immagine a caso">
			<p>Sono SuperSerio e da anni mi occupo di Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nemo nostrum, molestiae id aut est labore quisquam facilis assumenda eligendi animi ad laborum temporibus cupiditate, incidunt reiciendis suscipit architecto voluptatibus. ipsum dolor sit amet, consectetur adipisicing elit.</p>
			<button>Read more</button>
		</div><hr>
		<div class="main-section-sub">
			<img src="https://picsum.photos/600/300" alt="Immagine a caso">
			<p>Sono SuperSerio e da anni mi occupo di Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, corrupti inventore saepe dolorum in quod soluta ipsam officiis reiciendis tempore impedit repudiandae cumque, vel, officia quas totam nam earum quisquam? ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel, dolor! Accusantium veritatis, totam. Ab odio odit possimus quis atque facere. Commodi omnis quos culpa quia fugit autem at animi. ipsum dolor sit amet, consectetur adipisicing elit.</p>
			<button>Read more</button>
		</div><hr>
		<div class="main-section-sub">
			<img src="https://picsum.photos/600/300" alt="Immagine a caso">
			<p>Sono SuperSerio e da anni mi occupo di Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, provident obcaecati! Ea molestiae quidem, molestias repudiandae vel omnis eligendi similique eaque praesentium recusandae quos, possimus reprehenderit eum non incidunt ipsa. ipsum dolor sit amet, consectetur adipisicing elit.</p>
			<button>Read more</button>
		</div>
		</section>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {}
  },
}
</script>

<style src="../assets/css/style.scss" lang="scss"></style>

<style lang="scss" scoped>
	.main {
		.main-section {
			img {
				width: 50%;
				border: none;
			}
			p {
				margin: 0;
			}
			.main-section-sub {
				display: inline-block;
				padding: 10px;
				margin: 10px;
				p {
					width: 100%;
					margin: 10px auto;
					padding: 20px 0;
				}
				button {
					padding: 10px;
					margin: 0 auto;
					font-size: 13pt;
					outline: none;
				}
			}
		}
	}
</style>