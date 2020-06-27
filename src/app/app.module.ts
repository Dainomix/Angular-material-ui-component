import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatBadgeModule } from "@angular/material/badge";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatStepperModule } from "@angular/material/stepper";

import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';
import { BadgeComponent } from './badge/badge.component';
import { ChipsComponent } from './chips/chips.component';
import { IconComponent } from './icon/icon.component';
import { ProgressspinnerComponent } from './progressspinner/progressspinner.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { CardComponent } from './card/card.component';
import { DividerandexpansionComponent } from './dividerandexpansion/dividerandexpansion.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    TogglebuttonComponent,
    BadgeComponent,
    ChipsComponent,
    IconComponent,
    ProgressspinnerComponent,
    ProgressbarComponent,
    CardComponent,
    DividerandexpansionComponent,
    ListComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
