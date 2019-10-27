<template>
  <div class="pb-4">
    <h1 class="text-xl font-semibold">Bestuur</h1>
    <ul>
      <li class="voorzitter my-2"><font-awesome-icon icon="crown" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Voorzitter</span> Jeroen van der Hulst (H2) <ContactButton to="voorzitter" /></li>
      <li class="penningmeester my-2"><font-awesome-icon icon="coins" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Penningmeester</span> Peter Scheffers (H3) <ContactButton to="penningmeester" /></li>
      <li class="secretaris my-2"><font-awesome-icon icon="pen-fancy" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Secretaris</span> Ruben Peters (H1) &amp; Erik de Snoo (H1) <ContactButton to="secretaris" /></li>
      <li class="senioren-tc my-2"><font-awesome-icon icon="users" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Seniorencommissie</span> Kirsten van de Pol (D1) <ContactButton to="senioren-tc" /></li>
      <li class="jeugd-tc my-2"><font-awesome-icon icon="baby" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Jeugdcommissie</span> Kilian Steen <ContactButton to="jeugd-tc" /></li>
      <li class="algemeen my-2"><font-awesome-icon icon="comment" class="text-smashing"></font-awesome-icon> <span class="text-smashing">Algemene zaken</span> Sieds van der Schaaf (H2) <ContactButton to="algemeen" /></li>
    </ul>
    <h1 class="text-xl font-semibold mt-4">Commissies</h1>
    <h2 class="font-bold mt-2">Technische commissie senioren <ContactButton to="senioren-tc" /></h2>
    <ul>
      <li>Kirsten van de Pol (D1)</li>
      <li>Katja Ketelaar (D1)</li>
      <li>Kadia Bijlmakers (D2)</li>
      <li>Mark den Boer (H1)</li>
      <li>Georgi Kokotanekov (H2)</li>
      <li>Roel Zantinge (H2)</li>
    </ul>
    <h2 class="font-bold mt-2">Technische commissie jeugd <ContactButton to="jeugd-tc" /></h2>
    <ul>
      <li>Kilian Steen</li>
      <li>Sieds van der Schaaf(H2)</li>
      <li>Arjan Verus</li>
      <li>Peter Boonstra</li>
      <li>Jolanda van Dam</li>
      <li>Sander Hartoch</li>
      <li>Sylvia Bonnema</li>
      <li>Wai Fai Tsang</li>
      <li>Boris Overmars</li>
      <li>Johan Klijn</li>
      <li>Sander van Weers</li>
    </ul> 
    <h1 class="text-xl font-bold mt-4">Overige rollen binnen de vereniging</h1>
    <ul>
      <li><span class="text-smashing">Leden Administratie</span> Peter Scheffers (H3) </li>
      <li><span class="text-smashing">Scheidsrechtersindeling</span> Peter Caspers (H3)</li>
      <li><span class="text-smashing">Scheidsrechtersopleidingen</span> Cees van der Hulst (H3)</li>
      <li><span class="text-smashing">Zaaldienst Indeling</span> Markus Kruyswijk (H3), Peter Kranendonk (H3)</li>
      <li><span class="text-smashing">Trainingsschema Indeling</span> Jela Peeters (D2)</li>
      <li><span class="text-smashing">Tenue Commissie</span> Edith Gijrath (D3) </li>
      <li><span class="text-smashing">Materialen Commissie</span> Jasper Zilver (H1), Thierry Dekker (H1)</li>
      <li><span class="text-smashing">Buurt Volleybal Commissie</span> Iris Amse</li>
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


