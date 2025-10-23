document.addEventListener("DOMContentLoaded", function() {
  let previewImage = document.querySelector("#preview-image");
  let previewCaption = document.querySelector("#preview-caption");
  let thumbnails = document.querySelectorAll(".thumbnail-item");
  let prevBtn = document.querySelector("#prev-btn");
  let nextBtn = document.querySelector("#next-btn");
  let current = 0;

  function showImage(index) {
    let thumb = thumbnails[index].querySelector(".thumbnail");
    previewImage.src = thumb.src;
    previewCaption.textContent = thumb.dataset.caption;
    document.querySelectorAll(".thumbnail").forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");
    current = index;
  }

  function nextImage() {
    current++;
    if (current >= thumbnails.length) current = 0;
    showImage(current);
  }

  function prevImage() {
    current--;
    if (current < 0) current = thumbnails.length - 1;
    showImage(current);
  }

  function removeImage(index) {
    if (thumbnails.length <= 1) {
      alert("You can't remove the last image!");
      return;
    }
    thumbnails[index].remove();
    thumbnails = document.querySelectorAll(".thumbnail-item");
    if (current >= thumbnails.length) current = thumbnails.length - 1;
    showImage(current);
  }

  thumbnails.forEach((item, i) => {
    item.querySelector(".thumbnail").onclick = function() {
      showImage(i);
    };
    item.querySelector(".remove-btn").onclick = function(e) {
      e.stopPropagation();
      removeImage(i);
    };
  });

  prevBtn.onclick = prevImage;
  nextBtn.onclick = nextImage;

  showImage(0);
});
