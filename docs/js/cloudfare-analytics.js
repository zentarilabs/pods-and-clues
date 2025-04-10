(function () {
  const cfScript = document.createElement("script");
  cfScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
  cfScript.defer = true;
  cfScript.setAttribute(
    "data-cf-beacon",
    '{"token": "34b3d2da724148d6a419f139bd540f65"}'
  );

  // Optional: fallback console message
  cfScript.onerror = function () {
    console.warn("Cloudflare beacon failed to load. Analytics may be unavailable.");
  };

  document.head.appendChild(cfScript);
})();