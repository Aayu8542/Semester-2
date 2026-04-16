document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('video-modal');
  const body = modal.querySelector('.modal-body');
  const closeBtn = modal.querySelector('.modal-close');

  // Intersection Observer for autoplay on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target.querySelector('.short-video, .long-video');
      if (video) {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.short-card').forEach(card => {
    observer.observe(card);
  });

  document.querySelectorAll('.long-video-card').forEach(card => {
    observer.observe(card);
  });

  function openModal(src) {
    // clear
    body.innerHTML = '';

    if (!src) return;

    if (src.includes('youtube.com') || src.includes('youtu.be') || src.includes('youtube')) {
      // ensure embed URL
      let embed = src;
      if (!embed.includes('/embed/')) {
        // try to convert common youtube urls to embed form
        const idMatch = src.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
        if (idMatch) embed = 'https://www.youtube.com/embed/' + idMatch[1];
      }
      const iframe = document.createElement('iframe');
      iframe.src = embed + '?autoplay=1&rel=0';
      iframe.allow = 'autoplay; encrypted-media';
      iframe.setAttribute('allowfullscreen', '');
      body.appendChild(iframe);
    } else {
      const video = document.createElement('video');
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.muted = true;
      body.appendChild(video);
    }

    modal.classList.add('active');
  }

  function closeModal() {
    modal.classList.remove('active');
    body.innerHTML = '';
  }

  // attach click handlers
  document.querySelectorAll('.short-card').forEach(card => {
    card.addEventListener('click', function (e) {
      const src = card.getAttribute('data-video');
      openModal(src);
    });
  });

  document.querySelectorAll('.long-video-card').forEach(card => {
    card.addEventListener('click', function (e) {
      const src = card.getAttribute('data-video');
      openModal(src);
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (modal.classList.contains('active')) closeModal();
      if (imagePopup?.classList.contains('active')) closeImagePopup();
    }
  });

  const showImageBtn = document.getElementById('show-image-btn');
  const imagePopup = document.getElementById('image-popup');
  const closeImageBtn = document.getElementById('close-image-btn');

  function openImagePopup() {
    imagePopup.classList.add('active');
  }

  function closeImagePopup() {
    imagePopup.classList.remove('active');
  }

  showImageBtn?.addEventListener('click', openImagePopup);
  closeImageBtn?.addEventListener('click', closeImagePopup);

  imagePopup?.addEventListener('click', function (e) {
    if (e.target === imagePopup) closeImagePopup();
  });
});
