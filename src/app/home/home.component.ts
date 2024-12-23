import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-home',
  imports: [MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  playList: any[] = [];
  nextPage: string = '';
  options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'cXI3nwKbIwmshrsTAl3q6f53EPiSp1XZRotjsnkqm7643CAiiD',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  ngOnInit(): void {
    this.listSongs();
  }
  async listSongs(event?: any) {
    console.log(event);
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${event?.target.value || 'eminem'}`;


try {
	const response = await fetch(url, this.options);
	const result = await response.json();
  this.playList = result.data;
	console.log(result);
  this.nextPage = result.next;
} catch (error) {
	console.error(error);
}
  }

  async loadMore(){
    try {
      const response = await fetch(this.nextPage, this.options);
      const result = await response.json();
      this.playList = [...result.data, ...this.playList];
      console.log(result);
      this.nextPage = result.next;
    } catch (error) {
      console.error(error);
    }
  }
}
