<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-white text-black shadow-2 rounded-borders">
      <q-btn flat>
        <img src="@/assets/logo.jpeg" alt="" />
      </q-btn>
      <q-space />

      <q-tabs v-model="tab" shrink>
        <q-tab name="docs" label="Issue Documents" />
        <q-tab name="profile" label="My Profile" />
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('');
</script>
