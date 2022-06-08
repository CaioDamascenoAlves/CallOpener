/**
 * file: src/components/pages/edit-called/EditCalled.js
 * data: 07/06/2022
 * description: arquivo responsável pela lógica do componente
 *  'EditCalledComponent.vue'
 */

 import CalledService from '../../../services/CalledService';

 
 export default {
   name: 'EditCalledComponent',
   data() {
	 return {
	   calledForm: {
	   },
	 };
   },
 
   mounted() {
	 this.getCalledById();
   },
 
   methods: {
	 async getCalledById() {
	   const { id } = this.$route.params;
	   const response = await CalledService.getCalledId(id);
 
	   this.calledForm = { ...response };
	 },
 
	 async updateCalled() {
	   // Chamada do service passando as propriedades por meio do 'calledForm' (funciona)
	   await CalledService.updateCalled(this.calledForm);
	   this.$swal({
		 title: 'Called updated successfully!',
		 icon: 'success',
		 showConfirmButton: true,
		 allowOutsideClick: false,
		 allowEnterKey: true,
		 allowEscapeKey: false,
	   }).then((data) => {
		 this.$router.push({
		   name: 'list',
		 });
	   });
	 },
   },
 };
