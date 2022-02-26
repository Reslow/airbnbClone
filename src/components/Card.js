export default function Card() {
  return (
    <article className="card">
      <section className="card-image--section">
        <figure className="card-img-figure">
          <img className="card-img" src="/images/image12.png" alt="image12" />
          <section className="card-tag">
            <p className="card-tag--p">Sold out!</p>
          </section>
        </figure>
      </section>
      <section className="card-text--section">
        <section className="card-rating--section">
          <section className="card-rating-symbol">
            <img
              className="rating-symbol"
              src="/images/star.png"
              alt="ratingstar"
            />
          </section>
          <section className="card-rating-ratings">5.0</section>
          <section className="card-rating-numberOfRatings">(6)</section>
          <section className="card-rating-place">- USA </section>
        </section>
        <section className="text-info--section">
          <p className="infoText">Life lessons with Katie zaferes</p>
        </section>
        <section className="price--section">
          <p className="price">
            from $100
            <span className="aperson--section"> / person</span>
          </p>
        </section>
      </section>
    </article>
  );
}
