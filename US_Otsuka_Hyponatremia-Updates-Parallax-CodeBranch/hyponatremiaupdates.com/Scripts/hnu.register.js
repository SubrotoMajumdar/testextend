(function ($) {
    function _handleRegistrationPageReady() {
        $(".hnu-register").validate({
            ignore: ":hidden:not(#SignUpOptions, #hiddendesignation)",
            rules: {
                SignUpOptions: {
                    required: true,
                },
                hiddendesignation: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                Password: {
                    required: true,
                    minlength: 6
                },
                ConfirmPassword: {
                    equalTo: "#Password",
                    required: true,
                }
            },
            messages: {
                SignUpOptions: {
                    required: "Please select a signup option."
                },
                hiddendesignation: {
                    required: "Please select a designation."
                },
                email: {
                    required: "Please enter Email.",
                    email: "Your email address must be in the format of name@domain.com"
                },
                Password: {
                    required: "Please enter password.",
                    minlength: "Password must be atleast 6 characters."
                },
                ConfirmPassword: {
                    required: "Please enter confirm password.",
                    equalTo: "Passwords don't match."
                }
            }
        });

        $('#professionalDesignation').on('change', _handleDesignationChange);
        $('#specialty').on('change', _handleSpecialityChange);
        $('.signupOption').on('click', _handleSignupOptionSelected);
    }

    function _handleDesignationChange(e) {
        var designation = $('#professionalDesignation').val();
        if (designation === 'MD' || designation === 'DO'){
            $('.specialty-container').show();
        } else {
            $('.specialty-container').hide();
            $('#specialty :selected').prop('selected', false);
            $('.otherSpecialty-container').hide();
        }
    }

    function _handleSpecialityChange(e) {
        var specialty = $('#specialty').val();
        if (specialty === "Other") {
            $(".otherSpecialty-container").show();
        } else {
            $('#otherSpecialty').val('');
            $('.otherSpecialty-container').hide();
        }
    }

    function _handleSignupOptionSelected(e) {
        e.preventDefault();
        var $target = $(e.target);
        if($(e.target).hasClass('both')){
            $('.signupOption-check').prop('checked', true);
        } else {
            $('.signupOption-check').prop('checked', false);
            $('#' + $target.attr('for')).prop('checked', true);
        }
        $('.signupOption').removeClass('active');
        $target.addClass('active');
        if($('.signupOption-check:checked').length){
            $('.step-2, .step3').show();
            if($('#emailUpdates:checked').length){
                $('.step-4').show();
            }else {
                $('.step-4').hide();
            }
        }
    }

    $(document).ready(_handleRegistrationPageReady);
}(jQuery));