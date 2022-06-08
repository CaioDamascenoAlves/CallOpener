<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Called</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <!-- INÍCIO BLOCO: Categoria -->
          <div class="form-group">
            <label class="font-weight-bold">Categoria</label>
            <input
              type="text"
              id="categoria"
              name="categoria"
              class="form-control"
              placeholder="Type Your categoria"
              v-model="calledForm.categoria"
              :class="{
                'is-invalid': isSubmitted && $v.calledForm.categoria.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.calledForm.categoria.required"
              class="invalid-feedback"
            >
              'Categoria' field is required!
            </div>
          </div>
          <!-- FIM BLOCO: Categiria -->

          <!-- INÍCIO BLOCO: descricao -->
          <div class="form-group">
            <label class="font-weight-bold">Descricao</label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              class="form-control"
              placeholder="Type Your Descricao"
              v-model="calledForm.descricao"
              :class="{
                'is-invalid': isSubmitted && $v.calledForm.descricao.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.calledForm.descricao.required"
              class="invalid-feedback"
            >
              'Descricao' field is required!
            </div>
          </div>
          <!-- FIM BLOCO: Descricao -->

          <!-- INÍCIO BLOCO: DataAbertura -->
          <div class="form-group">
            <label class="font-weight-bold">Data Abertura</label>
            <input
              type="date"
              id="dataAbertura"
              name="dataAbertura"
              class="form-control"
              placeholder="YYYY-MM-DD"
              v-model="calledForm.dataAbertura"
              :class="{
                'is-invalid': isSubmitted && $v.calledForm.dataAbertura.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.calledForm.dataAbertura.required"
              class="invalid-feedback"
            >
              'Data Abertura' field is required!
            </div>
          </div>
          <!-- FIM BLOCO: Data Abertura -->

          <!-- INÍCIO BLOCO: Estado -->
          <div class="form-group">
            <label class="font-weight-bold">Estado</label>
            <input
              type="text"
              id="estado"
              name="estado"
              class="form-control"
              placeholder="Insira o estado"
              v-model="calledForm.estado"
              :class="{
                'is-invalid': isSubmitted && $v.calledForm.estado.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.calledForm.estado.required"
              class="invalid-feedback"
            >
              'Estado' field is required!
            </div>
          </div>
          <!-- FIM BLOCO: Estado -->
          <div class="form-group">
            <button @click="submitNewCalled" class="btn btn-primary my-3">
              <font-awesome-icon :icon="['fa-solid', 'fa-file-circle-plus']" /> CallOpener
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./CreateCalled.js"></script>

<style src="" scoped></style>
