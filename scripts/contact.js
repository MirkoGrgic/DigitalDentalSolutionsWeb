function handleFormSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("contactForm");

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    })
        .then(response => {
            if (response.ok) {
                form.reset();
            }
        })
        .catch(() => {

        });
}