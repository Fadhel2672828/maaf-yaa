const dialogText = document.getElementById('dialogText');

function saySorry(version) {
  if (version === 1) {
    dialogText.innerHTML = `
      🐼❤️<br>
      Sayang aku minta maaf ya...<br>
      Jangan marah lagi dong 😢<br>
      Ntar tambah pendek lho kalau marah terus 😜<br>
      Maafin aku yaaa 💕
    `;
  } else if (version === 2) {
    dialogText.innerHTML = `
      🐼💐<br>
      Sayangku, maaf yaaa...<br>
      Aku sadar aku salah 😔<br>
      Jangan marah terus, nanti kamu kucubit gemes 🤭<br>
      Yuk peluk~ 😚🐾
    `;
  }
}
