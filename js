function cekKhodam(event){
  event.preventDefault();
  let nama = $('#search').val();
  //alert("Testing")
  if(nama == ''){
    alert('Nama Tidak Boleh Kosong!')
  }else{
    let status = [
      'isi',
      'kosong'
    ]
     const randomStatus = Math.floor(Math.random() * status.length)
     if(randomStatus == 0){
       let khodam = [
         'toke kayang',
         'ban becak',
         'udin slebew',
         'kipas angin',
         'tuyul mulet',
         'kadal mewing'
         ];
         const random = Math.floor(Math.random() * khodam.length);
         $('#result').html(`${nama.toUpperCase()} - khodam kamu (${khodam[random]})`);
         $('#search').val('');
     }else{
         $('#result').html(`${nama.toUpperCase()} - KOSONG`);
         $('#search').val('');
     }
  }
}

$(document).ready(function(){
  $('#btn-search').click(cekKhodam);
})