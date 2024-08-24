import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { AvatarDatabasePreviewComponent } from './components/avatar-database-preview/avatar-database-preview.component';
import { AvatarPreviewComponent } from './components/avatar-preview/avatar-preview.component';
import { AvatarSceneComponent } from './components/avatar-scene/avatar-scene.component';
import { AvatarBuilderService } from './services/avatar-builder.service';
import { AvatarDatabaseService } from './services/avatar-database.service ';
import { AvatarFaceConfigService } from './services/avatar-face-config.service';
import { AvatarRendererService } from './services/avatar-renderer.service';

@NgModule({
  declarations: [
    AvatarSceneComponent,
    AvatarDatabasePreviewComponent,
    AvatarPreviewComponent,
  ],
  imports: [
    MatTabsModule,
    MatRippleModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    AvatarSceneComponent,
    AvatarDatabasePreviewComponent,
    AvatarPreviewComponent,
  ],
  providers: [
    AvatarBuilderService,
    AvatarDatabaseService,
    AvatarRendererService,
    AvatarFaceConfigService,
  ]
})
export class AvatarModule { }
