
// form validation
$(".form-sign").validate({

    rules: {
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
        },
    },
    submitHandler: function (form) {
        form.submit();
    },
});

$(function () {
    $('button').on('click', function (event) {
        event.preventDefault();
        const email = $('#email-box').val();
        const password = $('#password-box').val();
        console.log(`${email}  ${password}`);
    });
});