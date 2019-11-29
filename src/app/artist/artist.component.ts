import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private http:HttpClient,private route: ActivatedRoute,) { }
  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    var get = this.http.get('https://wasabi.i3s.unice.fr/api/v1/artist/name/'+id);
    get.subscribe((data: any[])=>{
      console.log(data);
      this.getAlbums(data);
    })

  }

  getAlbums(id){
    var id = id._id;
    var get = this.http.get('https://wasabi.i3s.unice.fr/api/v1/artist_all/id/'+id);
    get.subscribe((data: any[])=>{
      console.log(data);
    })
    
  }

}
