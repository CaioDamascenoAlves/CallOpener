<template>
    <form class="form-container" v-on:submit.prevent="handleSubmitFormSignIn()">
        <h4 class="text-center mb-3">Cadastro de usuário</h4>
        <div class="row mb-3">
            <label 
				class="col-sm-2 col-form-label">Nome
			</label>
            <div class="col-sm-10">
            <input 
				type="text" 
				class="form-control" 
				id="nome"
				name="nome"
				placeholder="Insira seu Nome"
				v-model="userSignIn.nome"
              :class="{
                'is-invalid': isSubmitted && $v.userSignIn.nome.$error,
              }"
			>
			<div
              v-if="isSubmitted && !$v.userSignIn.nome.required"
              class="invalid-feedback"
            >
              'Nome' field is required!
            </div>
            </div>
        </div>
        <div class="row mb-3">
            <label  
				class="col-sm-2 col-form-label">Email
			</label>
            <div class="col-sm-10">
            <input 
				type="email" 
				class="form-control" 
				id="email"
				name="email"
				placeholder="Insira seu Email"
				v-model="userSignIn.email"
              :class="{
                'is-invalid': isSubmitted && $v.userSignIn.email.$error,
              }"
			>
			<div
              v-if="isSubmitted && !$v.userSignIn.email.required"
              class="invalid-feedback"
            >
              'Email' field is required!
            </div>
            </div>
        </div>
		<div class="row mb-3">
            <label 
				class="col-sm-2 col-form-label">Função
			</label>
            <div class="col-sm-10">
            <input 
				type="text" 
				class="form-control" 
				id="funcao"
				name="funcao"
				placeholder="Insira sua Funcao"
				v-model="userSignIn.funcao"
              :class="{
                'is-invalid': isSubmitted && $v.userSignIn.funcao.$error,
              }"
			>
			<div
              v-if="isSubmitted && !$v.userSignIn.funcao.required"
              class="invalid-feedback"
            >
              'Função' field is required!
            </div>
            </div>
        </div>
        <div class="row mb-3">
            <label 
			class="col-sm-2 col-form-label">Senha
			</label>
            <div class="col-sm-5">
            <input 
				type="password" 
				class="form-control" 
				id="senha"
				name="senha"
				placeholder="Insira sua Senha"
				v-model="userSignIn.senha"
              :class="{
                'is-invalid': isSubmitted && $v.userSignIn.senha.$error,
              }"
			>
			<div
              v-if="isSubmitted && !$v.userSignIn.senha.required"
              class="invalid-feedback"
            >
              'Senha' field is required!
            </div>
            </div>
        </div>
        <div class="d-flex justify-content-end">
           <button @click="submitNewTecnico" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']" /> Sign In
            </button>
        </div>
    </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import CalledService from '../../../services/CalledService';

export default{
	name: 'CreateUserComponent',
	data () {
		return {
		userSignIn: {
        	nome: null,
        	email: null,
        	senha: null,
        	funcao: null,
			
      },
	  		isSubmitted: false,
		};
	},
	 	validations: {
    	userSignIn: {
			nome: { required },
			email: { required },
			senha: { required },
			funcao: { required },
    },
  },
		methods: {
			handleSubmitFormSignIn() {},

			async submitNewTecnico() {
    		  try {
    		    this.isSubmitted = true;
		
    		    this.$v.$touch();
    		    if (this.$v.$invalid) {
    		      this.$swal('Oops!', 'You need to include all the required fields', 'error');
    		      return;
    		    }
		
    		    await CalledService.createNewTecnico(this.userSignIn);
    		    this.$swal({
    		      title: 'Client added successfully!',
    		      icon: 'success',
    		      showConfirmButton: true,
    		      allowOutsideClick: false,
    		      allowEnterKey: true,
    		      allowEscapeKey: false,
    		    }).then((data) => {
    		      this.$router.push({
    		        name: 'home',
    		      });
    		    });
    		  } catch (error) {
    		    console.log(error);
    		  }
    },
		},
}
</script>