import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Albums } from '../albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Albums[];
  albumId:number;
  albumUserId:number;
  albumTitle:string ;

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.albumId=0;
    this.albumUserId=0;
    this.albumTitle = ''
  }

  ngOnInit() {
    this.fetchAllAlbums();
  }

  fetchAllAlbums() {
    this.albumsService.getAlbums().subscribe((data) => (this.albums = data));
  }

  deleteAlbume(id: number) {
    this.albums.forEach((item, index) => {
      if (item.id === id) {
        this.albums.splice(index, 1);
      }
    });

    // this.albumsService.deleteAlbum(id).subscribe(data =>{
    //   this.fetchAllAlbums()
    // })
  }

  addAlbum(){
    let temp:Albums = {
      id:this.albumId,
      userId: this.albumUserId,
      title: this.albumTitle
    }
    this.albums.push(temp)
    // this.albumsService.addAlbum(this.albumId, temp).subscribe()
    // console.log(this.albums)
  }
}
