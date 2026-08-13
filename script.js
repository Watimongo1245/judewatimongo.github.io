const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const projects = {
  robox: { title: 'RoboX: autonomous package handling', intro: 'A team-developed autonomous mobile robot that combines navigation, package handling and balancing within a 200 × 200 × 200 mm envelope.', sections: [['Challenge', 'Follow a line along arbitrary paths, identify colour-coded packages, pick, store and deliver them, and navigate obstacles while balancing a ping-pong ball.'], ['Engineering approach', 'Concept alternatives were screened through a weighted Pugh matrix. The final Rackbot combined rear two-wheel drive, a passive ball wheel, a rack-and-pinion pickup mechanism and a 2-axis gimbal.'], ['Hardware & development', 'The system used a SparkFun line-follower array, colour sensor, DC-motor encoders, servo motors, 12 V battery and PES/Nucleo board. CAD and 3D printing supported fabrication.']], tags: ['Autonomous robotics', 'Embedded hardware', 'CAD & fabrication', 'Sensors & actuation'] },
  hev: { title: 'Hybrid electric vehicle energy management', intro: 'An energy-optimisation project investigating real-time power-split control for a P2 hybrid vehicle.', sections: [['Approach', 'Designed and implemented an optimal energy-management strategy using Pontryagin’s Minimum Principle and Equivalent Consumption Minimization Strategy (ECMS).'], ['Control implementation', 'Built a MATLAB/Simulink controller with a PI-based adaptive equivalence factor to improve battery state-of-charge tracking.'], ['Validation', 'Evaluated controller behaviour on WLTC and SORT cycles, demonstrating robust SOC control and fuel-efficiency improvements across driving cycles.']], tags: ['MATLAB', 'Simulink', 'Optimal control', 'Sustainable mobility'] }
};
const dialog = document.querySelector('.project-dialog');
const dialogContent = document.querySelector('#dialog-content');
document.querySelectorAll('.project-open').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  dialogContent.innerHTML = `<div class="dialog-body"><p class="project-type">Project notes</p><h2 id="dialog-title">${project.title}</h2><p>${project.intro}</p>${project.sections.map(([heading, text]) => `<h3>${heading}</h3><p>${text}</p>`).join('')}<div class="tag-row">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div></div>`;
  dialog.showModal();
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
