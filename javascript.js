var checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var checkName = /^[a-zA-Z ]{2,30}$/;

clickHeart = (icon) => {
    icon.classList.toggle('heart-red');
}

register = () => {
    var check = 0;
    var userMail = document.getElementById('mail');
    var changeMail = document.querySelector('.form-email');
    var userPass = document.getElementById('pass');
    var userPass2 = document.getElementById('pass2');
    var changePass = document.querySelector('.form-pass');
    var changePass2 = document.querySelector('.form-pass2');
    var checkBoxx = document.getElementById('checkBox');
    var userName = document.getElementById('usname');
    var warnName = document.querySelector('.usNamep');
    var wrapPwd = document.querySelector('.wrap-pwd.wrap-pwd1');
    var wrapPwd2 = document.querySelector('.wrap-pwd.wrap-pwd2');
    if(!checkName.test(userName.value)) {
        check = 1;
        warnName.innerHTML = '*Tên không hợp lệ!';
        warnName.style.color = 'red';
        warnName.style.fontSize = '18px';
        userName.classList.add('invalid');
    } else {
        warnName.innerHTML = 'Tên đầy đủ:';
        warnName.style.color = 'black';
        userName.classList.remove('invalid');
    }
    if(!checkMail.test(userMail.value)) {
        check = 1;
        changeMail.innerHTML = '*Email không hợp lệ!';
        changeMail.style.color = 'red';
        userMail.classList.add('invalid');
    } else {
        changeMail.innerHTML = 'Email:';
        changeMail.style.color = 'black';
        userMail.classList.remove('invalid');
    }
    if(userPass.value.length<6 || userPass.value.length>12) {
        check = 1;
        changePass.innerHTML = '*Mật khẩu từ 6-12 ký tự!';
        changePass.style.color = 'red';
        wrapPwd.classList.add('invalid');
    } else {
        changePass.innerHTML = 'Mật khẩu:';
        changePass.style.color = 'black';
        wrapPwd.classList.remove('invalid');
    }
    if(userPass.value!=userPass2.value) {
        check = 1;
        changePass2.innerHTML = '*Không trùng khớp!';
        changePass2.style.color = 'red';
        wrapPwd2.classList.add('invalid');
    } else {
        changePass2.innerHTML = 'Xác nhận mật khẩu:';
        changePass2.style.color = 'black';
        wrapPwd2.classList.remove('invalid');
    }
    if(!checkBoxx.checked) {
        check = 1;
        alert('Bạn chưa đồng ý với điều khoản!');
    }
    if(!check) {
        alert('Đăng ký thành công!\nCảm ơn bạn đã tin dùng GR1 Library!\nHãy đăng nhập để sử dụng!😊');
        window.location = 'index.html';
    }
}

login = () => {
    var checkk = 0;
    var usMail = document.getElementById('gmail');
    var changeUsMail = document.querySelector('.form-account');
    var changeUsPass = document.querySelector('.form-pwd');
    var usPass = document.getElementById('pwd');
    var wrapPass = document.querySelector('.wrap-pwd');
    if(!checkMail.test(usMail.value)) {
        checkk = 1;
        changeUsMail.innerHTML = '*Email không hợp lệ!';
        changeUsMail.style.color = 'red';
        usMail.classList.add('invalid');
    } else {
        changeUsMail.innerHTML = 'Email:';
        changeUsMail.style.color = 'black';
        usMail.classList.remove('invalid');
    }
    if(usPass.value.length<6 || usPass.value.length>12) {
        checkk = 1;
        changeUsPass.innerHTML = '*Sai mật khẩu!';
        changeUsPass.style.color = 'red';
        wrapPass.classList.add('invalid');
    } else {
        changeUsPass.innerHTML = 'Mật khẩu:';
        changeUsPass.style.color = 'black';
        wrapPass.classList.remove('invalid');
    }
    if(!checkk) {
        alert('Đăng nhập thành công!\nCảm ơn bạn đã tin tưởng sử dụng dịch vụ tại GR1!💖');
        window.location = 'login.html';
    }
}

