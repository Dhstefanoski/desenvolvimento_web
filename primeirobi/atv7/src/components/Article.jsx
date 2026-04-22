function Article({ titulo, autor, data, conteudo }) {
  return (
    <main>
      <article>
        <h2>{titulo}</h2>
        <p><strong>Autor:</strong> {autor}</p>
        <time>{data}</time>
        <p>{conteudo}</p>
        <figure>
          <img src="https://via.placeholder.com/600x300?text=Laranja+de+Tenis" alt="Uma laranja usando um tênis miniatura" />
          <figcaption>Figura 1: Exemplo de laranja com design esportivo.</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Article;
