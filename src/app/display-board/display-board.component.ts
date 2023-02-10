import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css']
})
export class DisplayBoardComponent implements OnInit {


  constructor() { this.loadedFile = null;}

  loadedFile;

  @Input() userCount = 0;
  @Output() getFishDataEvent = new EventEmitter();

  ngOnInit(): void {
  }

  getFishData() {
    this.getFishDataEvent.emit('get all fish data');
  }

  uploadFile(file: FileList){
    if (file === null){
      window.console.error("No file to upload");
    }
    else {
      this.parseFile(file);
    }
  }
  parseFile(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
      let file : File = files.item(0);
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        console.log(csv);
      }
    }
  }

}
