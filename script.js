document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const destination = document.querySelector(link.getAttribute('href'));
    if (!destination) return;
    event.preventDefault();
    destination.scrollIntoView({ behavior: 'smooth' });
  });
});

const cutImageByName = {
  "Dégradé bas": ["degrade-bas-profil.jpg", "degrade-bas-dos.jpg"],
  "Dégradé moyen": ["degrade-moyen-profil.jpg", "degrade-moyen-dos.jpg"],
  "Dégradé haut": ["degrade-haut-profil.jpg", "degrade-haut-dos.jpg"],
  "Dégradé à blanc": ["degrade-blanc-profil.jpg", "degrade-blanc-dos.jpg"],
  "Skin fade": ["skin-fade-profil.jpg", "skin-fade-dos.jpg"],
  "Drop fade": ["drop-fade-profil.jpg", "drop-fade-dos.jpg"],
  "Burst fade": ["burst-fade-profil.jpg", "burst-fade-dos.jpg"],
  "Shadow fade": ["shadow-fade-profil.jpg", "shadow-fade-dos.jpg"],
  "Temp fade": ["temp-fade-profil.jpg", "temp-fade-dos.jpg"],
  "Dégradé américain": ["degrade-americain-profil.jpg", "degrade-americain-dos.jpg"],
  "Dégradé espagnol": ["degrade-espagnol-profil.jpg", "degrade-espagnol-dos.jpg"],
  "Dégradé avec raie": ["degrade-raie-profil.jpg", "degrade-raie-dos.jpg"],
  "Dégradé progressif": ["degrade-progressif-profil.jpg", "degrade-progressif-dos.jpg"],
  "Dégradé en V": ["degrade-v-profil.jpg", "degrade-v-dos.jpg"],
  "Dégradé arrondi": ["degrade-arrondi-profil.jpg", "degrade-arrondi-dos.jpg"],
  "Temp taper": ["temp-taper-profil.jpg", "temp-taper-dos.jpg"],
  "Taper nuque": ["taper-nuque-profil.jpg", "taper-nuque-dos.jpg"],
  "Taper bouclé": ["taper-boucle-profil.jpg", "taper-boucle-dos.jpg"],
  "Taper afro": ["taper-afro-profil.jpg", "taper-afro-dos.jpg"],
  "Taper twists": ["taper-twists-profil.jpg", "taper-twists-dos.jpg"],
  "Taper waves": ["taper-waves-profil.jpg", "taper-waves-dos.jpg"],
  "Taper crop": ["taper-crop-profil.jpg", "taper-crop-dos.jpg"],
  "Taper slick back": ["taper-slick-back-profil.jpg", "taper-slick-back-dos.jpg"],
  "Mini taper": ["mini-taper-profil.jpg", "mini-taper-dos.jpg"],
  "Taper avec raie": ["taper-avec-raie-profil.jpg", "taper-avec-raie-dos.jpg"],
    "Buzz cut": ["buzz-cut-profil.jpg", "buzz-cut-dos.jpg"],
    "Crew cut": ["crew-cut-profil.jpg", "crew-cut-dos.jpg"],
    "French crop": ["french-crop-profil.jpg", "french-crop-dos.jpg"],
    "Coupe César": ["coupe-cesar-profil.jpg", "coupe-cesar-dos.jpg"],
    "Ivy League": ["ivy-league-profil.jpg", "ivy-league-dos.jpg"],
    "Coupe militaire": ["coupe-militaire-profil.jpg", "coupe-militaire-dos.jpg"],
    "Crop texturé": ["crop-texture-profil.jpg", "crop-texture-dos.jpg"],
    "Coupe rasée": ["coupe-rasee-profil.jpg", "coupe-rasee-dos.jpg"],
    "Undercut court": ["undercut-court-profil.jpg", "undercut-court-dos.jpg"],
    "Flat top": ["flat-top-profil.jpg", "flat-top-dos.jpg"],
    "High and tight": ["high-and-tight-profil.jpg", "high-and-tight-dos.jpg"],
    "Coupe au sabot": ["coupe-au-sabot-profil.jpg", "coupe-au-sabot-dos.jpg"],
    "Crop fade": ["crop-fade-profil.jpg", "crop-fade-dos.jpg"],
    "Coupe courte avec raie": ["coupe-courte-raie-profil.jpg", "coupe-courte-raie-dos.jpg"],
    "Coupe courte bouclée": ["coupe-courte-bouclee-profil.jpg", "coupe-courte-bouclee-dos.jpg"],
  "Barbe courte": ["barbe-courte-face.jpg", "barbe-courte-trois-quarts.jpg"],
  "Moustache chevron": ["moustache-chevron-face.jpg", "moustache-chevron-trois-quarts.jpg"],
  "Barbe de trois jours": ["barbe-trois-jours-face.jpg", "barbe-trois-jours-trois-quarts.jpg"],
  "Moustache guidon": ["moustache-guidon-face.jpg", "moustache-guidon-trois-quarts.jpg"],
  "Barbe pleine": ["barbe-pleine-face.jpg", "barbe-pleine-trois-quarts.jpg"],
  "Moustache crayon": ["moustache-crayon-face.jpg", "moustache-crayon-trois-quarts.jpg"],
  "Barbe sculptée": ["barbe-sculptee-face.jpg", "barbe-sculptee-trois-quarts.jpg"],
  "Moustache fer à cheval": ["moustache-fer-a-cheval-face.jpg", "moustache-fer-a-cheval-trois-quarts.jpg"],
  "Barbe dégradée": ["barbe-degradee-face.jpg", "barbe-degradee-trois-quarts.jpg"],
  "Moustache en brosse": ["moustache-brosse-face.jpg", "moustache-brosse-trois-quarts.jpg"],
  "Barbe longue": ["barbe-longue-face.jpg", "barbe-longue-trois-quarts.jpg"],
  "Barbe Van Dyke": ["barbe-van-dyke-face.jpg", "barbe-van-dyke-trois-quarts.jpg"],
  "Moustache naturelle": ["moustache-naturelle-face.jpg", "moustache-naturelle-trois-quarts.jpg"],
  "Barbe ancre": ["barbe-ancre-face.jpg", "barbe-ancre-trois-quarts.jpg"],
  "Barbe Balbo": ["barbe-balbo-face.jpg", "barbe-balbo-trois-quarts.jpg"],
  "Taper classique": ["taper-classique-profil.jpg", "taper-classique-dos.jpg"],
  "Low taper": ["low-taper-profil.jpg", "low-taper-dos.jpg"],
  "Mid taper": ["mid-taper-profil.jpg", "mid-taper-dos.jpg"],
  "High taper": ["high-taper-profil.jpg", "high-taper-dos.jpg"],
  "Taper fade": ["taper-fade-profil.jpg", "taper-fade-dos.jpg"]
};

