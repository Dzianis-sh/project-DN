// const btn = document.querySelector('.switch__checkbox');

// btn.addEventListener('click', function () {
//   document.body.classList.toggle('dark-theme');
// });

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.switch__checkbox').addEventListener('click', function () {
    document.querySelector('body').classList.toggle('dark-theme');
  });
});