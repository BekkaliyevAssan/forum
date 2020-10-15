import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  imgLoaded: boolean = false
  
  albumId = this.route.snapshot.paramMap.get('album-id')
  album
  photos
  loading: boolean = true
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.postService.getAlbum(this.albumId).subscribe(data => {
        this.album = data
      })
      this.postService.getPhotos(this.albumId).subscribe(data => {
        this.photos = data
        console.log(data)
      })
      this.loading = false
    }, 0)
  }
  _imgLoaded() {
    this.imgLoaded = true
  }

}
