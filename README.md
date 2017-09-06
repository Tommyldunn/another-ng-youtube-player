# Another Angular Youtube Player
## Installation
```bash
npm i another-ng-youtube-player
```

## Supported API
Currently supported attributes:

### Inputs
* **height** (number) - optional height for the player
* **width** (number) - optional width for the player
* **videoId** (string) - will load the specified video by id

### outputs
* **ready** (YT.Player) - implements youtube's player onReady event -> sends a the new created yt player instance  
* **change** - a state change event channeling the youtube's player instance state event object

## DEMO
[A Live Demo In Plnkr](http://run.plnkr.co/preview/cj78lb1wb00083i5qdkcwdovm/)

## Usage
First, import the YoutubePlayerModule to your module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YoutubePlayerModule } from 'another-ng-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';

@NgModule({
  imports:[ BrowserModule, YoutubePlayerModule ],
  declarations: [ AppComponent, ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
```

Next, use the **youtube-player** component. A Unique Id will be created for this player's instance:

```typescript
import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `
		<youtube-player
      [videoId]="id"
      (ready)="savePlayer($event)"
      (change)="onStateChange($event)"
    ></youtube-player>
	`
})
export class AppComponent {
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';

	savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
	}
  onStateChange(event){
    console.log('player state', event.data);
  }
}
```
