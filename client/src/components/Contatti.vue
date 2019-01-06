<template>
	<div class="main">
		<section class="main-section">
		<h2>Contatti</h2><hr>
		<form action="#" method="POST">
			<input type="text" name="username" placeholder="Username">
			<input type="password" name="password" placeholder="Password">
			<input type="submit" value="Invia"  v-on:click="submitme">
		</form>
		</section>
	</div>
</template>

<script>

export default {
  name: 'Contatti',
  data() {
    return {}
  },
  methods: {
		submitme(e) {
			e.preventDefault();
		}
  }
}
</script>

<style src="../assets/css/style.scss" lang="scss"></style>