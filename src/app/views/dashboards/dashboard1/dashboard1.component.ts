
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// -----------------  map -----------------------
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})

/**
 * @author Suchheta Shrivastav
 * @description: Component to know the thermometer temperature of a one year-time span.
 */
export class Dashboard1Component implements OnInit {
  p: number = 1;
  checkFileName: string
  uploadFileName: string
  uploadPath: string
  showTable: boolean = false;
  responseData: any = [];
  loading: boolean = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }


  filesToUpload: Array<File> = [];
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  async upload() {

   this. loading= true;
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    console.log("inside upload, knowledge of the file = ", files);
    this.checkFileName = files[0].name;

    console.log(" inside upload, this.checkFileName = ", this.checkFileName);

    var lastFive = this.checkFileName.substr(this.checkFileName.length - 5);

    console.log("lastFive letters =", lastFive);

    if (lastFive == ".json") {


      console.log("################  INSIDE isFilePresent == FALSE  #############")

      for (let i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i]['name']);

      }
      console.log('form data variable :   ' + formData.toString());

      console.log("files.length = ", files.length);


      console.log("this.wsdlValue = ", formData)

      this.http.post('http://localhost:3003/upload', formData)
        .pipe(map((response: any) => response))
        .subscribe((res: any) => {
          this.responseData = [];

          console.log("XXXXXXXXXXXX Response XXXXXXXXXX ", res);
          console.log(" 1111111= ", res[0])
          var info = res;
          for (var i = 0; i < info.length; i++) {

            this.responseData.push({ id:info[i].id,'ts': info[i].ts, 'val': info[i].val, 'year': info[i].year })
          }
          this.showTable = true;
          this. loading= false; 
        })
    }
    else {
      this.showTable = false;
      alert("Please upload a JSON file")
    }
  }

}
