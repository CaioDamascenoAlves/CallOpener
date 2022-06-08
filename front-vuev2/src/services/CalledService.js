/**
 * file: src/services/CalledService.js
 * data: 07/06/2022
 * description: arquivo responsável pelos métodos de requisições das Apís via HTTP
 */

import Api from './Api';

export default {
  /**
   * Método responsável por criar um novo(a) 'Called'
   * (POST): localhost:3000/api/calleds
   */
  async createNewCalled(called) {
    try {
      const response = await Api().post('/calleds', called);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async createNewClient(client) {
    try {
      const response = await Api().post('/calleds/client', client);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por listar todos os 'Calleds'
   * (GET): localhost:3000/api/calleds
   */
  async getCalleds() {
    try {
      const response = await Api().get('/calleds');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por Listar por Id um determinado 'Called'
   * (GET): localhost:3000/api/calleds/:id
   */
  async getCalledId(id) {
    try {
      const response = await Api().get(`/calleds/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por atualizar um determinado 'Called' por Id
   * (PUT): localhost:3000/api/calleds/:id
   */
  async updateCalled(called) {
    try {
      const id = called.called_id;
      const response = await Api().put(`/calleds/${id}`, called);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por excluir um determinado 'Called' por Id
   * (DELETE): localhost:3000/api/calleds/:id
   */
  async deleteCalled(id) {
    try {
      const response = await Api().delete(`/calleds/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
