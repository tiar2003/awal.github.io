var i = 0;
var tulisan = "Hari ini ulang tahun ke 14 yaa??. Semoga panjnag umur, sehat selalu, semoga ditahun ini bahagia teruss, gausah sedih-sedih lagii. semakin nurut sm ayah ibuu, mulai kurang-kurangin tuhh sifat yang kurang baikk anggap tahun kemarin buat pembelajaran.     OH yaa, juni nanti udah kls 9 kan? Mulai dpikir mau SMA atau SMK tuu, apapun pilihanmu nanti semoga bisa berguna buat kamu dan orang-orang sekitarmu juga yaa            AAMIIN";
var kecepatan = 40;


function tulis() {
    if (i < tulisan.length) {
        document.getElementById("lokasiTulisan").innerHTML += tulisan.charAt(i);
        i++;
        setTimeout(tulis, kecepatan);
    }
}

$(document).ready(function(){
    $( "#lanjutan" ).innerHTML("curhat.html");
  
});

$(document).ready(function(){
    /* navbar */
    $('.bt1').click(function(){
        $('.gb1 img').fadeToggle("normal");
        $('.gb1 p').fadeToggle("normal");
    })

    $('.bt2').click(function(){
        $('.gb2 img').fadeToggle("normal");
        $('.gb2 p').fadeToggle("normal");
    })

    $('.bt3').click(function(){
        $('.gb3 img').fadeToggle("normal");
        $('.gb3 p').fadeToggle("normal");
    })
})

$(document).ready(function(){
    $('nav').click(function(){
        
    })
})