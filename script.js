function showIframe(id) {
    let iframe = document.getElementById("extra");
    iframe.style.display = "block";
    iframe.src = id + ".html"; // Assuming your iframe files have names matching the IDs
  }