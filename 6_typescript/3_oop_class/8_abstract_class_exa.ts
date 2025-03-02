// Soyut Bir Sınıf
abstract class MusicPlayer {
  constructor(public apiUrl: string) {}

  getMusic() {
    console.log(this.apiUrl + " api'ından müzikler alınıyor..");
  }

  abstract playMusic(name: string): void;
}

// Soyut sınıfı miras alan sınıf
class Spotify extends MusicPlayer {
  // soyut olan methodun göreivini tanımla (implement)
  playMusic(name: string): void {
    console.log(name + "spotify'da çalıyor");
  }
}

// Soyut sınıfı miras alan sınıf
class AppleMusic extends MusicPlayer {
  // soyut olan methodun göreivini tanımla (implement)
  playMusic(name: string): void {
    console.log(name + "applemusicd'de çalıyor");
  }
}

const spotify = new Spotify("www.api.spotify.com");
const apple = new AppleMusic("www.apple.api.com");

console.log(spotify, apple);

spotify.getMusic();
spotify.playMusic("test");

apple.getMusic();
apple.playMusic("deneme");
