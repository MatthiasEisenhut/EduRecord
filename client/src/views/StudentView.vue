<template>
  <div class="q-pa-md bg-grey-9" style="height: 300px">
    <q-toolbar class="bg-white text-black shadow-2 rounded-borders">
      <q-btn flat>
        <img src="@/assets/logo.jpeg" alt="" />
      </q-btn>
      <q-space />

      <q-tabs v-model="tab" shrink>
        <q-tab name="docs" label="Documents" />
        <q-tab name="profile" label="My Profile" />
      </q-tabs>
    </q-toolbar>
    <div class="text-center">
      <h3>Welcome to EduRecord!</h3>
      <p>
        This is a simple application to record your educational documents. You can record your
        documents and upload them to the cloud.
      </p>
    </div>
  </div>
  <div>
    <h4 class="text-center">Other Schools that use our services:</h4>
    <div class="row">
      <div class="col">
        <h5>HTL Wien West</h5>
        <p>
          HTL Wien West (formerly HTL Ottakring) is a vocational secondary school (Höhere Technische
          Lehranstalt) in Vienna's 16th district Ottakring. In 1999, the then HTL Schellinggasse
          moved from Vienna's 1st district to the Ottakring tobacco factory building, which was
          converted into a school, renaming it HTL Ottakring; on January 14, 2020, the school was
          renamed HTL Wien West.
        </p>
      </div>
      <div class="col">
        <h5>HTL Donaustadt</h5>
        <p>
          The HTL Donaustadt (also "HTL Wien 22" or "htl Donaustadt") is a higher technical college
          in Vienna , which was built in 1983 on a former industrial site. It offers both higher
          five-year courses leading to the Matura as well as four-year technical college courses.
        </p>
      </div>
      <div class="col">
          <h5>TGM</h5>
          <p></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('');
</script>
