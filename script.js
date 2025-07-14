function shortenUrl() {
  const urlInput = document.getElementById("fullUrl");
  const fullUrl = urlInput.value.trim();

  if (!fullUrl || !fullUrl.startsWith("http")) {
    alert("Please enter a valid URL (with http or https).");
    return;
  }

  const shortCode = Math.random().toString(36).substring(2, 8);
  const shortUrl = window.location.origin + "/redirect.html?c=" + shortCode;

  // Save mapping in localStorage
  const existing = JSON.parse(localStorage.getItem("shortUrls") || "{}");
  existing[shortCode] = fullUrl;
  localStorage.setItem("shortUrls", JSON.stringify(existing));

  document.getElementById("output").innerHTML =
    `Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
}
