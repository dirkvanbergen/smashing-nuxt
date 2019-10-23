<template>
  <div>
    <h1>Bestuur</h1>
    <ul>
      <li class="voorzitter">Jeroen van der Hulst <ContactButton to="voorzitter" /></li>
      <li class="penningmeester">Peter Scheffers <ContactButton to="penningmeester" /></li>
    </ul>
    <h1>Commissies</h1>
    <h1>Overige rollen binnen de vereniging</h1>
  </div>
</template>

<script>
import ContactButton from "@/components/ContactButton";
export default {
  components: {ContactButton}
};
</script>

<style lang="scss" scoped>
</style>


