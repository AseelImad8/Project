document.getElementById("form").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.length < 4) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your full name is wrong.",
            footer: "Must contain at least 4 characters"
        });
    }
    else {
        Swal.fire({
            title: "Good job!",
            text: "Message sent",
            icon: "success"
        });
    }
});

