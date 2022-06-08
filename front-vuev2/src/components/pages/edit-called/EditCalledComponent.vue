<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Update Called</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateFormCalled()">

          <!--INÍCIO DO BLOCO: Called Name-->
          <div class="form-group">
            <label class="font-weight-bold">Called Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              v-model="calledForm.name"
            >
          </div>
          <!--FIM DO BLOCO: Called Name-->

          <!--INÍCIO DO BLOCO: Job Role-->
          <div class="form-group">
            <label class="font-weight-bold">Job Role</label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              class="form-control"
              v-model="calledForm.job_role"
            >
          </div>
          <!--FIM DO BLOCO: Job Role-->

          <!--INÍCIO DO BLOCO: Salary-->
          <div class="form-group">
            <label class="font-weight-bold">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              class="form-control"
              v-model="calledForm.salary"
            >
          </div>
          <!--FIM DO BLOCO: Job Role-->

          <!--INÍCIO DO BLOCO: Birth-->
          <div class="form-group">
            <label class="font-weight-bold">Birth</label>
            <input
              type="date"
              id="birth"
              name="birth"
              class="form-control"
              v-model="calledForm.birth"
            >
          </div>
          <!--FIM DO BLOCO: Birth-->

          <!--INÍCIO DO BLOCO: Called Registration-->
          <div class="form-group">
            <label class="font-weight-bold">Called Registration</label>
            <input
              type="text"
              id="called_registration"
              name="called_registration"
              class="form-control"
              v-model="calledForm.called_registration"
            >
          </div>
          <!--FIM DO BLOCO: Birth-->
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              <font-awesome-icon :icon="['fa-solid', 'fa-file-pen']"/> Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./EditCalled.js"></script>

<style src="" scoped></style>
