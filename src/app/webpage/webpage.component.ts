import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { WebconfService } from '../webconf.service';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.scss']
})
export class WebpageComponent implements OnInit, OnChanges {
  presets = [];
  divs = null;
  @Input() selectedPreset;

  @Input() editorMode;

  fakeArray=[];
  column = 1; row;
  

  constructor(private wcs:WebconfService) {
    this.presets = wcs.Presets;
    this.fakeArray = Array(400).fill(0).map((x,i)=>i);
    console.log(this.fakeArray);
  }

  ngOnChanges(changes) {
    console.log(changes);
    if (this.selectedPreset!==undefined) {
      this.divs = this.presets[this.selectedPreset].divs;
    }
    
  }

  ngOnInit() {}

  getPresetStyle() {
    if (this.selectedPreset!==undefined) {
      return this.presets[this.selectedPreset].style;
    }
  }

  selectDiv(event) {
    console.log(event.target);
  }

  setGrid() {
    return this.wcs.Grid;
  }

}
