/**
 * file: src/components/pages/list-called/ListCalled.js
 * data: 07/06/2022
 * description: arquivo responsável pela lógica do componente
 *  ListCalledComponent.vue'
 */

 import CalledService from '../../../services/CalledService';

 export default {
   name: 'ListCalledComponent',
   data() {
	 return {
	   calleds: [],
	 };
   },
   mounted() {
	 this.listAllCalleds();
   },
   methods: {
	 async listAllCalleds() {
	   const response = await CalledService.getCalleds();
	   this.calleds = response;
	 },
 
	 async removeCalled(id) {
	   this.$swal({
		 title: 'Are you sure you want to delete the called?',
		 text: 'Watch out! This Called will be deleted!',
		 icon: 'warning',
		 showConfirmButton: true,
		 allowOutsideClick: false,
		 allowEnterKey: true,
		 allowEscapeKey: false,
		 showCancelButton: true,
		 confirmButtonColor: '#3085d6',
		 cancelButtonColor: '#d33',
		 confirmButtonText: 'Yes! Please, delete it!',
	   }).then(async (result) => {
		 if (result.value) {
		   await CalledService.deleteCalled(id);
		   this.$swal('Deleted', 'Successfully deleted', 'success');
		   this.listAllCalleds();
		 } else {
		   this.$swal('Cancelled', 'Cancel deletion', 'info');
		 }
	   });
	 },
   },
 };