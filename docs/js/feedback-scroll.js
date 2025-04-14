let lastScrollTop = 0;
const feedbackBtn = document.querySelector('.feedback-float');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (!feedbackBtn) return;

  if (scrollTop > lastScrollTop) {
    // scrolling down
    feedbackBtn.classList.add('hide');
  } else {
    // scrolling up
    feedbackBtn.classList.remove('hide');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

function openFeedbackModal() {
  document.getElementById("feedbackModal").style.display = "block";
}

function closeFeedbackModal() {
  document.getElementById("feedbackModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("feedbackModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Auto-fill the hidden page_url input
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("page-url");
  if (input) {
    input.value = window.location.href;
  }
});
