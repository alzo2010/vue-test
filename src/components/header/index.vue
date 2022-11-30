<template>
  <div>
    Header
    <div class="header">
      <div>
        <a href="#"><img class="logo" src="logo.png" /></a>
      </div>
      <div>
        <a href="inmenu.com">inmenu.com</a> 
      </div>
      <div>
        <form>
          <input type="text" placeholder="Поиск заведений и блюд" />
          <button type="submit"></button>
        </form>
      </div>
      <div>
        <select>
          <option>Язык 1</option>
          <option>Язык 2</option>
          <option>Язык 3</option>
        </select>
      </div>
      <div>
        <select>
          <option>город 1</option>
          <option>город 2</option>
          <option>город 3</option>
        </select>
      </div>
      <div>
        <a href="#"><img class="profil" src="profil.png" /></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "",
};
</script>

<script setup lang="ts">

</script>

<style lang="scss">
div {
  margin: 20px;
}
select {
  width: 112px;
  height: 42px;
  border-radius: 45%;
  border: 2px solid orange;
}
input {
  width: 617px;
  height: 42px;
  border-radius: 20%;
  background-color: rgb(206, 204, 204);
}
.header {
  width: 1400px;
  height: 70px;
  display: flex;
  justify-content: flex-start;
}
.profil {
  width: 42px;
  height: 42px;
  margin: 14px 0 14px 0;
  border-radius: 50%;
}
.logo {
  width: 28px;
  height: 28px;
}
</style>
