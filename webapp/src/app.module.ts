/*
Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CheckerStatus } from './checker-status.component';
import { ConvaiChecker } from './convai-checker.component';
import { AnalyzeApiService } from './analyze-api.service';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule
  ],
  declarations: [
    CheckerStatus,
    ConvaiChecker,
  ],
  bootstrap:    [ ConvaiChecker ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, AnalyzeApiService],
  // Include components here that can be dynamically rendered.
  entryComponents: [],
})
export class AppModule { }