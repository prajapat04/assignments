const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const counters = document.querySelectorAll(".stat-box h3");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.dataset.target;
        let current = 0;

        const increment = () => {
          if (current < target) {
            current++;
            counter.textContent = current + "%";
            requestAnimationFrame(increment);
          }
        };

        increment();
        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach(counter => observer.observe(counter));


const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    items.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      }
    });

    item.classList.toggle("active");
    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});


// Toggle subscription expand
// On load: show all open cards
// INITIAL LOAD: open only checked subscription
document.querySelectorAll('.subscription-card').forEach(card => {
  const body = card.querySelector('.sub-body');
  const isChecked = card.querySelector('.sub-header input')?.checked;

  if (isChecked) {
    card.classList.add('active');
    body.style.display = 'block';
  } else {
    card.classList.remove('active');
    body.style.display = 'none';
  }
});

// ON CHANGE: only selected stays open
document.querySelectorAll('.sub-header input').forEach(input => {
  input.addEventListener('change', () => {
    document.querySelectorAll('.subscription-card').forEach(card => {
      card.classList.remove('active');
      card.querySelector('.sub-body').style.display = 'none';
    });

    const selected = input.closest('.subscription-card');
    selected.classList.add('active');
    selected.querySelector('.sub-body').style.display = 'block';
  });
});

// Fragrance active state
document.querySelectorAll('.fragrance-options').forEach(group => {
  group.addEventListener('click', e => {
    const item = e.target.closest('.fragrance');
    if (!item) return;

    group.querySelectorAll('.fragrance').forEach(f =>
      f.classList.remove('active')
    );

    item.classList.add('active');
  });
});
