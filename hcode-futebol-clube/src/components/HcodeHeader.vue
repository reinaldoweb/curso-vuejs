<template>
  <header>
  
  <div class="container">
    <nav class="navbar navbar-expand">
      <a href="" class="link navbar-brand mr-auto">
      <img src="./../assets/logo.svg" alt="Hcode Treinamentos" class="img d-inline-block align-top" id="logo">
      Futebol Clube
      </a>
      <div class="links mr-2">
      <a href="#" class="btn mr-r">Inicio</a>
      <a href="#" class="btn mr-r">Times</a>
      <a href="#" class="btn mr-r">Classificações</a>

      <select name="championship" id="championship" class="form-control" @change="$emit('select-championship', $event.target.value)">
      
        <option value="">Selecione um campeonato</option>
        <option value="Capeonato Brasileiro" selected>Campeonato Brasileiro</option>
        <option value="Campeonato Espanhol">Campeonato Espanhol</option>
        <option value="Campeonato Italiano">Campeonato Italiano</option>
        <option value="Campeonato Inglês">Campeonato Inglês</option>
      </select>
      </div>
    </nav>
  </div>

  </header>
</template>

<script>

export default {

}

</script>

<style scoped>

header{
  background-color: #000;

}
#logo{
  width: 150px;
  height: 100%;
}
.links{
  display: inline-flex;
}
.link{
  color: #D48E23;
  font-size: 30px;
  font-family: 'Rajdhani';
}
.links a{
  color: #fff;
  outline: none !important;
  box-shadow: none  !important;
}

</style>