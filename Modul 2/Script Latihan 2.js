function validate() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama !=="" && email !=="" && alamat !=="") {
        alert("Anda berhasil mengisi");
    } else {
        alert("Masukkan data secara lengkap");
    }
}
