const backTop = document.querySelector("#voltar-inicio");

backTop.addEventListener('click', function () {
  document.documentElement.scrollTop = 0;
});
