import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from './albums';
import { albumPhotos } from './albumPhotos';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getAlbum(id: number): Observable<Albums> {
    return this.http.get<Albums>(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
  }

  getAlbumPhotos(id: number): Observable<albumPhotos[]> {
    return this.http.get<albumPhotos[]>(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
  }

  deleteAlbum(id: number) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
  }

  updateTitle(id: number, album: Albums) {
    console.log(id, album, `https://jsonplaceholder.typicode.com/albums/${id}`)
    return this.http.put(
      `https://jsonplaceholder.typicode.com/albums/${id}`,
      album
    );
  }


  addAlbum(id:number, album:Albums){
    return this.http.post(
      `https://jsonplaceholder.typicode.com/albums/${id}`,
      album
    );
  }
}
