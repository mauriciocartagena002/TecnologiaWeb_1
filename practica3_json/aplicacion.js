async function populate() {
  const requestURL = 'https://raw.githubusercontent.com/mauriciocartagena002/TecnologiaWeb_1/main/practica3_json/aplicacion.json';

  const response = await fetch(requestURL);
  const turismo = await response.json();

  populateHeader(turismo);
  populateLugares(turismo);
}

function populateHeader(obj) {
  const header = document.querySelector('header');

  const myH1 = document.createElement('h1');
  myH1.textContent = obj.titulo;
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `País: ${obj.pais} | Actualizado: ${obj.actualizado}`;
  header.appendChild(myPara);
}

function populateLugares(obj) {
  const section = document.querySelector('section');
  const lugares = obj.lugares;

  for (const lugar of lugares) {
    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.textContent = lugar.lugar;

    const p1 = document.createElement('p');
    p1.textContent = `📍 Ubicación: ${lugar.ubicacion}`;

    const p2 = document.createElement('p');
    p2.textContent = `📝 Descripción: ${lugar.descripcion}`;

    const p3 = document.createElement('p');
    p3.textContent = '⏰ Horarios de atención:';

    const ul = document.createElement('ul');

    for (const horario of lugar.horarios) {
      const li = document.createElement('li');
      li.textContent = horario;
      ul.appendChild(li);
    }

    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(ul);

    section.appendChild(article);
  }
}

populate();
