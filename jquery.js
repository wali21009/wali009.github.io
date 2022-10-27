let Username = document.getElementById("input_text");
let password = document.getElementById("input_password");
let submit = document.getElementById("submit").addEventListener('click', function(){
    if (Username.value == '' && password.value == ''){
        swal("Data Tidak Boleh Kosong", "error")
    }
    else if (Username.value == ''){
        swal("Username Tidak Boleh Kosong", "error")
    }
    else if (password.value == ''){
        swal("Password Tidak Boleh Kosong", "error")
    }
        
    else {
        swal("Save", "Data Tersimpan", "success").then(function() {
            window.location.href = 'index.html';
        });
    }
})
