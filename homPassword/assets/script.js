function isGood(password) {
    var password_strength = document.getElementById("password-text");


    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }

    var regex = new Array();
    regex.push("[A-Z]");
    regex.push("[a-z]");
    regex.push("[0-9]");
    regex.push("[$@$!%*#?&]");

    var passed = 0;


    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }


    var strength = "";
    switch (passed) {
        case 0:
        case 1:
        case 2:
            strength = "<small class='progress-bar bg-danger' style='width: 40%'>Weak</small>";
            break;
        case 3:
            strength = "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
            break;
        case 4:
            strength = "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
            break;

    }
    password_strength.innerHTML = strength;

}










// const inputEmail = document.querySelector(".email");
// const inputPassword = document.querySelector(".password");
// const btnSubmit = document.querySelector(".btn");

// function isGood(password) {
//     var passwordWeak = document.getElementById('passwordName');
//     if (password.length == 0) {
//         passwordWeak.innerHTML = "";
//         return;
//     }

//     var regex = new Array();
//     regex.push('[A-Z]');
//     regex.push('[a-z]');
//     regex.push('[0-9]');
//     regex.push('[$@!%*#?&]');

//     var passed = 0;

//     for (var i = 0; i < regex.length; i++) {
//         if (new RegExp(regex[i]).test(password)) {
//             passed++;
//         }
//     }

//     var strength = "";

//     switch (passed) {
//         case 0:
//         case 1:
//         case 2:
//             strength = '<small class="progress-bar bg-danger" style="width=40%>Weak</small>';
//             break;
//         case 3:
//             strength = '<small class="progress-bar bg-warning" style="width=60%>Medium</small>';
//             break;
//         case 4:
//             strength = '<small class="progress-bar bg-success" style="width=40%>Strenght</small>';
//             break;
//     }

//     passwordWeak.innerHTML = strength;
// }