import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DocumentMasterRoutingModule } from './document-master-routing.module';
import { DocumentMasterComponent } from './document-master.component';

@NgModule({
    imports: [
        CommonModule,
        DocumentMasterRoutingModule
    ],
    declarations: [DocumentMasterComponent]
})
export class DocumentMasterModule {}