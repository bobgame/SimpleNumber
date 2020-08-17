import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'pre-load', pathMatch: 'full' },
  { path: 'pre-load', loadChildren: () => import('./pre-load/pre-load.module').then(m => m.PreLoadModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'sudo', loadChildren: () => import('./game/sudoku/sd-app.module').then(m => m.SdAppComponentModule) },
  { path: 'guess', loadChildren: () => import('./game/guess/gs-app.module').then(m => m.GsAppComponentModule) },
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
