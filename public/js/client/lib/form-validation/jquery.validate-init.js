
var form_validation = function() {
    var e = function() {
        console.log('validate');
        $(".authRegisterForm").validate({
            ignore: [],
            errorClass: "invalid-feedback animated fadeInDown",
            errorElement: "div",
            errorPlacement: function(e, a) {
                $(a).parents(".form-group").append(e)
            },
            highlight: function(e) {
                $(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
            },
            success: function(e) {
                $(e).closest(".form-group").removeClass("is-invalid"), $(e).remove()
            },
            rules: {
                "fullNameRegister": {
                    required: true,
                    minlength: 3
                },
                "userNameRegister": {
                    required: true,
                    minlength: 3
                },
                "emailAddressRegister": {
                    required: true,
                    email: true
                },
                "passwordRegister": {
                    required: true,
                    minlength: 6
                },
                "confirmPasswordRegister": {
                    required: true,
                    minlength: 6,
                    equalTo: "#passwordRegister"
                }
            },
            messages: {
                "fullNameRegister": {
                    required: "Please enter a fullname",
                    minlength: "Your fullname must consist of at least 3 characters"
                },
                "userNameRegister": {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 3 characters"
                },
                "emailAddressRegister": {
                    required: "Please enter a valid email address"
                },
                "passwordRegister": {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 6 characters long"
                },
                "confirmPasswordRegister": {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 6 characters long",
                    equalTo: "Please enter the same password as above"
                }
            }
        });
        $(".authLoginForm").validate({
            ignore: [],
            errorClass: "invalid-feedback animated fadeInDown",
            errorElement: "div",
            errorPlacement: function(e, a) {
                $(a).parents(".form-group").append(e)
            },
            highlight: function(e) {
                $(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
            },
            success: function(e) {
                $(e).closest(".form-group").removeClass("is-invalid"), $(e).remove()
            },
            rules: {
                "emailLogin": {
                    required: true,
                    email: true
                },
                "passwordLogin": {
                    required: true,
                    minlength: 6
                }
            },
            messages: {
                "emailLogin": {
                    required: "Please enter a valid email address"
                },
                "passwordLogin": {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 6 characters long"
                }
            }
        })
    };
    return {
        init: function() {
            e(), $(".js-select2").on("change", function() {
                $(this).valid()
            })
        }
    }
}();
$(function() {
    form_validation.init();
});