import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'listagem-produto',
    loadChildren: () =>
      import('./listagem-produto/listagem-produto.module').then(
        (m) => m.ListagemProdutoModule
      ),
  },
	{
		path: 'contato',
		loadChildren: () =>
			import('./contato/contato.module').then((m) => m.ContatoModule),	
	},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
