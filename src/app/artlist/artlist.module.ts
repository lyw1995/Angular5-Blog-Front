import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArtlistComponent} from './artlist.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {CustHtmlPipe} from '../pipe/html.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    RouterModule,
    MatPaginatorModule,
  ],
  declarations: [ArtlistComponent,    CustHtmlPipe]
})
export class ArtlistModule {
}
