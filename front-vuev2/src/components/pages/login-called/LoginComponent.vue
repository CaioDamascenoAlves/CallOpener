<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-5">
      <section class="col-12 colsm-6 col-md-4">
        <form class="form-container">
          <h4 class="text-center">Login</h4>
          <div class="form-group my-3">
            <input 
				type="email" 
				class="form-control" 
				id="email" 
				placeholder="Email">
          </div>
          <div class="form-group my-3">
            <input 
				type="password" 
				class="form-control" 
				id="password" 
				placeholder="Senha"
			>
          </div>
          <div class="d-flex justify-content-between align-items-end">
            <div class="dropdown">
              <button 
			  	class="btn btn-sm btn-secondary dropdown-toggle" 
			  	type="button" 
			  	id="dropdownMenuButton1" 
			  	data-bs-toggle="dropdown" 
			  	aria-expanded="false">
                Cadastrar
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a 
				class="dropdown-item" 
				href="../create-user-tecnico">Técnico</a></li>
                <li><a 
				class="dropdown-item" 
				href="../create-user">Cliente</a></li>
              </ul>
            </div>          
            <a class="btn btn-primary" href="/create-called">Entrar</a>
          </div>     
        </form>
      </section>
    </div>
  </div>
</template>


<script>
	

export default{
	data (){
		return {

		};
	},

}
</script>