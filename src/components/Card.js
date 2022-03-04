export default function Card({ card }) {
  console.log(card);
  let title = card.title;
  let location = card.location;
  let img = card.coverImg;
  let rating = card.stats.rating;
  let reviewCount = card.stats.reviewCount;
  let price = card.price;
  let openSpots = card.openSpots;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT!";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <article className="card">
      <section className="card-image--section">
        <figure className="card-img-figure">
          {badgeText && <div className="card--badge">{badgeText}</div>}
          <img className="card-img" src={`/images/${img}`} alt="image12" />
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
            ({reviewCount})
          </section>
          <section className="card-rating-place">{location} </section>
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
