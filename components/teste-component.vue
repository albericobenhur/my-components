<template>
  <div>
    <v-card color="blue" class="mx-5 my-5 px-5 py-5">
      <v-dialog v-model="dialog" width="auto">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">clique </v-btn>
        </template>

        <v-card>
          <v-card-text> ^_^ </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false"
              >Close Dialog</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>
<script setup>
const dialog = ref(false);
</script>
