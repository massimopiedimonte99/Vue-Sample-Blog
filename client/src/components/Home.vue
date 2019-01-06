<template>
  <div class="main">
    <h2>Home</h2><hr>
    <section class="main-section">
      <img src="https://i.ibb.co/H7bjH0N/49825987-332733697570489-8615420854920019968-n.jpg" alt="SuperSerio" class="main-register pic" />
      <h3>Lorem Ipsum come stile di vita</h3>
      <p>Sono SuperSerio e da anni mi occupo di lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia accusamus, consectetur sequi, excepturi aspernatur corporis eum odit. Possimus, vitae impedit distinctio temporibus, amet, aperiam, in dolorum iure consequatur tempora voluptatibus.</p>
    </section><hr>
    <section class="main-register">
      <h3>Registrati ora!</h3>
      <form action="http://127.0.0.1:3000" method="POST" id="superserio-register">
        <input type="text" name="username" id="superserio-register-username" placeholder="Username">
        <input type="password" name="password" id="superserio-register-password" placeholder="Password">
        <input type="submit" value="Sign Up">
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style src="../assets/css/style.scss" lang="scss"></style>
