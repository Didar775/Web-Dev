import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Albums } from '../albums';
import { AlbumsService } from '../albums.service';
import { albumPhotos } from '../albumPhotos';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
})
export class AlbumDetailsComponent implements OnInit {
  routingPath: string;
  album: Albums;
  albums: Albums[];

  albumTitle: string;

  constructor(
    private route: ActivatedRoute,
    private service: AlbumsService,
    private router: Router
  ) {
    this.albums = [];
    this.album = {} as Albums;
    this.routingPath = '';
    this.albumTitle = '';
  }

  ngOnInit() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.service.getAlbums().subscribe((data) => (this.albums = data));
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAlbum(id).subscribe((i) => {
      this.album = i as Albums
      this.albumTitle = i.title;
    });
    this.routingPath = '/albums/' + id.toString();
    // this.albumTitle = this.album.title;
    // console.log(this.album );
    // console.log(this.albumTitle);
  }

  back() {
    this.router.navigate(['/albums']);
  }

  updateTitle(id: number) {
    // let tempAlbum:Albums = {
    //   id: this.album.id,
    //   userId: this.album.userId,
    //   title: this.albumTitle,
    // };
    // console.log(tempAlbum)
    // this.service.updateTitle(id, tempAlbum).subscribe((data) => {
    //   this.fetchPhoto();
    // });
    // this.albumTitle = ''
  }
}
