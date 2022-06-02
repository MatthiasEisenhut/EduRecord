<template>
  <div>
    <div class="bg-grey-9 q-pa-md" style="height: 300px">
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
      <div class="text-center text-white">
        <h3>Welcome to EduRecord!</h3>
        <p class="text-body1">
          This is a simple application to record your educational documents. You can record your
          documents and upload them to the cloud.
        </p>
      </div>
    </div>
    <div>
      <h4 class="text-center">Other Schools that use our services:</h4>
      <div class="row">
        <div class="col q-pa-md">
          <h5>HTL Wien West</h5>
          <p class="text-body2">
            HTL Wien West (formerly HTL Ottakring) is a vocational secondary school (Höhere
            Technische Lehranstalt) in Vienna's 16th district Ottakring. In 1999, the then HTL
            Schellinggasse moved from Vienna's 1st district to the Ottakring tobacco factory
            building, which was converted into a school, renaming it HTL Ottakring; on January 14,
            2020, the school was renamed HTL Wien West.
          </p>
        </div>
        <div class="col q-pa-md">
          <h5>HTL Donaustadt</h5>
          <p class="text-body2">
            The HTL Donaustadt (also "HTL Wien 22" or "htl Donaustadt") is a higher technical
            college in Vienna , which was built in 1983 on a former industrial site. It offers both
            higher five-year courses leading to the Matura as well as four-year technical college
            courses.
          </p>
        </div>
        <div class="col q-pa-md">
          <h5>HTL Rennweg</h5>
          <p class="text-body2">
            The Technical college Wien 3, alternatively: Technical college Wien 3 Rennweg, Short
            Form: HTL Rennweg (until 2000: Technical college Wien IV, shortly HTBL Wien IV ) is a
            Technical college at Rennweg 89B in the third Viennese district highway . The school's
            gym, the former riding hall of the Rennweg barracks , is a listed building . The school
            currently has around 1060 students, with around 7% women.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('');
</script>
