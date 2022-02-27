export default function Card(props) {
  let cardinfo = props.cardinfo;
  console.log(cardinfo);
  let image = cardinfo.img;
  let rating = cardinfo.rating;
  let reviewCount = cardinfo.reviewCount;
  let country = cardinfo.country;
  let title = cardinfo.title;
  let price = cardinfo.price;

  return (
    <article className="card">
      <section className="card-image--section">
        <figure className="card-img-figure">
          <img className="card-img" src={`/images/${image}`} alt="image12" />
          <section className="card-tag">TAG</section>
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
          <section className="card-rating-ratings">{rating}</section>
          <section className="card-rating-numberOfRatings">
            {reviewCount}
          </section>
          <section className="card-rating-place">- {country} </section>
        </section>
        <section className="text-info--section">
          <p className="infoText">{title}</p>
        </section>
        <section className="price--section">
          <p className="price">
            from ${price}
            <span className="aperson--section"> / person</span>
          </p>
        </section>
      </section>
    </article>
  );
}
