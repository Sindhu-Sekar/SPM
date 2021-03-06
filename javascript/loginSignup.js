$(function(){
    var openTab = {
        handleTab: function(evt,name){
            // Declare all variables
            var i, tabcontent, tablinks;

            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(name).style.display = "block";
            evt.currentTarget.className += " active";
        }
    };

    $('.tablinks').on('click',function(e){
        var name = e.target.getAttribute('data-val');
        openTab.handleTab(e,name)
    });

    $('#login-form').on('submit', function(e){

        e.preventDefault();
        e.stopPropagation();


       var email = $('#login-form').find('#login-email').val();
       var password = $('#login-form').find('#login-password').val();
       username = username;
       var loginData = {
           email:email,
           password:password
       };
       console.log(e);
        $.ajax({
            url: '/login',
            type: 'POST',
            dataType: 'json',
            data: loginData,
            success: function() {
                // $('#myfrom').submit();
            },
            error: function(e) {
                // console.log(e);
                window.location.href = "/SPM/home.html";
            }
        });
    });

    $('#register-form').on('submit', function(e){

        e.preventDefault();
        var password = $('#register-form').find('#signup-password').val();
        var email = $('#register-form').find('#signup-email').val();
        var signupData = {
            password:password,
            email:email
        };
        console.log(e);
        $.ajax({
            url: '/signup',
            type: 'POST',
            dataType: 'json',
            data: signupData,
            success: function() {
                $('#myfrom').submit();
            },
            error: function(e) {
                console.log(e);
            }
        });
    });
});