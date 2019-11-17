import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // para conocer la ruta activa
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  loading: boolean;
  artista: any = {};
  topTracks: any[] =  [];

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) {

    this.router.params.subscribe(params => {

      this.getArtista( params.id );
      this.getTopTracks(params.id);
    });

   }

   getArtista( id: string ) {

    this.loading = true;

    this.spotify.getArtista( id )
                .subscribe( artista => {
                  this.artista = artista;
                  this.loading = false;
                });
   }

   getTopTracks(id: string){
      this.spotify.getTopTracks(id)
                  .subscribe(topTracks => {
                    this.topTracks = topTracks;
                    console.log(topTracks);
                  });
   }
}
