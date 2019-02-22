import { Component, OnInit } from '@angular/core';
import { WebconfService } from '../webconf.service';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  
  consoleOptions = ['Presets','Components', 'Articles']
  consoleCurrent = 0;
  selectedPreset;
  presets = [];

  listView = true;
  detailView = false;

  detailModes = ['default', 'rename', 'editor', 'article', 'delete'];
  detailMode = this.detailModes[0];

  editorMode = false;

  constructor(private wcs: WebconfService) {
    this.presets = this.wcs.Presets;
  }

  ngOnInit() {
    console.log(this.presets);
  }

  selectItem(i) {
    this.selectedPreset = i;
    this.listView = false;
    this.detailView = true;
  }
  toListView() {
    this.selectedPreset = undefined;
    this.listView = true;
    this.detailView = false;
  }

  consoleMode() {
    this.listView=true; this.detailView=false;
    (this.consoleCurrent===2) 
      ? this.consoleCurrent=0
      : this.consoleCurrent++;
  }

  newItem() {
    this.presets.push({name:'newPreset'});
  }

  toggleRename() {
    (this.detailMode !== this.detailModes[1]) ? this.detailMode = this.detailModes[1] : this.detailMode = this.detailModes[0];
  }
  toggleEditor() {
    (this.detailMode !== this.detailModes[2]) ? this.detailMode = this.detailModes[2] : this.detailMode = this.detailModes[0];
    this.editorMode = !this.editorMode;
  }
  toggleArticle() {
    (this.detailMode !== this.detailModes[3]) ? this.detailMode = this.detailModes[3] : this.detailMode = this.detailModes[0];
  }
  toggleDelete() {
    (this.detailMode !== this.detailModes[4]) ? this.detailMode = this.detailModes[4] : this.detailMode = this.detailModes[0];
  }

}
