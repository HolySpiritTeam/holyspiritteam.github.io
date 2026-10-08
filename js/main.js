/* =====================================================================
   HOLY SPIRIT TEAM — FONCTIONNEMENT DU SITE
   Ce fichier affiche le contenu des fichiers du dossier data/, modifiés
   depuis l'espace administrateur (Pages CMS). Inutile de le modifier
   pour mettre à jour les informations du site.
   ===================================================================== */

(function () {
  "use strict";

  const FICHIERS = ["site", "departements", "actualites", "evenements", "galerie", "videos"];
  let S = {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------- Icônes (SVG) ---------- */
  const ICONES = {
    musique: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    micro: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
    priere: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    croix: '<path d="M12 2v20M6 8h12"/>',
    coeur: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    mains: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2M15 18l-2-2"/>',
    cadeau: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    livre: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    groupe: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    colombe: '<path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
    video: '<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    play: '<path d="M6 3l14 9-14 9V3z" fill="currentColor"/>',
    lieu: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    heure: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    tel: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    whatsapp: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    tiktok: '<path d="M9 12a4 4 0 1 0 4 4V2c.5 2.5 2.5 4.5 5 5"/>'
  };
  const icone = (nom) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONES[nom] || ICONES.colombe}</svg>`;

  /* ---------- Utilitaires ---------- */
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const liste = (x) => (Array.isArray(x) ? x : []);
  const MOIS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
  const lireDate = (d) => { const [a, m, j] = String(d).split("-").map(Number); return new Date(a, (m || 1) - 1, j || 1); };
  const dateLongue = (d) => lireDate(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  const remplacement = (nomIcone, texte, variante = "") =>
    `<div class="placeholder ${variante}">${icone(nomIcone)}${texte ? `<small>${esc(texte)}</small>` : ""}</div>`;
  const VARIANTES = ["", "placeholder--alt", "placeholder--warm"];
  const texte = (id, valeur) => { const el = document.getElementById(id); if (el) el.textContent = valeur || ""; };
  const html = (id, contenu) => { const el = document.getElementById(id); if (el) el.innerHTML = contenu; };

  function idYoutube(url) {
    if (!url) return "";
    const m = String(url).match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([\w-]{11})/);
    return m ? m[1] : (/^[\w-]{11}$/.test(url) ? url : "");
  }

  /* ---------- Identité ---------- */
  function identite() {
    if (S.nom) {
      $$("[data-nom]").forEach((el) => (el.textContent = S.nom));
      document.title = `${S.nom} — Louange, Évangélisation & Œuvres sociales`;
    }
    if (S.logo) $$("[data-logo]").forEach((el) => (el.src = S.logo));
    if (S.icone) $$("[data-icone]").forEach((el) => (el.src = S.icone));
    texte("footer-slogan", S.slogan);
    texte("annee", new Date().getFullYear());
  }

  /* ---------- Accueil & verset ---------- */
  function accueil() {
    const a = S.accueil || {};
    texte("hero-surtitre", a.surtitre);
    texte("hero-titre", a.titre);
    texte("hero-texte", a.texte);
    const boutons = [];
    if (a.boutonPrincipal) boutons.push(`<a class="btn btn--gold" href="${esc(a.boutonPrincipal.lien)}">${esc(a.boutonPrincipal.texte)}</a>`);
    if (a.boutonSecondaire) boutons.push(`<a class="btn btn--outline" href="${esc(a.boutonSecondaire.lien)}">${esc(a.boutonSecondaire.texte)}</a>`);
    html("hero-actions", boutons.join(""));
    if (a.image) {
      const bg = $("#hero-bg");
      bg.style.backgroundImage = `url("${a.image}")`;
      bg.classList.add("has-image");
    }
    const v = S.verset || {};
    texte("verset-texte", v.texte);
    texte("verset-ref", v.reference);
    if (!v.texte) $("#verset").remove();
  }

  /* ---------- À propos & valeurs ---------- */
  function apropos() {
    const a = S.apropos || {};
    texte("apropos-titre", a.titre);
    html("apropos-texte", liste(a.paragraphes).map((p) => `<p>${esc(p)}</p>`).join(""));
    html("apropos-media", a.image
      ? `<img src="${esc(a.image)}" alt="L'équipe ${esc(S.nom)}" loading="lazy">`
      : remplacement("groupe", "Photo de l'équipe"));
    html("apropos-chiffres", liste(a.chiffres).map((c) =>
      `<div class="stat"><strong>${esc(c.valeur)}</strong><span>${esc(c.label)}</span></div>`).join(""));

    html("valeurs", liste(S.valeurs).map((v) => `
      <article class="card card--value reveal">
        <div class="card__icon">${icone(v.icone)}</div>
        <h3>${esc(v.titre)}</h3>
        <p>${esc(v.texte)}</p>
      </article>`).join(""));
  }

  /* ---------- Départements ---------- */
  function departements() {
    html("departements-liste", liste(S.departements).map((d) => `
      <article class="card reveal">
        <div class="card__icon">${icone(d.icone)}</div>
        <h3>${esc(d.nom)}</h3>
        <p>${esc(d.description)}</p>
        ${d.responsable ? `<p class="card__meta">Responsable : ${esc(d.responsable)}</p>` : ""}
      </article>`).join(""));
  }

  /* ---------- Actualités ---------- */
  function actualites() {
    const items = liste(S.actualites).slice().sort((a, b) => lireDate(b.date) - lireDate(a.date));
    html("actualites-liste", items.length ? items.map((n, i) => `
      <article class="card card--media reveal">
        <div class="card__media">
          ${n.image ? `<img src="${esc(n.image)}" alt="${esc(n.titre)}" loading="lazy">` : remplacement("image", "", VARIANTES[i % 3])}
        </div>
        <div class="card__body">
          <div class="card__date">${esc(dateLongue(n.date))}</div>
          <h3>${esc(n.titre)}</h3>
          <p>${esc(n.resume)}</p>
          ${n.lien ? `<a class="card__link" href="${esc(n.lien)}" target="_blank" rel="noopener">Lire la suite →</a>` : ""}
        </div>
      </article>`).join("") : `<p class="empty">Aucune actualité pour le moment.</p>`);
  }

  /* ---------- Événements (seuls ceux à venir) ---------- */
  function evenements() {
    const aujourdhui = new Date(); aujourdhui.setHours(0, 0, 0, 0);
    const items = liste(S.evenements)
      .filter((e) => lireDate(e.date) >= aujourdhui)
      .sort((a, b) => lireDate(a.date) - lireDate(b.date));
    html("evenements-liste", items.length ? items.map((e) => {
      const d = lireDate(e.date);
      return `
      <article class="event reveal">
        <div class="event__date"><strong>${d.getDate()}</strong><span>${MOIS[d.getMonth()]} ${d.getFullYear()}</span></div>
        <div>
          <h3>${esc(e.titre)}</h3>
          <p class="event__meta">
            ${e.heure ? `<span>${icone("heure")}${esc(e.heure)}</span>` : ""}
            ${e.lieu ? `<span>${icone("lieu")}${esc(e.lieu)}</span>` : ""}
          </p>
          <p>${esc(e.description)}</p>
        </div>
      </article>`;
    }).join("") : `<p class="empty">Aucun événement programmé pour le moment. Revenez bientôt !</p>`);
  }

  /* ---------- Galerie ---------- */
  let galerieVisible = [];
  function galerie(filtre = "Tout") {
    const toutes = liste(S.galerie);
    const categories = ["Tout", ...new Set(toutes.map((p) => p.categorie).filter(Boolean))];
    html("galerie-filtres", categories.length > 2 ? categories.map((c) =>
      `<button class="filter${c === filtre ? " is-active" : ""}" data-filtre="${esc(c)}">${esc(c)}</button>`).join("") : "");

    galerieVisible = toutes.filter((p) => filtre === "Tout" || p.categorie === filtre);
    html("galerie-liste", galerieVisible.length ? galerieVisible.map((p, i) => `
      <button class="gallery__item" data-index="${i}" aria-label="Agrandir : ${esc(p.legende)}">
        ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.legende)}" loading="lazy">` : remplacement("camera", "Ajoutez votre photo", VARIANTES[i % 3])}
        ${p.legende ? `<span class="gallery__caption">${esc(p.legende)}</span>` : ""}
      </button>`).join("") : `<p class="empty">Aucune photo pour le moment.</p>`);

    $$("#galerie-filtres .filter").forEach((b) => b.addEventListener("click", () => galerie(b.dataset.filtre)));
    $$("#galerie-liste .gallery__item").forEach((b) => b.addEventListener("click", () => ouvrirPhoto(+b.dataset.index)));
  }

  /* ---------- Vidéos ---------- */
  function videos() {
    const items = liste(S.videos);
    html("videos-liste", items.length ? items.map((v, i) => {
      const id = idYoutube(v.youtube);
      let media;
      if (id) {
        media = `<img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="${esc(v.titre)}" loading="lazy">
                 <button class="play" data-video="${i}" aria-label="Lire : ${esc(v.titre)}"><span>${icone("play")}</span></button>`;
      } else if (v.fichier) {
        media = `<video src="${esc(v.fichier)}" preload="metadata" muted></video>
                 <button class="play" data-video="${i}" aria-label="Lire : ${esc(v.titre)}"><span>${icone("play")}</span></button>`;
      } else {
        media = remplacement("video", "Vidéo à venir", VARIANTES[i % 3]);
      }
      return `
      <article class="card card--media reveal">
        <div class="card__media">${media}</div>
        <div class="card__body"><h3>${esc(v.titre)}</h3></div>
      </article>`;
    }).join("") : `<p class="empty">Aucune vidéo pour le moment.</p>`);

    $$("#videos-liste .play").forEach((b) => b.addEventListener("click", () => ouvrirVideo(items[+b.dataset.video])));
  }

  /* ---------- Rejoindre & soutenir ---------- */
  function engagement() {
    const r = S.rejoindre || {};
    texte("rejoindre-titre", r.titre);
    texte("rejoindre-texte", r.texte);
    const btn = $("#rejoindre-bouton");
    if (r.bouton) { btn.textContent = r.bouton.texte; btn.href = r.bouton.lien; } else btn.remove();

    const s = S.soutenir;
    if (!s) { $("#soutenir").remove(); return; }
    texte("soutenir-titre", s.titre);
    texte("soutenir-texte", s.texte);
    html("soutenir-moyens", liste(s.moyens).map((m) =>
      `<li><strong>${esc(m.titre)}</strong><span>${esc(m.details)}</span></li>`).join(""));
  }

  /* ---------- Contact & réseaux ---------- */
  function contact() {
    const c = S.contact || {};
    const lignes = [];
    if (c.adresse) lignes.push(["lieu", "Adresse", esc(c.adresse)]);
    if (c.telephone) lignes.push(["tel", "Téléphone", `<a href="tel:${esc(c.telephone.replace(/\s/g, ""))}">${esc(c.telephone)}</a>`]);
    if (c.whatsapp) lignes.push(["whatsapp", "WhatsApp", `<a href="https://wa.me/${esc(c.whatsapp)}" target="_blank" rel="noopener">Écrire sur WhatsApp</a>`]);
    if (c.email) lignes.push(["mail", "E-mail", `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`]);
    if (c.horaires) lignes.push(["heure", "Rencontres", esc(c.horaires)]);
    html("contact-liste", lignes.map(([ico, label, val]) =>
      `<li><span class="ico">${icone(ico)}</span><div><small>${label}</small>${val}</div></li>`).join(""));

    const r = S.reseaux || {};
    const reseaux = ["facebook", "youtube", "instagram", "tiktok"].filter((k) => r[k])
      .map((k) => `<a href="${esc(r[k])}" target="_blank" rel="noopener" aria-label="${k}">${icone(k)}</a>`).join("");
    html("contact-reseaux", reseaux);
    html("footer-reseaux", reseaux);

    // Formulaire : Formspree si configuré, sinon ouverture de la messagerie.
    const form = $("#contact-form");
    const statut = $("#form-status");
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const d = Object.fromEntries(new FormData(form));
      statut.className = "form__status";
      if (c.formspree) {
        statut.textContent = "Envoi en cours…";
        try {
          const rep = await fetch(c.formspree, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
          if (!rep.ok) throw new Error();
          form.reset();
          statut.textContent = "Merci ! Votre message a bien été envoyé. Que Dieu vous bénisse.";
          statut.classList.add("ok");
        } catch {
          statut.textContent = "Désolé, l'envoi a échoué. Veuillez réessayer ou nous écrire directement par e-mail.";
          statut.classList.add("err");
        }
      } else {
        const corps = `${d.message}\n\n— ${d.nom} (${d.email})`;
        window.location.href = `mailto:${c.email || ""}?subject=${encodeURIComponent(`[Site] ${d.objet}`)}&body=${encodeURIComponent(corps)}`;
        statut.textContent = "Votre messagerie s'ouvre pour envoyer le message.";
        statut.classList.add("ok");
      }
    });
  }

  /* ---------- Visionneuse ---------- */
  const lb = $("#lightbox");
  const lbContenu = $("#lightbox-content");
  let indexPhoto = -1;

  function ouvrir() { lb.hidden = false; document.body.style.overflow = "hidden"; }
  function fermer() { lb.hidden = true; lbContenu.innerHTML = ""; document.body.style.overflow = ""; indexPhoto = -1; }

  function ouvrirPhoto(i) {
    indexPhoto = (i + galerieVisible.length) % galerieVisible.length;
    const p = galerieVisible[indexPhoto];
    lbContenu.innerHTML = (p.image ? `<img src="${esc(p.image)}" alt="${esc(p.legende)}">` : remplacement("camera", "Ajoutez votre photo dans contenu.js"))
      + (p.legende ? `<p>${esc(p.legende)}</p>` : "");
    $$(".lightbox__nav", lb).forEach((b) => (b.hidden = galerieVisible.length < 2));
    ouvrir();
  }

  function ouvrirVideo(v) {
    const id = idYoutube(v.youtube);
    lbContenu.innerHTML = (id
      ? `<div class="lightbox__video"><iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${esc(v.titre)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
         <p>${esc(v.titre)} — <a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">voir sur YouTube</a></p>`
      : `<div class="lightbox__video"><video src="${esc(v.fichier)}" controls autoplay></video></div><p>${esc(v.titre)}</p>`);
    $$(".lightbox__nav", lb).forEach((b) => (b.hidden = true));
    ouvrir();
  }

  $(".lightbox__close").addEventListener("click", fermer);
  $(".lightbox__nav--prev").addEventListener("click", () => ouvrirPhoto(indexPhoto - 1));
  $(".lightbox__nav--next").addEventListener("click", () => ouvrirPhoto(indexPhoto + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) fermer(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") fermer();
    if (indexPhoto >= 0 && e.key === "ArrowLeft") ouvrirPhoto(indexPhoto - 1);
    if (indexPhoto >= 0 && e.key === "ArrowRight") ouvrirPhoto(indexPhoto + 1);
  });

  /* ---------- En-tête & menu mobile ---------- */
  function navigation() {
    const header = $("#header");
    const toggle = $(".nav-toggle");
    const majHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
    majHeader();
    window.addEventListener("scroll", majHeader, { passive: true });

    toggle.addEventListener("click", () => {
      const ouvert = header.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", ouvert);
    });
    $$(".nav a").forEach((a) => a.addEventListener("click", () => {
      header.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  /* ---------- Animations d'apparition ---------- */
  function animations() {
    const elements = $$(".reveal");
    if (!("IntersectionObserver" in window)) { elements.forEach((el) => el.classList.add("is-visible")); return; }
    const obs = new IntersectionObserver((entrees) => {
      entrees.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); obs.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    elements.forEach((el) => obs.observe(el));
  }

  /* ---------- Lancement ---------- */
  navigation();

  Promise.all(FICHIERS.map((f) =>
    fetch(`data/${f}.json`, { cache: "no-cache" }).then((r) => {
      if (!r.ok) throw new Error(`data/${f}.json`);
      return r.json();
    })))
    .then(([site, dep, act, evt, gal, vid]) => {
      S = { ...site, departements: dep, actualites: act, evenements: evt, galerie: gal, videos: vid };
      identite();
      accueil();
      apropos();
      departements();
      actualites();
      evenements();
      galerie();
      videos();
      engagement();
      contact();
      animations();
    })
    .catch((err) => {
      console.error("Contenu introuvable :", err);
      texte("hero-titre", "Contenu momentanément indisponible");
      texte("hero-texte", location.protocol === "file:"
        ? "Le site doit être consulté en ligne (ou via un serveur local) : il ne fonctionne pas en ouvrant index.html directement."
        : "Merci de réessayer dans quelques instants.");
      $$(".reveal").forEach((el) => el.classList.add("is-visible"));
    });
})();
