import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  value="";
  array = [];
  constructor(private http:HttpClient) { }
  ngOnInit() {
    
  }
  onSubmitGet(){
    var get = this.http.get('https://wasabi.i3s.unice.fr/search/fulltext/:'+this.value);
    get.subscribe((data: any[])=>{
      this.array=data;
      for (let index = 0; index <   this.array.length; index++) {
        if(this.array[index].picture == ""){
          this.array[index].picture = "../../../assets/img/alt.PNG"
        }
        
      }
    })
  
  }
  onReset(){
    this.value="";
    this.array=[];
  }

  onSearch(element){
    console.log(element.name);
    if(element.albumTitle){
      console.log("album");
      var get = this.http.get('https://wasabi.i3s.unice.fr/api/v1/album/name/:'+element.name);
    get.subscribe((data: any[])=>{
      console.log(data);
    })

    }else if(element.title){
      console.log("music");
      var get = this.http.get('https://wasabi.i3s.unice.fr/api/v1/song/name/:'+element.name);
    get.subscribe((data: any[])=>{
      console.log(data);
    })
    }else
      console.log("artist")
      var get = this.http.get('https://wasabi.i3s.unice.fr/api/v1/artist/name/:'+element.name);
    get.subscribe((data: any[])=>{
      console.log(data);
    })
    }
 
}


