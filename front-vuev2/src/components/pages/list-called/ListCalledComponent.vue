<template>
  <div>
    <h3 class="text-center">List All Calleds</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">Categoria</th>
          <th class="text-center">Descrição</th>
          <th class="text-center">Data de Abertura</th>
          <th class="text-center">Estado</th>
          <th class="text-center">Email do Cliente</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="called in calleds" :key="called.called_id">
          <td>{{ called.categoria }}</td>
          <td>{{ called.descricao }}</td>
          <td>{{ called.dataAbertura }}</td>
          <td>{{ called.estado }}</td>
          <td>{{ called.fk_cliente_email }}</td>
          <td>
            <router-link
              :to="{ name: 'update', params: { id: called.called_id } }"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'fa-file-pen']" /> Edit
            </router-link>
          </td>
          <td>
            <button @click="removeCalled(called.called_id)" class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" /> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./ListCalled.js"></script>

<style src="" scoped></style>
