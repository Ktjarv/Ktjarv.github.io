/*
    Keagan Jarvie
    script.js
    04/13/2026 | Updated 11/17/2026
*/

// Contact form: opens a pre-filled email in the visitor's mail app.
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("inquiry-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("full-name").value.trim();
        var email = document.getElementById("email-addr").value.trim();
        var topic = document.getElementById("topic").value;
        var message = document.getElementById("message").value.trim();

        var subject = topic + " - from " + name;
        var body = message + "\n\n" + name + "\n" + email;

        window.location.href = "mailto:Keagan.Jarvie@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);
    });
});
