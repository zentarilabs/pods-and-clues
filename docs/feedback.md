# We’d love your feedback!

Spotted a bug? Have a suggestion or even an idea for a future case? Let us know, we’re listening.

<form action="https://formsubmit.co/rlinares416@gmail.com" method="POST">
  <!-- Automatically captures the page the user came from -->
  <input type="hidden" name="_subject" value="New Feedback from Pods & Clues">
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="page_url" id="page-url">

  <label for="message"><strong>Your message:</strong></label><br>
  <textarea name="message" rows="6" required placeholder="Tell us what you noticed or your idea..."></textarea><br><br>

  <label for="email"><strong>Your email (optional):</strong></label><br>
  <input type="email" name="email" placeholder="you@example.com"><br><br>

  <button type="submit">Submit Feedback</button>
</form>

<script>
  // Fill the hidden page_url field with the previous page URL
  document.addEventListener("DOMContentLoaded", function () {
    const referrer = document.referrer;
    const input = document.getElementById("page-url");
    if (input && referrer) {
      input.value = referrer;
    }
  });
</script>
