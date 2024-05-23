import '/src/components/Character/Character.css'

export default function Character(character) {
  return (
    <div class="gallery align-items-center justify-content-center">
      <div className="card mb-3" style={{ width: '350px' }}>
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body bg-dark">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">{`Origin: ${character.origin && character.origin.name}`}</p>
            <p className="price">100€</p>
          <button class="character-btn">Añadir al Carrito<span className="material-symbols-outlined">shopping_cart</span></button>
      </div>
    </div>
    </div>
    
  );
}

