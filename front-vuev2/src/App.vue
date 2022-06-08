<template>
  <div class="conteiner-flex">
	  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
			<a class="navbar-brand order-md-last">CallOpener</a>
		  	<button class="navbar-toggler" 
			  type="button" data-bs-toggle="collapse">
      		<span class="navbar-toggler-icon"></span>
    		</button>
			<div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
			<ul class="navbar-nav">
				<li class="nav-item">
						<router-link 
						class="nav-link" 
						to="/create-called">Create New Called
						</router-link>
					</li>
					<li class="nav-item">
						<router-link 
						class="nav-link" 
						to="/list-called">List All Called
						</router-link>
					</li>
				<li class="nav-item dropdown">
					<a 
					class="nav-link dropdown-toggle" 
					href="#" id="navbarDarkDropdownMenuLink" 
					role="button" data-bs-toggle="dropdown" 
					>
						New User
					</a>
					<ul 
					class="dropdown-menu dropdown-menu-dark" 
					>
						<li><a 
						class="dropdown-item"
						 href="#">Técnico</a></li>
						<li><a 
						class="dropdown-item" 
						href="#">Cliente</a></li>
					</ul>
				</li>
			</ul>
			</div>
				<ul class="navbar-nav me-auto">
					
				</ul>
	  </nav>
	  <div class="container mt-5">
		  <router-view></router-view>
	  </div>
  </div>
</template>
