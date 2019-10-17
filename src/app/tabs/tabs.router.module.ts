import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/lista-home/lista-home.module#ListaHomePageModule'
          }
        ]
      },

      {
        path: 'produtos',
        children: [
          {
            path: '',
            loadChildren: '../produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule'
          }
        ]
      },

      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: '../usuarios/perfil/perfil.module#PerfilPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      } 
    ]
  },

  {
    path: 'pedido',
    children: [
      {
        path: 'carrinho/novo-item/:key',
        loadChildren: '../pedidos/form-item-pedido/form-item-pedido.module#FormItemPedidoPageModule'
      },

      {
        path: 'carrinho',
        loadChildren: '../pedidos/lista-item-pedido/lista-item-pedido.module#ListaItemPedidoPageModule'
      }
    ]
  },
  
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  } 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
