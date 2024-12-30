function handleSubmit() {
    const email = document.getElementById("email").value;
    alert(`Thank you for subscribing with email: ${email}`);
    email.reset();
    return false;
}