const cutGroups = {
  "Dégradés": ["Dégradé bas", "Dégradé moyen", "Dégradé haut", "Dégradé à blanc", "Skin fade", "Drop fade", "Burst fade", "Shadow fade", "Temp fade", "Dégradé américain", "Dégradé espagnol", "Dégradé avec raie", "Dégradé progressif", "Dégradé en V", "Dégradé arrondi"],
  "Tapers": ["Taper classique", "Low taper", "Mid taper", "High taper", "Taper fade", "Temp taper", "Taper nuque", "Taper bouclé", "Taper afro", "Taper twists", "Taper waves", "Taper crop", "Taper slick back", "Mini taper", "Taper avec raie"],
  "Coupes courtes": ["Buzz cut", "Crew cut", "French crop", "Coupe César", "Ivy League", "Coupe militaire", "Crop texturé", "Coupe rasée", "Undercut court", "Flat top", "High and tight", "Coupe au sabot", "Crop fade", "Coupe courte avec raie", "Coupe courte bouclée"],
  "Barbes et moustaches": ["Barbe courte", "Moustache chevron", "Barbe de trois jours", "Moustache guidon", "Barbe pleine", "Moustache crayon", "Barbe sculptée", "Moustache fer à cheval", "Barbe dégradée", "Moustache en brosse", "Barbe longue", "Barbe Van Dyke", "Moustache naturelle", "Barbe ancre", "Barbe Balbo"]
};

