import { Component } from '@angular/core';
import { GifService } from './../../../gifs/services/gif.service';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor( private gifService: GifService ) {}

  get tags(): string[] {
    return this.gifService.tagsHistory;
  }

  public searchTag( tag: string ) {
    this.gifService.searchTag( tag );
  }


}
