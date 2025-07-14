const path = window.location.pathname.slice(1); // Get anything after "/"

if (path) {
  // If it's a short code, redirect
  const stored = JSON.parse(localStorage.getItem("shortUrls") || "{}");
  const destination = stored[path];

  if (destination) {
    window.location.href = destination;
  } else {
    document.body.innerHTML = `<h2>Invalid or expired short URL</h2>`;
  }
} else {
  // Show the shortener form
  document.getElementById("shortener").style.display = "block";
}

function shortenUrl() {
  const url = document.getElementById("fullUrl").value.trim();
  const short = Math.random().toString(36).substring(2, 8);

  if (!url.startsWith("http")) {
    alert("Please enter a valid URL (with http/https)");
    return;
  }

  const data = JSON.parse(localStorage.getItem("shortUrls") || "{}");
  data[short] = url;
  localStorage.setItem("shortUrls", JSON.stringify(data));

  const shortUrl = `${window.location.origin}/${short}`;

  document.getElementById("output").innerHTML =
    `Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
}
