const songs = [
  // {
  //   music: "",
  //   artist: 'wellcome',
  //   src: "",
  //   img: "asset/img/images.jfif"
  // },
  {
    music: "Ba To",
    artist: 'moein',
    src: "asset/audio/Moein - Ba To [320].mp3",
    img: "asset/img/1.jpg"
  },
  {
    music: "dobare baz khaham gasht",
    artist: 'darush',
    src: "asset/audio/Dariush - Dobareh Baz Khahama Gasht [320].mp3",
    img: "asset/img/darush.jpg"
  },
  {
    music: "hadis mehrabooni",
    artist: 'shadmehr aghili',
    src: "asset/audio/Shadmehr Aghili-Hadis Mehraboni.mp3",
    img: "asset/img/shadmehr-hadis.jpg"
  },
  {
    music: "makhloogh",
    artist: 'googoosh',
    src: "asset/audio/Googoosh - Makhloogh [320].mp3",
    img: "asset/img/Googoosh.jpg"
  },
  {
    music: "delpoosh",
    artist: 'ebi',
    src: "asset/audio/Ebi - Delpoosh.mp3",
    img: "asset/img/Ebi-Delpoosh.jpg"
  },
  
  {
    music: "amma nemishe",
    artist: 'moein',
    src: "asset/audio/Moein - Amma Nemishe.mp3",
    img: "asset/img/2.jpg"
  },
  {
    music: "nistametun",
    artist: 'shaye',
    src: "asset/audio/Shayea - Nistametoon [320].mp3",
    img: "asset/img/shaye.jfif"
  },
  {
    music: "haghighat",
    artist: 'hossein',
    src: "asset/audio/Ho3ein - Haghighat.mp3",
    img: "asset/img/hossein.jfif"
  },
  {
    music: "edame midam",
    artist: 'yas',
    src: "asset/audio/yas_edame_midam 128.mp3",
    img: "asset/img/Yas-Man-Edameh-Midam.jpg"
  },
  {
    music: "alo khoda",
    artist: 'hamid sefat',
    src: "asset/audio/Hamid Sefat - Alo Khoda.mp3",
    img: "asset/img/hamid-sefat-alo-khoda1.jpg"
  },
  {
    music: "mama",
    artist: 'mehrad hidden',
    src: "asset/audio/Sijal _ Mehrad Hidden _ KAVIANO - Mama.mp3",
    img: "asset/img/دانلود-اهنگ-های-مهراد-هیدن.webp"
  },
  {
    music: "tashakor az madaram",
    artist: 'bahram',
    src: "asset/audio/Bahrdam-Tashakor-az-madaram.mp3",
    img: "asset/img/bahram.webp"
  },
]

const audio = document.querySelector('#audio')
console.log(audio);

const playClick = document.querySelector('#play')
console.log(playClick);

const pauseClick = document.querySelector('#pause')
console.log(pauseClick);

const nextClick = document.querySelector('#next')
console.log(nextClick);

const backClick = document.querySelector('#back')
console.log(backClick);

const artist = document.querySelector('.artist')
console.log(artist);
const music = document.querySelector('.music')
console.log(music);
const img = document.querySelector('.tanzimat>.moshakhasat>img')
console.log(img);

const fullTime = document.querySelector('.duration')
console.log(fullTime);
const updatetime = document.querySelector('.curenttime')
console.log(updatetime);


let flag = 0

const songItems = document.querySelectorAll('.flex>figure')
console.log(songItems);

songItems.forEach((item , i) => {
  item.addEventListener('click', () => {
      const index = item.getAttribute('data-index'); 
      const song = songs[i]; 

      console.log(index);
      audio.src = song.src
      img.src = song.img
      artist.textContent = song.artist
      music.textContent = song.music
      audio.play();
      console.log(item + i);

  });
});
function allSong(i) {
  const song = songs[i]
  audio.src = song.src
  img.src = song.img
  artist.textContent = song.artist
  music.textContent = song.music

}

playClick.addEventListener('click', () => {
  audio.play()
})

pauseClick.addEventListener('click', () => {
  audio.pause()
})

nextClick.addEventListener('click', () => {
  flag = (flag - 1 + songs.length) % songs.length;
  allSong(flag)
  audio.play()
})

backClick.addEventListener('click', () => {
  

  flag = (flag + 1) % songs.length
  allSong(flag)
  audio.play()
})

const progress = document.querySelector('.progress')
const progressbar = document.querySelector('.progressbar');

audio.addEventListener('timeupdate', updateProgress);

progress.addEventListener('click', setProgress);

function updateProgress() {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressbar.style.left = `${progressPercent}%`;
}

function setProgress(e) {
  const width = progress.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}




audio.addEventListener('loadedmetadata', updateTotalTime);
audio.addEventListener('timeupdate', updateCurrentTime);

function updateTotalTime() {
  const duration = audio.duration;
  updatetime.textContent = formatTime(duration);
}

function updateCurrentTime() {
  const currentTime = audio.currentTime;
  fullTime.textContent = formatTime(currentTime);
  updateProgress(); // به‌روزرسانی نوار پیشرفت
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

//////////////////////volume//////////////////

const volumeSlider = document.getElementById('volume');


audio.volume = volumeSlider.value;


volumeSlider.addEventListener('input', (e) => {
  audio.volume = e.target.value;
});


const turnOn = document.querySelector('#turnon')
console.log(turnOn);

const mute = document.querySelector('#mute')

let isMute = false
turnOn.addEventListener('click', (e) => {
  if (isMute) {

    audio.volume = volumeSlider.value;

    turnOn.style.opacity = '0'
    isMute = false;
  } else {

    turnOn.style.opacity = '1'

    audio.volume = 0;
    isMute = true;
  }
})


allSong(flag)



//////////////////////////edit/////////////////////////////
const text = document.querySelector('.edit')
// console.log(text);
const strText = text.textContent
// console.log(strText);
const splitText = strText.split('');
// console.log(splitText);
text.textContent = ''
setTimeout(() => {
  for (let s = 0; s < splitText.length; s++) {
    text.innerHTML += '<h4>' + splitText[s] + '</h4>';
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = text.querySelectorAll('h4')[char];
    // console.log(span);
    span.classList.add('fade')
    char++
    if (char === splitText.length) {
      clearInterval(timer)
      timer = null
    }
  }
}, 1000);
