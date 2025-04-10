const cfScript = document.createElement("script");
cfScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
cfScript.defer = true;
cfScript.setAttribute("data-cf-beacon", '{"token": "34b3d2da724148d6a419f139bd540f65"}');
document.head.appendChild(cfScript);