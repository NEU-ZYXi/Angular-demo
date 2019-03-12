import {Component, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {}

  onSave() {
    this.dataStorageService.storeData()
      .subscribe(
        (res: Response) => {
          console.log(res);
        }
      );
  }

  onFetch() {
    this.dataStorageService.getData();
  }
}