document.querySelectorAll('[data-cut-category]').forEach((section) => {
  const category = section.dataset.cutCategory;
  const names = cutGroups[category] || [];
  const heading = document.createElement('div');
  heading.className = 'catalog-row-heading';
  heading.innerHTML = `<h2>${category}</h2><span>${String(names.length).padStart(2, '0')} styles</span>`;
  const track = document.createElement('div');
  track.className = 'catalog-track';
  track.tabIndex = 0;
  track.setAttribute('aria-label', `${category}, faire défiler horizontalement`);
  names.forEach((name, index) => {
    const card = document.createElement('article');
    card.className = 'catalog-cut-card';
    if (name === "Coupe courte avec raie") card.classList.add("compact-title");
    card.innerHTML = `<span class="catalog-cut-number">${String(index + 1).padStart(2, '0')}</span><span class="catalog-cut-tag">STREET COUPE</span><h3>${name}</h3><div class="catalog-cut-price"><span>PRIX</span><strong>En attente</strong></div>`;
    if (["Coupe courte avec raie", "Moustache fer à cheval"].includes(name)) {
      const title = card.querySelector("h3");
      title.style.fontSize = "15px";
      title.style.lineHeight = "1.05";
    }
    const cutImages = cutImageByName[name];
    if (cutImages) {
      card.classList.add("has-cut-image");
      const visual = document.createElement("div");
      visual.className = "catalog-cut-visual";
      const isBeardCard = category === "Barbes et moustaches";
      const firstView = isBeardCard ? "face" : "profil";
      const secondView = isBeardCard ? "trois-quarts" : "dos";
      const firstLabel = isBeardCard ? "FACE" : "3/4";
      const secondAction = isBeardCard ? "Voir la vue 3/4" : "Voir le dos";
      visual.innerHTML = '<img class="catalog-cut-image" src="images/coupes/' + cutImages[0] + '" data-front="images/coupes/' + cutImages[0] + '" data-back="images/coupes/' + cutImages[1] + '" data-first-view="' + firstView + '" data-second-view="' + secondView + '" data-view="' + firstView + '" data-description="' + name + ' sur mannequin blanc" alt="' + name + ' vue ' + firstView + '" loading="lazy"><span class="cut-angle">' + firstLabel + '</span><button class="cut-image-toggle" type="button" aria-label="' + secondAction + '">' + secondAction + ' <span>↻</span></button>';
      card.prepend(visual);
    }
    track.append(card);
  });
  section.append(heading, track);
});
const clientReviews = [
  { name: "Damien Danna", date: "il y a 2 semaines", text: "Je suis allez ce matin. ! Le premier a passer ! Sincèrement je vous le recommande! Malgrée que je n'habite pas a coter j'y retournerais!!! Merci encore bon boulot !" },
  { name: "Thomas Lecreux", date: "il y a 2 ans", text: "J’ai l’habitude d’aller dans ce salon, je me fait toujours coiffer par le plus jeune sachant qu’il gère bien les taper et les dégrader espagnol ,et là aujourd’hui c’était l’ancien, j’ai demander un taper mélanger à un burst fade je voulais …" },
  { name: "Thibault Querquand", date: "il y a 5 mois", text: "Rapide, pas cher et on ressors avec une belle barbe et une belle coupe. C’est tout ce qu’on demande c’est top" }
];
const reviewsTrack = document.querySelector('#reviews-track');
if (reviewsTrack) {
  clientReviews.forEach((review) => {
    const card = document.createElement('article');
    card.className = 'review-slide';
    const top = document.createElement('div');
    top.className = 'review-slide-top';
    const stars = document.createElement('span');
    stars.className = 'stars';
    stars.textContent = '★★★★★';
    const dateLabel = document.createElement('span');
    dateLabel.textContent = review.date;
    top.append(stars, dateLabel);
    const quote = document.createElement('p');
    quote.className = 'review-slide-text';
    quote.textContent = review.text;
    const bottom = document.createElement('div');
    bottom.className = 'review-slide-bottom';
    const reviewer = document.createElement('strong');
    reviewer.textContent = review.name;
    const date = document.createElement('span');
    date.textContent = 'Google';
    bottom.append(reviewer, date);
    card.append(top, quote, bottom);
    reviewsTrack.append(card);
  });
}



document.addEventListener("click", (event) => {
  const button = event.target.closest(".cut-image-toggle");
  if (!button) return;
  const visual = button.closest(".cut-visual, .catalog-cut-visual");
  const image = visual?.querySelector("img");
  if (!image) return;
  const firstView = image.dataset.firstView || "profil";
  const secondView = image.dataset.secondView || "dos";
  const nextView = image.dataset.view === firstView ? secondView : firstView;
  image.src = nextView === secondView ? image.dataset.back : image.dataset.front;
  image.dataset.view = nextView;
  image.alt = (image.dataset.description || "Coupe sur mannequin blanc") + ", vue " + nextView;
  const angleLabel = (view) => view === "face" ? "FACE" : (view === "dos" ? "DOS" : "3/4");
  visual.querySelector(".cut-angle").textContent = angleLabel(nextView);
  const actionLabel = nextView === firstView ? (secondView === "trois-quarts" ? "Voir la vue 3/4" : "Voir le dos") : (firstView === "face" ? "Voir la face" : "Voir la vue 3/4");
  button.innerHTML = actionLabel + " <span>↻</span>";
  button.setAttribute("aria-label", actionLabel);
});

document.querySelectorAll(".service-one, .service-two").forEach((service) => {
  service.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.assign(new URL("./coupes.html", document.baseURI).href);
  });
});
