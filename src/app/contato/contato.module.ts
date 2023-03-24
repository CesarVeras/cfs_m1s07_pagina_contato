import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';

@NgModule({
  imports: [CommonModule, ContatoRoutingModule, FormsModule],
  declarations: [ContatoComponent],
})
export class ContatoModule {}
