import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results.map(character => `
        <article class="card">
            <img class="card-img-top" src="${character.image}" alt="${character.name}">
            <div class="card-body">
          <a href="#/${character.id}/">
            <h2 class="btn btn-primary center d-flex justify-content-center">${character.name}</h2>
            </div>
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;