changePass = () => {
    checkkk = 0;
    check2 = 0;
    var usPwd = document.getElementById('pwd').value;
    var newPws = document.getElementById('newPwd').value;
    var newPws2 = document.getElementById('newPwd2').value;
    var changeUsPwd = document.querySelector('.form-psw');
    var changeUsPwd2 = document.querySelector('.form-psw2');
    var changeUsPwd3 = document.querySelector('.form-psw3');
    if(usPwd.length<6 || usPwd.length>12) {
        checkkk = 1;
        changeUsPwd.innerHTML = '*Sai mật khẩu!';
        changeUsPwd.style.color = 'red';
    } else {
        changeUsPwd.innerHTML = 'Nhập mật khẩu cũ:';
        changeUsPwd.style.color = 'rgba(0, 0, 0, 0.8)';
    }
    if(newPws==usPwd || newPws.length<6 || newPws.length>12) {
        check2 = 1;
        checkkk = 1;
        changeUsPwd2.innerHTML = '*Mật khẩu không hợp lệ!';
        changeUsPwd2.style.color = 'red';
    } else {
        changeUsPwd2.innerHTML = 'Nhập mật khẩu mới:';
        changeUsPwd2.style.color = 'rgba(0, 0, 0, 0.8)';
    }
    if(newPws!=newPws2 && check2==0) {
        checkkk = 1;
        changeUsPwd3.innerHTML = '*Không trùng khớp!';
        changeUsPwd3.style.color = 'red';
    } else {
        changeUsPwd3.innerHTML = 'Xác nhận mật khẩu mới:';
        changeUsPwd3.style.color = 'rgba(0, 0, 0, 0.8)';
    }
    if(!checkkk) {
        alert('Đổi mật khẩu thành công!\nChúc bạn có những giây phút vui vẻ tại GR1 library! 😊');
        window.location = 'index.html';
    }
}

updateInfo = () => {
    var checkPhone = /^\+84\d{9}$/;
    var checkAge = /^\d{1,3}$/;
    var userName = document.getElementById('usName').value;
    var userAge = document.getElementById('usAge').value;
    var userPhoneNum = document.getElementById('usPhone').value;
    var warnName = document.querySelector('.usNamep');
    var warnAge = document.querySelector('.usAgep');
    var warnPhone = document.querySelector('.phonep');
    var check = 0;
    if(!checkName.test(userName)) {
        check = 1;
        warnName.innerHTML = '*Tên không hợp lệ!';
        warnName.style.color = 'red';
        warnName.style.fontSize = '18px';
    } else {
        warnName.innerHTML = '';
    }
    if(!checkAge.test(userAge)) {
        check = 1;
        warnAge.innerHTML = '*Tuổi không hợp lệ!';
        warnAge.style.color = 'red';
        warnAge.style.fontSize = '18px';
    } else {
        warnAge.innerHTML = '';
    }
    if(!checkPhone.test(userPhoneNum)) {
        check = 1;
        warnPhone.innerHTML = '*Số điện thoại không hợp lệ!';
        warnPhone.style.color = 'red';
        warnPhone.style.fontSize = '18px';
    } else {
        warnPhone.innerHTML = '';
    }
    if(!check) {
        alert('Cập nhật thành công!');
        window.location = 'login.html';
    }
}

showPass = () => {
    var showPwd = document.querySelector('.enter-pwd');
    if(showPwd.type == 'password') {
        showPwd.type = 'text';
    } else {
        showPwd.type = 'password';
    }
}

showPass1 = () => {
    var showPwd = document.querySelector('.enter-pwd1');
    if(showPwd.type == 'password') {
        showPwd.type = 'text';
    } else {
        showPwd.type = 'password';
    }
}

showPass2 = () => {
    var showPwd = document.querySelector('.enter-pwd2');
    if(showPwd.type == 'password') {
        showPwd.type = 'text';
    } else {
        showPwd.type = 'password';
    }
}

var menuIcon = document.getElementById('book__icon-menu');
    var displayMenu = document.getElementById('display__menu');
    var menuHeight = displayMenu.clientHeight;
    menuIcon.onclick = function(){
    var isClose =  displayMenu.clientHeight ===menuHeight ;
    if(isClose){
        displayMenu.style.display='block';
        displayMenu.style.marginTop='60px';
        displayMenu.style.position='relative';
        displayMenu.style.marginBottom='50px';
    } else {
        displayMenu.style.display='none';
    }
}