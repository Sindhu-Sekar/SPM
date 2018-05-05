$(function(){
    $('#login-form').find('#login-username').value ='ant';
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
       var username = $('#login-form').find('#login-username').val();
       var password = $('#login-form').find('#login-password').val();
       var loginData = {
           username:username,
           password:password
       };
       console.log(e);
        $.ajax({
            url: '/login',
            type: 'POST',
            dataType: 'json',
            data: loginData,
            success: function() {
                $('#myfrom').submit();
            },
            error: function(e) {
                console.log(e);
            }
        });
    });

    $('#register-form').on('submit', function(e){
        var username = $('#register-form').find('#signup-username').val();
        var password = $('#register-form').find('#signup-password').val();
        var email = $('#register-form').find('#signup-email').val();
        var signupData = {
            username:username,
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