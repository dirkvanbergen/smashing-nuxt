<template>
  <div class="pb-4">
    <h1 class="text-xl font-semibold">Bestuur</h1>
    <ul>
      <li class="voorzitter my-2"><font-awesome-icon icon="crown" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Voorzitter</span> Peter Scheffers (interim) <ContactButton to="voorzitter" /></li>
      <li class="penningmeester my-2"><font-awesome-icon icon="coins" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Penningmeester</span> Peter Scheffers <ContactButton to="penningmeester" /></li>
      <li class="secretaris my-2"><font-awesome-icon icon="pen-fancy" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Secretaris</span> Jéla Peeters <ContactButton to="secretaris" /></li>
      <li class="senioren-tc my-2"><font-awesome-icon icon="users" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Seniorencommissie</span> Stefan van Galen Last <ContactButton to="senioren-tc" /></li>
      <li class="jeugd-tc my-2"><font-awesome-icon icon="baby" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Jeugdcommissie</span> Kilian Steen <ContactButton to="jeugd-tc" /></li>
      <li class="algemeen my-2"><font-awesome-icon icon="comment" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Algemene zaken</span> Sieds van der Schaaf (H2) <ContactButton to="algemeen" /></li>
    </ul>
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


