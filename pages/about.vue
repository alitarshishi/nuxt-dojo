<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, blanditiis cupiditate, dolorum ea earum error eum excepturi harum itaque iusto libero maiores nostrum perferendis, quasi qui repellendus rerum sit tenetur?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, blanditiis cupiditate, dolorum ea earum error eum excepturi harum itaque iusto libero maiores nostrum perferendis, quasi qui repellendus rerum sit tenetur?</p>
    <div>{{data}}</div>
  </div>
</template>

<script setup>
  import {useFetch} from "nuxt/app";

  const  {data} = await useFetch('/api/currency/LBP')
</script>

<style scoped>
h2{
  margin-bottom: 20px;
  font-size: 36px;

}
p{
  margin: 20px 0;
}
</style>