import { Component, OnInit } from '@angular/core';
import { UploadFileService } from './upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  files: Set<File>; // não haverá arquivos duplicados com set

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  onChange(event){
    const selectedFiles = <FileList>event.srcElement.files;
    
    let customFileLabel = document.getElementById('customFileLabel');
    
    // pegando o nome do primeiro elemento do array de arquivos
    //customFileLabel.innerHTML = selectedFiles[0].name;

    const filesNames = [];
    this.files = new Set();

    for(let i = 0; i < selectedFiles.length; i++){
      filesNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    // pegando todos os elementos do array de arquivos
    customFileLabel.innerHTML = filesNames.join(', ')
    
  }

  onUpload(){
    if(this.files && this.files.size > 0){
      this.uploadService.upload(this.files, 'http://localhost:8080/upload')
      .subscribe(response => console.log('upload concluido'), error => console.log(error))
    }
  }

}
