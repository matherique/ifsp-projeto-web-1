const disciplinas = document.querySelectorAll(".disciplina");

disciplinas.forEach(disciplina => {
  disciplina.addEventListener('click', function () {
    this.querySelector(".conteudo").classList.toggle('ativado');
    
    disciplinas.forEach(disc => {
      if (disc !== this) disc.querySelector(".conteudo").classList.remove("ativado");
    });

  });
});
