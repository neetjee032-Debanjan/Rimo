function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const lessons = {
  'data-types': {
    title: 'What is Data?',
    content: '<p>Data is information that can be collected and analyzed.</p>'
  }
};

function openLesson(lessonId) {
  const lesson = lessons[lessonId];
  if (!lesson) {
    alert('Lesson not found!');
    return;
  }

  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  const modal = document.getElementById('lesson-modal');

  if (!title || !body || !modal) {
    alert('Lesson modal elements are missing.');
    return;
  }

  title.textContent = lesson.title;
  body.innerHTML = lesson.content;
  modal.classList.add('active');
}

function closeLesson() {
  const modal = document.getElementById('lesson-modal');
  if (modal) modal.classList.remove('active');
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-menu a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('href').replace('#', '');
      scrollToSection(id);
    });
  });
});
