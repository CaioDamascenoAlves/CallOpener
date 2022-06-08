// @ts-nocheck
/**
 * file: src/components/pages/create-called/CreateCalled.js
 * data: 07/06/2022
 * description: arquivo responsável pela lógica do componente
 *  'CreateCalledComponent.vue'
 */

import { required } from 'vuelidate/lib/validators';
import CalledService from '../../../services/CalledService';

export default {
  name: 'CreateCalledComponent',
  data() {
    return {
    calledForm: {
        categoria: null,
        descricao: null,
        dataAbertura: null,
        estado: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    calledForm: {
		categoria: { required },
		descricao: { required },
		dataAbertura: { required },
		estado: { required },
    },
  },
  methods: {
    handleSubmitForm() {},

    async submitNewCalled() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Oops!', 'You need to include all the required fields', 'error');
          return;
        }

        await CalledService.createNewCalled(this.calledForm);
        this.$swal({
          title: 'Called added successfully!',
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
      } catch (error) {
        console.log(error);
      }
    },
  },
};
