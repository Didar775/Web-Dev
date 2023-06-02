import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { albumPhotos } from '../albumPhotos';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  albumPhotos: albumPhotos[];
  id:number

  constructor(private route: ActivatedRoute, private service: AlbumsService) {
    this.albumPhotos = [];
    this.id = 0
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getAlbumPhotos(this.id);
  }

  getAlbumPhotos(id: number) {
    this.service
      .getAlbumPhotos(id)
      .subscribe((data) => (this.albumPhotos = data));
  }
}
