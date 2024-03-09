<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Para ter acesso ao código fonte deste projeto <a href="https://github.com/richwrd/sistemacompralegal" target="_blank" rel="noopener">clique aqui</a>. 
    </p>
    <h3>Integrantes</h3>
    <ul>
      <li><a href="https://github.com/AllanOgawa" target="_blank" rel="noopener">Allan Ogawa</a></li>
      <p></p>
      <li><a href="https://github.com/richwrd" target="_blank" rel="noopener">Eduardo Richard</a></li>
      <p></p>
      <li><a href="https://github.com/devhetor" target="_blank" rel="noopener">Heitor Brandolin</a></li>
      <p></p>
      <li><a href="https://github.com/KarlaDuarte87" target="_blank" rel="noopener">Karla Duarte</a></li>
      <p></p>
      <li><a href="https://github.com/Mariaeed" target="_blank" rel="noopener">Maria Eduarda</a></li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'telaSobre',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* Google Fonts Import Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c1f7f5;
}
.nav-links{
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20px 15px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}
.nav-links li{
  list-style: none;
  margin: 0 12px;
}
.nav-links li a{
  position: relative;
  color: #333;
  font-size: 20px;
  font-weight: 500;
  padding: 6px 0;
  text-decoration: none;
}
.nav-links li a:before{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: #34efdf;
  border-radius: 12px;
  transition: all 0.4s ease;
}
.nav-links li a:hover:before{
  width: 100%;
}
.nav-links li.center a:before{
  left: 50%;
  transform: translateX(-50%);
}
.nav-links li.upward a:before{
  width: 100%;
  bottom: -5px;
  opacity: 0;
}
.nav-links li.upward a:hover:before{
  bottom: 0px;
  opacity: 1;
}
.nav-links li.forward a:before{
  width: 100%;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}
.nav-links li.forward a:hover:before{
  transform: scaleX(1);
  transform-origin: left;
}
</style>
