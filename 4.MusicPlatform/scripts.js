const audio = document.getElementById('music-audio');
const playPauseBtn = document.querySelector('.play-pause');
const playPauseIcon = playPauseBtn.querySelector('img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const albumArt = document.getElementById('player-album-art');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');

const playlist = [
  {
    src: 'audio/song.mp3',
    title: 'Shape of you',
    artist: 'Ed Sheeran',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png'
  },
];

let currentTrackIndex = 0;
let isPlaying = false;

function loadTrack(index) {
  const track = playlist[index];
  audio.src = track.src;
  albumArt.src = track.albumArt;
  songTitle.textContent = track.title;
  songArtist.textContent = track.artist;
}

playPauseBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener('play', () => {
  isPlaying = true;
  playPauseIcon.src = 'icons/pause.svg';
});
audio.addEventListener('pause', () => {
  isPlaying = false;
  playPauseIcon.src = 'icons/play.svg';
});

nextBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
  audio.play();
});

prevBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex);
  audio.play();
});

loadTrack(currentTrackIndex);
