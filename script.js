const ADMIN_PASSWORD = "SnowyMichael1";
const CHECKOUT_ENDPOINT = "/api/create-checkout";
const CHECKOUT_PROCESSOR_CONNECTED = false;

const products = [
  {
    id: "starter-access",
    name: "Starter Access",
    description: "5 videos, 25 images, and entry-level gallery unlocks.",
    price: 14.99,
    icon: "clapper",
  },
  {
    id: "premium-bundle",
    name: "Premium Bundle",
    description: "12 videos, 60 images, and priority access to new drops.",
    price: 29.99,
    icon: "star",
  },
  {
    id: "deluxe-collection",
    name: "Deluxe Collection",
    description: "25 videos, 120 images, and extended archive access.",
    price: 49.99,
    icon: "crown",
  },
  {
    id: "vip-pass",
    name: "VIP Pass",
    description: "All-access media, lifetime updates, and document library notices.",
    price: 99.99,
    icon: "diamond",
  },
];

const accessLabels = {
  "starter-access": "Starter Access",
  "premium-bundle": "Premium Bundle",
  "deluxe-collection": "Deluxe Collection",
  "vip-pass": "VIP Pass",
};

const videoAlbums = [
  {
    title: "Starter Access Album",
    access: "starter-access",
    bundle: "Starter Access",
    count: 5,
    duration: "58:20",
    tone: "warm",
    popularity: 70,
    description: "Entry-level video collection included with Starter Access.",
  },
  {
    title: "Premium Bundle Album",
    access: "premium-bundle",
    bundle: "Premium Bundle",
    count: 12,
    duration: "2:16:45",
    tone: "blue",
    popularity: 86,
    description: "Expanded premium video album for returning buyers.",
  },
  {
    title: "Deluxe Collection Album",
    access: "deluxe-collection",
    bundle: "Deluxe Collection",
    count: 25,
    duration: "4:54:10",
    tone: "red",
    popularity: 92,
    description: "Full deluxe video collection with extended archive content.",
  },
  {
    title: "VIP Pass Album",
    access: "vip-pass",
    bundle: "VIP Pass",
    count: 36,
    duration: "6:38:00",
    tone: "gold",
    popularity: 96,
    description: "Main VIP video vault included with the VIP Pass.",
  },
  {
    title: "VIP After Hours",
    access: "vip-pass",
    bundle: "VIP Pass",
    count: 14,
    duration: "2:21:18",
    tone: "blue",
    popularity: 93,
    vipExtra: true,
    description: "VIP-only bonus album for late-night premium drops.",
  },
  {
    title: "VIP Private Vault",
    access: "vip-pass",
    bundle: "VIP Pass",
    count: 18,
    duration: "3:08:44",
    tone: "red",
    popularity: 95,
    vipExtra: true,
    description: "Additional VIP-only archive album with locked vault sessions.",
  },
  {
    title: "VIP Moon Archive",
    access: "vip-pass",
    bundle: "VIP Pass",
    count: 21,
    duration: "3:46:30",
    tone: "gold",
    popularity: 94,
    vipExtra: true,
    description: "VIP-only extended archive album for all-access members.",
  },
];

const imageAlbums = [
  {
    title: "Starter Access Images",
    access: "starter-access",
    bundle: "Starter Access",
    count: 25,
    popularity: 72,
    description: "Starter image album included with the entry bundle.",
  },
  {
    title: "Premium Bundle Images",
    access: "premium-bundle",
    bundle: "Premium Bundle",
    count: 60,
    popularity: 85,
    description: "Premium gallery album with expanded image access.",
  },
  {
    title: "Deluxe Collection Images",
    access: "deluxe-collection",
    bundle: "Deluxe Collection",
    count: 120,
    popularity: 91,
    description: "Deluxe image album with extended archive galleries.",
  },
  {
    title: "VIP Pass Images",
    access: "vip-pass",
    bundle: "VIP Pass",
    count: 180,
    popularity: 96,
    description: "Main VIP all-access gallery album.",
  },
  {
    title: "VIP Velvet Set",
    access: "vip-pass",
    bundle: "VIP Pass",
    count: 54,
    popularity: 93,
    vipExtra: true,
    description: "VIP-only bonus image collection with premium styling.",
  },
  {
    title: "VIP Locked Gallery",
    access: "vip-pass",
    bundle: "VIP Pass",
    count: 72,
    popularity: 95,
    vipExtra: true,
    description: "Additional VIP-only locked image album.",
  },
  {
    title: "VIP Moon Archive",
    access: "vip-pass",
    bundle: "VIP Pass",
    count: 96,
    popularity: 94,
    vipExtra: true,
    description: "VIP-only archive album for all-access members.",
  },
];

const uploadedMediaUrls = [];
const PHOTO_FEED_STORAGE_KEY = "stephsitePhotoFeed";
const PHOTO_EDITOR_MAX_SIZE = 1800;
const DEFAULT_PHOTO_SETTINGS = {
  brightness: 100,
  contrast: 100,
  saturation: 100,
  hue: 0,
  warmth: 0,
  grayscale: 0,
  sepia: 0,
  blur: 0,
  vignette: 0,
  pixelate: 1,
  frameWidth: 0,
  frameColor: "#e0ad5a",
  watermark: false,
};

let cart = [];
let photoFeed = [];
let photoEditorState = {
  image: null,
  fileName: "",
  originalDataUrl: "",
  baseDataUrl: "",
  settings: { ...DEFAULT_PHOTO_SETTINGS },
  history: [],
  historyIndex: -1,
  drawing: false,
  activeTool: "brush",
  lastPoint: null,
};
let documents = [
  {
    id: "sample-consent-standards",
    name: "Consent Standards.pdf",
    type: "PDF",
    size: "245 KB",
    uploaded: "Apr 20, 2026",
    url: "",
    previewable: true,
    previewTitle: "Consent Standards",
    previewBody: [
      "All contract records shown here are demo documents for the static site template.",
      "Use this area for consent records, release forms, usage terms, and publication approvals that are authorized for review.",
      "Uploaded PDFs render inline. Uploaded DOCX files are converted into a readable text preview when the browser supports DOCX extraction.",
    ],
  },
  {
    id: "sample-model-release",
    name: "Model Release Form.docx",
    type: "DOCX",
    size: "112 KB",
    uploaded: "Apr 28, 2026",
    url: "",
    previewable: true,
    previewTitle: "Model Release Form",
    previewBody: [
      "Performer name, stage name, release scope, dates, distribution channels, and revocation terms would appear in this document preview.",
      "This sample row is not a real Word file. Upload a DOCX to preview extracted text from the actual document.",
      "Legacy .doc files can be stored and downloaded, but browser-side text preview is limited to DOCX.",
    ],
  },
];

const icons = {
  clapper:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12v13H6V7ZM8 4l10 3M12 7l1.5-2.2M15 7l1.5-1.2M9 7l.8-3"/></svg>',
  star:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2l-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>',
  crown:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18h16M5 8l4 4 3-6 3 6 4-4-1.5 10h-11L5 8Z"/></svg>',
  diamond:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12l4 6-10 10L2 10l4-6ZM2 10h20M8 4l-2 6 6 10 6-10-2-6"/></svg>',
  cart:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h15l-2 8H8L6 3H3"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>',
  eye:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14"/></svg>',
  trash:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3"/></svg>',
  edit:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/></svg>',
  grip:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="6" r="1.4"/><circle cx="15" cy="6" r="1.4"/><circle cx="9" cy="12" r="1.4"/><circle cx="15" cy="12" r="1.4"/><circle cx="9" cy="18" r="1.4"/><circle cx="15" cy="18" r="1.4"/></svg>',
  image:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4V6Z"/><circle cx="9" cy="10" r="1.5"/><path d="m7 17 4.2-4.2 2.6 2.6L16 13l3 4"/></svg>',
  video:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h12v12H4V6Z"/><path d="m16 10 4-2v8l-4-2"/></svg>',
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function routeTo(route) {
  document.querySelectorAll("[data-route]").forEach((page) => {
    page.classList.toggle("active", page.dataset.route === route);
  });

  document.querySelectorAll("[data-route-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.routeLink === route);
  });

  document.querySelector(".site-header").classList.remove("menu-open");
  document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
  history.replaceState(null, "", `#${route}`);
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderProducts() {
  const homeBundles = document.querySelector("#homeBundles");
  const shopProducts = document.querySelector("#shopProducts");

  homeBundles.innerHTML = products
    .map(
      (product) => `
        <article class="bundle-card">
          <div>
            ${icons[product.icon]}
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong class="price">${money.format(product.price)}</strong>
          </div>
          <button class="primary-button" type="button" data-add-cart="${product.id}">
            ${icons.cart}
            Add to Cart
          </button>
        </article>
      `,
    )
    .join("");

  shopProducts.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          ${icons[product.icon]}
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <strong class="price">${money.format(product.price)}</strong>
          <button class="primary-button" type="button" data-add-cart="${product.id}">
            ${icons.cart}
            Add to Cart
          </button>
        </article>
      `,
    )
    .join("");
}

let mediaItemSequence = 0;
let draggedMediaItem = null;

function fileNameToAlbumTitle(fileName) {
  return fileName.replace(/\.[^/.]+$/, "").replace(/[_-]+/g, " ").trim() || "Untitled Upload";
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getAccessLabel(access) {
  return accessLabels[access] || "VIP Pass";
}

function createMediaItemId(prefix) {
  mediaItemSequence += 1;
  return `${prefix}-${Date.now()}-${mediaItemSequence}`;
}

function mediaNoun(kind, count) {
  if (kind === "video") return count === 1 ? "video" : "videos";
  return count === 1 ? "image" : "images";
}

function getMediaAlbums(kind) {
  return kind === "video" ? videoAlbums : imageAlbums;
}

function getMediaAlbum(kind, albumId) {
  return getMediaAlbums(kind).find((album) => album.id === albumId);
}

function getAlbumItems(album) {
  if (!Array.isArray(album.items)) album.items = [];
  return album.items;
}

function syncAlbumCount(album) {
  album.count = getAlbumItems(album).length;
  return album.count;
}

function getAlbumCount(album) {
  return syncAlbumCount(album);
}

function getAlbumCover(album) {
  return getAlbumItems(album)[0];
}

function getAlbumCardDescription(kind, album) {
  const cover = getAlbumCover(album);
  if (cover?.title && (!cover.placeholder || cover.customName)) {
    return `First ${kind}: ${cover.title}`;
  }

  return album.description;
}

function createPlaceholderMediaItem(kind, album, index) {
  const label = kind === "video" ? "Video" : "Image";
  return {
    id: `${album.id}-item-${index + 1}`,
    title: `${album.title} ${label} ${index + 1}`,
    placeholder: true,
  };
}

function prepareMediaAlbums(kind, albums) {
  albums.forEach((album, index) => {
    album.id = album.id || `${kind}-${slugify(album.title)}-${index + 1}`;
    if (!Array.isArray(album.items)) {
      const itemCount = Number.isFinite(album.count) ? album.count : 0;
      album.items = Array.from({ length: itemCount }, (_, itemIndex) =>
        createPlaceholderMediaItem(kind, album, itemIndex),
      );
    }
    syncAlbumCount(album);
  });
}

function createUploadedMediaItem(kind, file) {
  const previewUrl = URL.createObjectURL(file);
  uploadedMediaUrls.push(previewUrl);
  return {
    id: createMediaItemId(`${kind}-upload`),
    title: fileNameToAlbumTitle(file.name),
    fileName: file.name,
    size: formatBytes(file.size),
    previewUrl,
    placeholder: false,
  };
}

function revokeMediaItem(item) {
  if (!item?.previewUrl) return;

  URL.revokeObjectURL(item.previewUrl);
  const urlIndex = uploadedMediaUrls.indexOf(item.previewUrl);
  if (urlIndex >= 0) uploadedMediaUrls.splice(urlIndex, 1);
}

function getMediaStatusElement(kind) {
  return document.querySelector(kind === "video" ? "#videoUploadStatus" : "#imageUploadStatus");
}

function setMediaStatus(kind, message) {
  const status = getMediaStatusElement(kind);
  if (status) status.textContent = message;
}

function getMediaAlbumSelects(kind) {
  return [
    document.querySelector(kind === "video" ? "#videoUploadAlbum" : "#imageUploadAlbum"),
    document.querySelector(kind === "video" ? "#videoEditorAlbum" : "#imageEditorAlbum"),
  ];
}

function renderMediaAlbumOptions(kind) {
  const albums = getMediaAlbums(kind);
  const options = albums
    .map((album) => {
      const count = getAlbumCount(album);
      const bonus = album.vipExtra ? " - VIP Bonus" : "";
      return `<option value="${album.id}">${escapeHtml(album.title)} (${count} ${mediaNoun(kind, count)}${bonus})</option>`;
    })
    .join("");

  getMediaAlbumSelects(kind).forEach((select) => {
    if (!select) return;

    const previousValue = select.value;
    select.innerHTML = options;
    if (albums.some((album) => album.id === previousValue)) {
      select.value = previousValue;
      return;
    }

    if (albums[0]) select.value = albums[0].id;
  });
}

function setMediaUploadPanels(isUnlocked) {
  document.querySelectorAll(".media-upload-panel, .media-editor-panel").forEach((panel) => {
    panel.hidden = !isUnlocked;
  });

  renderVideos();
  renderImages();

  if (isUnlocked) {
    renderMediaAlbumOptions("video");
    renderMediaAlbumOptions("image");
    renderMediaEditor("video");
    renderMediaEditor("image");
  }
}

function filterAlbums(albums, access) {
  if (access === "vip-extra") return albums.filter((album) => album.vipExtra);
  if (access === "all") return albums;
  return albums.filter((album) => album.access === access && !album.vipExtra);
}

function sortAlbums(albums, sortValue) {
  const sorted = [...albums];

  if (sortValue === "count") {
    return sorted.sort((a, b) => getAlbumCount(b) - getAlbumCount(a));
  }

  if (sortValue === "popular") {
    return sorted.sort((a, b) => b.popularity - a.popularity);
  }

  return sorted;
}

function renderAlbumAdminActions(kind, album) {
  if (!contractsAdminUnlocked()) return "";

  const count = getAlbumCount(album);
  return `
    <div class="album-admin-actions">
      <button class="admin-card-button" type="button" title="Edit album" aria-label="Edit ${escapeHtml(album.title)}" data-edit-media-album="${kind}" data-album-id="${album.id}">
        ${icons.edit}
      </button>
      <button class="admin-card-button danger" type="button" title="Delete first item" aria-label="Delete first item from ${escapeHtml(album.title)}" data-delete-cover-media="${kind}" data-album-id="${album.id}" ${count ? "" : "disabled"}>
        ${icons.trash}
      </button>
    </div>
  `;
}

function renderUploadedVideo(item, title) {
  if (!item?.previewUrl) return "";
  return `<video class="uploaded-video" src="${escapeHtml(item.previewUrl)}" controls preload="metadata" aria-label="${escapeHtml(title)}"></video>`;
}

function renderUploadedImage(item, title) {
  if (!item?.previewUrl) return "";
  return `<img class="uploaded-image" src="${escapeHtml(item.previewUrl)}" alt="${escapeHtml(title)}" />`;
}

function renderVideos() {
  const access = document.querySelector("#videoCategory").value;
  const sortValue = document.querySelector("#videoSort").value;
  const filtered = sortAlbums(filterAlbums(videoAlbums, access), sortValue);

  document.querySelector("#videoGrid").innerHTML = filtered
    .map((album) => {
      const cover = getAlbumCover(album);
      const count = getAlbumCount(album);

      return `
        <article class="video-card album-card ${album.vipExtra ? "vip-extra-album" : ""}" data-tone="${album.tone}" data-album-id="${album.id}">
          <div class="video-frame album-frame">
            ${
              cover?.previewUrl
                ? renderUploadedVideo(cover, album.title)
                : '<div class="stage-prop" aria-hidden="true"></div>'
            }
            <span class="access-chip">${escapeHtml(album.vipExtra ? "VIP Bonus" : album.bundle)}</span>
            ${renderAlbumAdminActions("video", album)}
            ${
              cover?.previewUrl
                ? ""
                : `
                  <button class="play-button" type="button" aria-label="Preview ${escapeHtml(album.title)}">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7 8 5-8 5V7Z" /></svg>
                  </button>
                  <div class="media-timeline" aria-hidden="true">
                    <span>${count ? "Album" : "Empty"}</span>
                    <div><span></span></div>
                    <span>${escapeHtml(count ? album.duration : "0:00")}</span>
                  </div>
                `
            }
          </div>
          <div class="album-meta">
            <div>
              <strong>${escapeHtml(album.title)}</strong>
              <p>${escapeHtml(getAlbumCardDescription("video", album))}</p>
            </div>
            <span class="duration-chip">${count} ${mediaNoun("video", count)}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderImages() {
  const access = document.querySelector("#imageCategory").value;
  const sortValue = document.querySelector("#imageSort").value;
  const filtered = sortAlbums(filterAlbums(imageAlbums, access), sortValue);

  document.querySelector("#imageGrid").innerHTML = filtered
    .map((album) => {
      const cover = getAlbumCover(album);
      const count = getAlbumCount(album);

      return `
        <article class="gallery-card album-card ${cover?.previewUrl ? "has-upload" : ""} ${album.vipExtra ? "vip-extra-album" : ""}" data-album-id="${album.id}">
          ${cover?.previewUrl ? renderUploadedImage(cover, album.title) : '<span class="image-icon"></span>'}
          <span class="lock-icon"></span>
          <span class="access-chip">${escapeHtml(album.vipExtra ? "VIP Bonus" : album.bundle)}</span>
          ${renderAlbumAdminActions("image", album)}
          <footer>
            <div>
              <strong>${escapeHtml(album.title)}</strong>
              <small>${escapeHtml(getAlbumCardDescription("image", album))}</small>
            </div>
            <span>${count} ${mediaNoun("image", count)}</span>
          </footer>
        </article>
      `;
    })
    .join("");
}

function syncMediaUi(kind) {
  if (kind === "video") {
    renderVideos();
  } else {
    renderImages();
  }

  renderMediaAlbumOptions(kind);
  renderMediaEditor(kind);
}

function renderEditorThumbnail(kind, item, title) {
  if (item?.previewUrl && kind === "video") {
    return `<video src="${escapeHtml(item.previewUrl)}" muted playsinline preload="metadata" aria-label="${escapeHtml(title)}"></video>`;
  }

  if (item?.previewUrl && kind === "image") {
    return `<img src="${escapeHtml(item.previewUrl)}" alt="${escapeHtml(title)}" />`;
  }

  return icons[kind];
}

function renderMediaEditor(kind) {
  if (!contractsAdminUnlocked()) return;

  const list = document.querySelector(kind === "video" ? "#videoEditorList" : "#imageEditorList");
  const select = document.querySelector(kind === "video" ? "#videoEditorAlbum" : "#imageEditorAlbum");
  const summary = document.querySelector(kind === "video" ? "#videoEditorSummary" : "#imageEditorSummary");
  const albums = getMediaAlbums(kind);
  const album = getMediaAlbum(kind, select?.value) || albums[0];

  if (!list || !select || !summary) return;

  if (!album) {
    summary.textContent = `No ${mediaNoun(kind, 2)} albums are available.`;
    list.innerHTML = "";
    return;
  }

  select.value = album.id;
  const items = getAlbumItems(album);
  const count = items.length;
  summary.textContent = `${album.title}: ${count} ${mediaNoun(kind, count)}.`;

  if (!count) {
    list.innerHTML = `<div class="editor-empty">This album is empty.</div>`;
    return;
  }

  list.innerHTML = items
    .map((item, index) => {
      const title = item.title || `${album.title} ${index + 1}`;
      const detail = item.fileName
        ? `${item.fileName} - ${item.size}`
        : `${album.vipExtra ? "VIP Bonus" : album.bundle} placeholder`;

      return `
        <article class="editor-item" draggable="true" data-editor-item data-editor-kind="${kind}" data-album-id="${album.id}" data-item-id="${item.id}">
          <div class="editor-drag-handle" title="Drag to reorder" aria-hidden="true">${icons.grip}</div>
          <label class="editor-check" aria-label="Select ${escapeHtml(title)}">
            <input type="checkbox" data-select-media-item="${item.id}" />
          </label>
          <div class="editor-thumb">${renderEditorThumbnail(kind, item, title)}</div>
          <div class="editor-copy">
            <strong>Item ${index + 1}</strong>
            <input class="editor-name-input" type="text" value="${escapeHtml(title)}" aria-label="Name for ${escapeHtml(title)}" data-rename-media-item="${kind}" data-album-id="${album.id}" data-item-id="${item.id}" />
            <span>${escapeHtml(detail)}</span>
          </div>
          <button class="editor-icon-button danger" type="button" title="Delete item" aria-label="Delete ${escapeHtml(title)}" data-delete-media-item="${kind}" data-album-id="${album.id}" data-item-id="${item.id}">
            ${icons.trash}
          </button>
        </article>
      `;
    })
    .join("");
}

function selectMediaAlbum(kind, albumId) {
  if (!contractsAdminUnlocked()) return;

  getMediaAlbumSelects(kind).forEach((select) => {
    if (select && getMediaAlbum(kind, albumId)) select.value = albumId;
  });

  renderMediaEditor(kind);
  document.querySelector(kind === "video" ? "#videoEditorPanel" : "#imageEditorPanel")?.scrollIntoView({
    block: "nearest",
    behavior: "smooth",
  });
}

function deleteMediaItem(kind, albumId, itemId, messagePrefix = "Deleted") {
  if (!contractsAdminUnlocked()) return;

  const album = getMediaAlbum(kind, albumId);
  if (!album) return;

  const items = getAlbumItems(album);
  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex < 0) return;

  const [removedItem] = items.splice(itemIndex, 1);
  revokeMediaItem(removedItem);
  syncAlbumCount(album);
  setMediaStatus(kind, `${messagePrefix} 1 ${mediaNoun(kind, 1)} from ${album.title}.`);
  syncMediaUi(kind);
}

function deleteFirstMediaItem(kind, albumId) {
  if (!contractsAdminUnlocked()) return;

  const album = getMediaAlbum(kind, albumId);
  if (!album) return;

  const firstItem = getAlbumCover(album);
  if (!firstItem) {
    setMediaStatus(kind, "This album is already empty.");
    return;
  }

  deleteMediaItem(kind, albumId, firstItem.id, "Deleted the first");
}

function deleteSelectedMediaItems(kind) {
  if (!contractsAdminUnlocked()) return;

  const select = document.querySelector(kind === "video" ? "#videoEditorAlbum" : "#imageEditorAlbum");
  const album = getMediaAlbum(kind, select?.value);
  if (!album) return;

  const selectedIds = new Set(
    [...document.querySelectorAll(kind === "video" ? "#videoEditorList [data-select-media-item]:checked" : "#imageEditorList [data-select-media-item]:checked")]
      .map((input) => input.dataset.selectMediaItem),
  );

  if (!selectedIds.size) {
    setMediaStatus(kind, `Select at least one ${mediaNoun(kind, 1)} first.`);
    return;
  }

  const removedItems = [];
  album.items = getAlbumItems(album).filter((item) => {
    if (!selectedIds.has(item.id)) return true;
    removedItems.push(item);
    return false;
  });
  removedItems.forEach(revokeMediaItem);
  syncAlbumCount(album);
  setMediaStatus(kind, `Deleted ${removedItems.length} ${mediaNoun(kind, removedItems.length)} from ${album.title}.`);
  syncMediaUi(kind);
}

function clearMediaAlbum(kind) {
  if (!contractsAdminUnlocked()) return;

  const select = document.querySelector(kind === "video" ? "#videoEditorAlbum" : "#imageEditorAlbum");
  const album = getMediaAlbum(kind, select?.value);
  if (!album) return;

  const removedItems = [...getAlbumItems(album)];
  if (!removedItems.length) {
    setMediaStatus(kind, "This album is already empty.");
    return;
  }

  album.items = [];
  removedItems.forEach(revokeMediaItem);
  syncAlbumCount(album);
  setMediaStatus(kind, `Cleared ${removedItems.length} ${mediaNoun(kind, removedItems.length)} from ${album.title}.`);
  syncMediaUi(kind);
}

function moveMediaItem(kind, albumId, draggedItemId, targetItemId) {
  const album = getMediaAlbum(kind, albumId);
  if (!album || draggedItemId === targetItemId) return;

  const items = getAlbumItems(album);
  const fromIndex = items.findIndex((item) => item.id === draggedItemId);
  const toIndex = items.findIndex((item) => item.id === targetItemId);
  if (fromIndex < 0 || toIndex < 0) return;

  const [movedItem] = items.splice(fromIndex, 1);
  items.splice(toIndex, 0, movedItem);
  syncAlbumCount(album);
  setMediaStatus(kind, `Moved ${movedItem.title || mediaNoun(kind, 1)} in ${album.title}.`);
  syncMediaUi(kind);
}

function renameMediaItem(kind, albumId, itemId, value) {
  if (!contractsAdminUnlocked()) return;

  const album = getMediaAlbum(kind, albumId);
  if (!album) return;

  const item = getAlbumItems(album).find((albumItem) => albumItem.id === itemId);
  if (!item) return;

  const nextTitle = value.trim();
  if (!nextTitle) {
    setMediaStatus(kind, "Names cannot be blank.");
    renderMediaEditor(kind);
    return;
  }

  item.title = nextTitle;
  item.customName = true;
  setMediaStatus(kind, `Renamed ${mediaNoun(kind, 1)} to "${nextTitle}".`);
  syncMediaUi(kind);
}

function addUploadedMedia(kind, files) {
  if (!contractsAdminUnlocked()) return;

  const accepted = [...files].filter((file) =>
    kind === "video" ? file.type.startsWith("video/") : file.type.startsWith("image/"),
  );

  if (!accepted.length) {
    setMediaStatus(kind, `Choose at least one ${kind} file to upload.`);
    return;
  }

  const albumSelect = document.querySelector(kind === "video" ? "#videoUploadAlbum" : "#imageUploadAlbum");
  const album = getMediaAlbum(kind, albumSelect?.value);
  if (!album) {
    setMediaStatus(kind, `Choose an album before uploading ${mediaNoun(kind, 2)}.`);
    return;
  }

  const uploadedItems = accepted.map((file) => createUploadedMediaItem(kind, file));
  getAlbumItems(album).unshift(...uploadedItems);
  syncAlbumCount(album);
  selectMediaAlbum(kind, album.id);
  setMediaStatus(
    kind,
    `Added ${accepted.length} ${mediaNoun(kind, accepted.length)} to ${album.title}. No frontend size cap was applied.`,
  );

  if (kind === "video") {
    document.querySelector("#videoCategory").value = album.vipExtra ? "vip-extra" : album.access;
    document.querySelector("#videoSort").value = "bundle";
  } else {
    document.querySelector("#imageCategory").value = album.vipExtra ? "vip-extra" : album.access;
    document.querySelector("#imageSort").value = "bundle";
  }

  syncMediaUi(kind);
}

function getPhotoCanvas() {
  return document.querySelector("#photoCanvas");
}

function getPhotoContext() {
  return getPhotoCanvas()?.getContext("2d", { willReadFrequently: true });
}

function hasLoadedPhoto() {
  return Boolean(photoEditorState.image);
}

function setPhotoStatus(message) {
  const status = document.querySelector("#photoEditorStatus");
  if (status) status.textContent = message || "";
}

function updatePhotoMeta() {
  const label = document.querySelector("#photoCanvasLabel");
  const meta = document.querySelector("#photoCanvasMeta");
  const canvas = getPhotoCanvas();

  if (!canvas || !hasLoadedPhoto()) {
    if (label) label.textContent = "No photo loaded";
    if (meta) meta.textContent = "0 x 0";
    return;
  }

  if (label) label.textContent = photoEditorState.fileName || "Edited photo";
  if (meta) meta.textContent = `${canvas.width} x ${canvas.height}`;
  document.querySelector("#resizeWidth").value = canvas.width;
  document.querySelector("#resizeHeight").value = canvas.height;
}

function clonePhotoSettings(settings = photoEditorState.settings) {
  return { ...settings };
}

function resetPhotoSettings() {
  photoEditorState.settings = clonePhotoSettings(DEFAULT_PHOTO_SETTINGS);
  syncPhotoControls();
}

function getPhotoSettingControlIds() {
  return {
    brightness: "brightnessControl",
    contrast: "contrastControl",
    saturation: "saturationControl",
    hue: "hueControl",
    warmth: "warmthControl",
    grayscale: "grayscaleControl",
    sepia: "sepiaControl",
    blur: "blurControl",
    vignette: "vignetteControl",
    pixelate: "pixelateControl",
    frameWidth: "frameWidthControl",
    frameColor: "frameColorControl",
    watermark: "watermarkControl",
  };
}

function syncPhotoControls() {
  const controls = getPhotoSettingControlIds();

  Object.entries(controls).forEach(([setting, id]) => {
    const control = document.querySelector(`#${id}`);
    if (!control) return;

    if (control.type === "checkbox") {
      control.checked = Boolean(photoEditorState.settings[setting]);
    } else {
      control.value = photoEditorState.settings[setting];
    }
  });

  [
    "brightness",
    "contrast",
    "saturation",
    "hue",
    "warmth",
    "grayscale",
    "sepia",
    "blur",
    "vignette",
    "pixelate",
    "frameWidth",
  ].forEach((setting) => {
    const output = document.querySelector(`#${setting}Value`);
    if (output) output.textContent = photoEditorState.settings[setting];
  });

  const brushSize = document.querySelector("#brushSize");
  const brushOpacity = document.querySelector("#brushOpacity");
  const shapeSize = document.querySelector("#shapeSize");
  if (brushSize) document.querySelector("#brushSizeValue").textContent = brushSize.value;
  if (brushOpacity) document.querySelector("#brushOpacityValue").textContent = brushOpacity.value;
  if (shapeSize) document.querySelector("#shapeSizeValue").textContent = shapeSize.value;
}

function getPhotoFilterString() {
  const settings = photoEditorState.settings;
  return [
    `brightness(${settings.brightness}%)`,
    `contrast(${settings.contrast}%)`,
    `saturate(${settings.saturation}%)`,
    `grayscale(${settings.grayscale}%)`,
    `sepia(${settings.sepia}%)`,
    `hue-rotate(${settings.hue}deg)`,
    `blur(${settings.blur}px)`,
  ].join(" ");
}

function drawWarmthOverlay(ctx, canvas) {
  const warmth = Number(photoEditorState.settings.warmth);
  if (!warmth) return;

  ctx.save();
  ctx.globalCompositeOperation = "soft-light";
  ctx.globalAlpha = Math.min(Math.abs(warmth) / 100, 1) * 0.34;
  ctx.fillStyle = warmth > 0 ? "#f3a14f" : "#4c8dff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function drawVignette(ctx, canvas) {
  const amount = Number(photoEditorState.settings.vignette);
  if (!amount) return;

  const radius = Math.max(canvas.width, canvas.height) * 0.68;
  const gradient = ctx.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    radius * 0.2,
    canvas.width / 2,
    canvas.height / 2,
    radius,
  );
  gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
  gradient.addColorStop(1, `rgba(0, 0, 0, ${Math.min(amount / 100, 1) * 0.78})`);
  ctx.save();
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function drawFrame(ctx, canvas) {
  const width = Number(photoEditorState.settings.frameWidth);
  if (!width) return;

  ctx.save();
  ctx.lineWidth = width;
  ctx.strokeStyle = photoEditorState.settings.frameColor;
  ctx.strokeRect(width / 2, width / 2, canvas.width - width, canvas.height - width);
  ctx.restore();
}

function drawWatermark(ctx, canvas) {
  if (!photoEditorState.settings.watermark) return;

  const text = "Mistress Steph";
  const fontSize = Math.max(22, Math.round(canvas.width * 0.038));
  ctx.save();
  ctx.font = `700 ${fontSize}px Georgia, serif`;
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  ctx.lineWidth = Math.max(3, fontSize * 0.12);
  ctx.strokeStyle = "rgba(0, 0, 0, 0.62)";
  ctx.fillStyle = "rgba(245, 239, 227, 0.92)";
  ctx.strokeText(text, canvas.width - fontSize * 0.55, canvas.height - fontSize * 0.45);
  ctx.fillText(text, canvas.width - fontSize * 0.55, canvas.height - fontSize * 0.45);
  ctx.restore();
}

function drawPhotoEditor() {
  const canvas = getPhotoCanvas();
  const ctx = getPhotoContext();
  const image = photoEditorState.image;
  const wrap = document.querySelector(".photo-canvas-wrap");

  if (!canvas || !ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  wrap?.classList.toggle("has-photo", Boolean(image));

  if (!image) {
    updatePhotoMeta();
    return;
  }

  canvas.width = image.naturalWidth || image.width;
  canvas.height = image.naturalHeight || image.height;
  const pixelate = Math.max(1, Number(photoEditorState.settings.pixelate));

  ctx.save();
  ctx.filter = getPhotoFilterString();

  if (pixelate > 1) {
    const smallCanvas = document.createElement("canvas");
    const smallCtx = smallCanvas.getContext("2d");
    smallCanvas.width = Math.max(1, Math.round(canvas.width / pixelate));
    smallCanvas.height = Math.max(1, Math.round(canvas.height / pixelate));
    smallCtx.filter = getPhotoFilterString();
    smallCtx.drawImage(image, 0, 0, smallCanvas.width, smallCanvas.height);
    ctx.filter = "none";
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(smallCanvas, 0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
  } else {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }

  ctx.restore();
  drawWarmthOverlay(ctx, canvas);
  drawVignette(ctx, canvas);
  drawFrame(ctx, canvas);
  drawWatermark(ctx, canvas);
  updatePhotoMeta();
}

function loadImageElement(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = dataUrl;
  });
}

async function setPhotoBase(dataUrl, options = {}) {
  const image = await loadImageElement(dataUrl);
  photoEditorState.image = image;
  photoEditorState.baseDataUrl = dataUrl;
  if (options.fileName) photoEditorState.fileName = options.fileName;
  if (options.original) photoEditorState.originalDataUrl = dataUrl;
  if (options.resetSettings) resetPhotoSettings();
  drawPhotoEditor();
  if (options.history) pushPhotoHistory();
}

async function createFittedImageDataUrl(file) {
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  const image = await loadImageElement(dataUrl);
  const scale = Math.min(1, PHOTO_EDITOR_MAX_SIZE / Math.max(image.naturalWidth, image.naturalHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/png");
}

function pushPhotoHistory() {
  if (!photoEditorState.baseDataUrl) return;

  photoEditorState.history = photoEditorState.history.slice(0, photoEditorState.historyIndex + 1);
  photoEditorState.history.push({
    dataUrl: photoEditorState.baseDataUrl,
    settings: clonePhotoSettings(),
    fileName: photoEditorState.fileName,
  });
  photoEditorState.historyIndex = photoEditorState.history.length - 1;
}

async function restorePhotoHistory(index) {
  const snapshot = photoEditorState.history[index];
  if (!snapshot) return;

  photoEditorState.historyIndex = index;
  photoEditorState.settings = clonePhotoSettings(snapshot.settings);
  photoEditorState.fileName = snapshot.fileName;
  syncPhotoControls();
  await setPhotoBase(snapshot.dataUrl, { history: false });
}

function getRenderedPhotoDataUrl(type = "image/png", quality = 0.92) {
  drawPhotoEditor();
  return getPhotoCanvas().toDataURL(type, quality);
}

async function commitRenderedPhoto(message) {
  if (!hasLoadedPhoto()) return;

  const dataUrl = getRenderedPhotoDataUrl("image/png");
  resetPhotoSettings();
  await setPhotoBase(dataUrl, { history: true });
  setPhotoStatus(message);
}

async function handlePhotoUpload(files) {
  const file = [...files][0];
  if (!file || !file.type.startsWith("image/")) {
    setPhotoStatus("Choose an image file.");
    return;
  }

  const dataUrl = await createFittedImageDataUrl(file);
  photoEditorState.history = [];
  photoEditorState.historyIndex = -1;
  await setPhotoBase(dataUrl, {
    fileName: file.name,
    original: true,
    resetSettings: true,
    history: true,
  });
  document.querySelector("#photoFeedTitle").value = fileNameToAlbumTitle(file.name);
  setPhotoStatus(`Loaded ${file.name}.`);
}

function setPhotoSetting(setting, value, remember = false) {
  if (setting === "watermark") {
    photoEditorState.settings[setting] = Boolean(value);
  } else if (setting === "frameColor") {
    photoEditorState.settings[setting] = value;
  } else {
    photoEditorState.settings[setting] = Number(value);
  }

  syncPhotoControls();
  drawPhotoEditor();
  if (remember) pushPhotoHistory();
}

function applyPhotoPreset(preset) {
  const presets = {
    clean: { ...DEFAULT_PHOTO_SETTINGS },
    warm: { ...DEFAULT_PHOTO_SETTINGS, brightness: 106, contrast: 108, saturation: 118, warmth: 42 },
    noir: { ...DEFAULT_PHOTO_SETTINGS, contrast: 132, saturation: 70, grayscale: 100, vignette: 38 },
    vintage: { ...DEFAULT_PHOTO_SETTINGS, brightness: 104, contrast: 92, saturation: 82, sepia: 42, warmth: 28, vignette: 24 },
    soft: { ...DEFAULT_PHOTO_SETTINGS, brightness: 112, contrast: 88, saturation: 92, blur: 0.5, warmth: 18 },
    punch: { ...DEFAULT_PHOTO_SETTINGS, brightness: 104, contrast: 126, saturation: 146, vignette: 18 },
  };

  photoEditorState.settings = clonePhotoSettings(presets[preset] || DEFAULT_PHOTO_SETTINGS);
  syncPhotoControls();
  drawPhotoEditor();
  pushPhotoHistory();
}

async function transformPhoto(type) {
  if (!hasLoadedPhoto()) return;

  const sourceImage = await loadImageElement(getRenderedPhotoDataUrl("image/png"));
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (type === "rotate-left" || type === "rotate-right") {
    canvas.width = sourceImage.height;
    canvas.height = sourceImage.width;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(type === "rotate-right" ? Math.PI / 2 : -Math.PI / 2);
    ctx.drawImage(sourceImage, -sourceImage.width / 2, -sourceImage.height / 2);
  } else {
    canvas.width = sourceImage.width;
    canvas.height = sourceImage.height;
    ctx.translate(type === "flip-x" ? canvas.width : 0, type === "flip-y" ? canvas.height : 0);
    ctx.scale(type === "flip-x" ? -1 : 1, type === "flip-y" ? -1 : 1);
    ctx.drawImage(sourceImage, 0, 0);
  }

  resetPhotoSettings();
  await setPhotoBase(canvas.toDataURL("image/png"), { history: true });
  setPhotoStatus("Transform applied.");
}

async function cropPhoto() {
  if (!hasLoadedPhoto()) return;

  const ratioValue = document.querySelector("#cropRatio").value;
  if (ratioValue === "original") {
    setPhotoStatus("Original crop selected.");
    return;
  }

  const [ratioWidth, ratioHeight] = ratioValue.split(":").map(Number);
  const sourceImage = await loadImageElement(getRenderedPhotoDataUrl("image/png"));
  let cropWidth = sourceImage.width;
  let cropHeight = cropWidth * (ratioHeight / ratioWidth);

  if (cropHeight > sourceImage.height) {
    cropHeight = sourceImage.height;
    cropWidth = cropHeight * (ratioWidth / ratioHeight);
  }

  const cropX = (sourceImage.width - cropWidth) / 2;
  const cropY = (sourceImage.height - cropHeight) / 2;
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(cropWidth);
  canvas.height = Math.round(cropHeight);
  canvas
    .getContext("2d")
    .drawImage(sourceImage, cropX, cropY, cropWidth, cropHeight, 0, 0, canvas.width, canvas.height);

  resetPhotoSettings();
  await setPhotoBase(canvas.toDataURL("image/png"), { history: true });
  setPhotoStatus("Crop applied.");
}

async function resizePhoto() {
  if (!hasLoadedPhoto()) return;

  const width = Number(document.querySelector("#resizeWidth").value);
  const height = Number(document.querySelector("#resizeHeight").value);
  if (!width || !height || width < 64 || height < 64) {
    setPhotoStatus("Enter a valid size.");
    return;
  }

  const sourceImage = await loadImageElement(getRenderedPhotoDataUrl("image/png"));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width);
  canvas.height = Math.round(height);
  canvas.getContext("2d").drawImage(sourceImage, 0, 0, canvas.width, canvas.height);
  resetPhotoSettings();
  await setPhotoBase(canvas.toDataURL("image/png"), { history: true });
  setPhotoStatus("Resize applied.");
}

function getCanvasPoint(event) {
  const canvas = getPhotoCanvas();
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * canvas.width,
    y: ((event.clientY - rect.top) / rect.height) * canvas.height,
  };
}

function beginPhotoDraw(event) {
  if (!hasLoadedPhoto()) return;

  photoEditorState.drawing = true;
  photoEditorState.lastPoint = getCanvasPoint(event);
  getPhotoCanvas().setPointerCapture?.(event.pointerId);
}

function continuePhotoDraw(event) {
  if (!photoEditorState.drawing || !photoEditorState.lastPoint) return;

  const ctx = getPhotoContext();
  const point = getCanvasPoint(event);
  const brushSize = Number(document.querySelector("#brushSize").value);
  const brushOpacity = Number(document.querySelector("#brushOpacity").value) / 100;

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = brushSize;
  ctx.globalAlpha = brushOpacity;
  if (photoEditorState.activeTool === "eraser") {
    ctx.globalCompositeOperation = "destination-out";
  } else {
    ctx.strokeStyle = document.querySelector("#brushColor").value;
  }
  ctx.beginPath();
  ctx.moveTo(photoEditorState.lastPoint.x, photoEditorState.lastPoint.y);
  ctx.lineTo(point.x, point.y);
  ctx.stroke();
  ctx.restore();
  photoEditorState.lastPoint = point;
}

async function endPhotoDraw(event) {
  if (!photoEditorState.drawing) return;

  photoEditorState.drawing = false;
  photoEditorState.lastPoint = null;
  getPhotoCanvas().releasePointerCapture?.(event.pointerId);
  resetPhotoSettings();
  await setPhotoBase(getPhotoCanvas().toDataURL("image/png"), { history: true });
  setPhotoStatus("Brush edit applied.");
}

async function addPhotoText() {
  if (!hasLoadedPhoto()) return;

  const text = document.querySelector("#overlayText").value.trim();
  if (!text) {
    setPhotoStatus("Enter text first.");
    return;
  }

  drawPhotoEditor();
  const canvas = getPhotoCanvas();
  const ctx = getPhotoContext();
  const size = Number(document.querySelector("#textSize").value) || 54;
  const placement = document.querySelector("#textPlacement").value;
  const margin = Math.max(24, size * 0.7);
  const positions = {
    center: [canvas.width / 2, canvas.height / 2, "center", "middle"],
    top: [canvas.width / 2, margin, "center", "top"],
    bottom: [canvas.width / 2, canvas.height - margin, "center", "bottom"],
    left: [margin, canvas.height / 2, "left", "middle"],
    right: [canvas.width - margin, canvas.height / 2, "right", "middle"],
  };
  const [x, y, align, baseline] = positions[placement] || positions.center;

  ctx.save();
  ctx.font = `700 ${size}px ${document.querySelector("#textFont").value}`;
  ctx.textAlign = align;
  ctx.textBaseline = baseline;
  ctx.lineWidth = Math.max(3, size * 0.12);
  ctx.strokeStyle = "rgba(0, 0, 0, 0.64)";
  ctx.fillStyle = document.querySelector("#textColor").value;
  ctx.strokeText(text, x, y);
  ctx.fillText(text, x, y);
  ctx.restore();

  resetPhotoSettings();
  await setPhotoBase(canvas.toDataURL("image/png"), { history: true });
  setPhotoStatus("Text added.");
}

async function addPhotoShape() {
  if (!hasLoadedPhoto()) return;

  drawPhotoEditor();
  const canvas = getPhotoCanvas();
  const ctx = getPhotoContext();
  const shape = document.querySelector("#shapeType").value;
  const color = document.querySelector("#shapeColor").value;
  const fill = document.querySelector("#shapeFill").checked;
  const size = Number(document.querySelector("#shapeSize").value) / 100;
  const boxWidth = canvas.width * size;
  const boxHeight = canvas.height * size;
  const x = (canvas.width - boxWidth) / 2;
  const y = (canvas.height - boxHeight) / 2;

  ctx.save();
  ctx.lineWidth = Math.max(4, Math.round(Math.min(canvas.width, canvas.height) * 0.008));
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.globalAlpha = fill ? 0.35 : 0.92;

  if (shape === "circle") {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(boxWidth, boxHeight) / 2, 0, Math.PI * 2);
    fill ? ctx.fill() : ctx.stroke();
  } else if (shape === "line") {
    ctx.beginPath();
    ctx.moveTo(x, y + boxHeight);
    ctx.lineTo(x + boxWidth, y);
    ctx.stroke();
  } else {
    fill ? ctx.fillRect(x, y, boxWidth, boxHeight) : ctx.strokeRect(x, y, boxWidth, boxHeight);
  }

  ctx.restore();
  resetPhotoSettings();
  await setPhotoBase(canvas.toDataURL("image/png"), { history: true });
  setPhotoStatus("Shape added.");
}

function loadPhotoFeed() {
  try {
    return JSON.parse(localStorage.getItem(PHOTO_FEED_STORAGE_KEY) || "[]");
  } catch (error) {
    return [];
  }
}

function savePhotoFeed() {
  try {
    localStorage.setItem(PHOTO_FEED_STORAGE_KEY, JSON.stringify(photoFeed));
    return true;
  } catch (error) {
    return false;
  }
}

function renderPhotoFeed() {
  const grid = document.querySelector("#photoFeedGrid");
  if (!grid) return;

  if (!photoFeed.length) {
    grid.innerHTML = '<p class="feed-empty">No published photos yet.</p>';
    return;
  }

  grid.innerHTML = photoFeed
    .map(
      (item) => `
        <article class="feed-card">
          <img src="${item.dataUrl}" alt="${escapeHtml(item.title)}" />
          <div class="feed-card-body">
            <strong>${escapeHtml(item.title)}</strong>
            ${item.caption ? `<p>${escapeHtml(item.caption)}</p>` : ""}
            <small>${escapeHtml(item.createdAt)}</small>
            <div class="feed-card-actions">
              <button class="secondary-button" type="button" data-edit-feed-photo="${item.id}">Edit</button>
              <button class="secondary-button" type="button" data-download-feed-photo="${item.id}">Download</button>
              <button class="secondary-button danger-button" type="button" data-delete-feed-photo="${item.id}">Delete</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function publishPhotoToFeed() {
  if (!hasLoadedPhoto()) {
    setPhotoStatus("Load a photo first.");
    return;
  }

  const title = document.querySelector("#photoFeedTitle").value.trim() || "Untitled edit";
  const caption = document.querySelector("#photoFeedCaption").value.trim();
  const dataUrl = getRenderedPhotoDataUrl("image/jpeg", 0.9);
  const item = {
    id: crypto.randomUUID(),
    title,
    caption,
    dataUrl,
    createdAt: new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }),
  };

  photoFeed = [item, ...photoFeed];
  const persisted = savePhotoFeed();
  renderPhotoFeed();
  routeTo("feed");
  setPhotoStatus(persisted ? "Published to feed." : "Published for this session. Browser storage is full.");
}

function deleteFeedPhoto(id) {
  photoFeed = photoFeed.filter((item) => item.id !== id);
  savePhotoFeed();
  renderPhotoFeed();
}

function downloadDataUrl(dataUrl, filename) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  link.click();
}

function downloadFeedPhoto(id) {
  const item = photoFeed.find((feedItem) => feedItem.id === id);
  if (!item) return;
  downloadDataUrl(item.dataUrl, `${slugify(item.title) || "feed-photo"}.jpg`);
}

async function editFeedPhoto(id) {
  const item = photoFeed.find((feedItem) => feedItem.id === id);
  if (!item) return;

  photoEditorState.history = [];
  photoEditorState.historyIndex = -1;
  await setPhotoBase(item.dataUrl, {
    fileName: `${item.title}.jpg`,
    original: true,
    resetSettings: true,
    history: true,
  });
  document.querySelector("#photoFeedTitle").value = item.title;
  document.querySelector("#photoFeedCaption").value = item.caption || "";
  routeTo("photo-editor");
  setPhotoStatus("Loaded feed photo.");
}

async function toggleOriginalCompare(showOriginal) {
  if (!photoEditorState.originalDataUrl || !photoEditorState.baseDataUrl) return;

  if (showOriginal) {
    photoEditorState.compareSettings = clonePhotoSettings();
    photoEditorState.image = await loadImageElement(photoEditorState.originalDataUrl);
    photoEditorState.settings = clonePhotoSettings(DEFAULT_PHOTO_SETTINGS);
  } else {
    photoEditorState.image = await loadImageElement(photoEditorState.baseDataUrl);
    photoEditorState.settings = clonePhotoSettings(photoEditorState.compareSettings || photoEditorState.settings);
  }

  syncPhotoControls();
  drawPhotoEditor();
}

function clearPhotoFeed() {
  photoFeed = [];
  savePhotoFeed();
  renderPhotoFeed();
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  cart.push(product);
  renderCart();
  openCart();
}

function getCartLineItems() {
  const lineItems = [];
  const byId = new Map();

  cart.forEach((product) => {
    const existing = byId.get(product.id);
    if (existing) {
      existing.quantity += 1;
      return;
    }

    const lineItem = { ...product, quantity: 1 };
    byId.set(product.id, lineItem);
    lineItems.push(lineItem);
  });

  return lineItems;
}

function removeCartItem(productId) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index >= 0) cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const lineItems = getCartLineItems();
  const count = lineItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = lineItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const checkoutButton = document.querySelector("#checkoutButton");

  document.querySelector("#cartCount").textContent = count;
  document.querySelector("#cartTotal").textContent = money.format(total);
  if (checkoutButton) checkoutButton.disabled = count === 0;
  resetCheckoutStatus();

  document.querySelector("#cartItems").innerHTML = cart.length
    ? lineItems
        .map(
          (item) => `
            <div class="cart-line">
              <div>
                <strong>${escapeHtml(item.name)}</strong>
                <span>${item.quantity} × ${money.format(item.price)}</span>
              </div>
              <button class="icon-only" type="button" aria-label="Remove ${escapeHtml(item.name)}" data-remove-cart="${item.id}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
              </button>
            </div>
          `,
        )
        .join("")
    : '<p class="empty-cart">Your cart is empty.</p>';
}

function buildCheckoutPayload() {
  return {
    items: getCartLineItems().map((item) => ({
      id: item.id,
      quantity: item.quantity,
    })),
    successUrl: new URL("success.html", window.location.href).href,
    cancelUrl: new URL("cancel.html", window.location.href).href,
  };
}

function setCheckoutStatus(type, content) {
  const status = document.querySelector("#checkoutStatus");
  if (!status) return;

  status.className = `checkout-status ${type ? `checkout-status-${type}` : ""}`;
  status.hidden = !content;
  status.innerHTML = content || "";
}

function resetCheckoutStatus() {
  setCheckoutStatus("", "");
}

function disconnectedCheckoutMessage(payload) {
  const summary = payload.items.map((item) => `${item.quantity} × ${item.id}`).join(", ");

  return `
    <strong>Payment processing is not connected yet.</strong>
    <span>
      This static file cannot securely send money to a bank account. Connect an adult-friendly
      payment processor, then implement <code>${CHECKOUT_ENDPOINT}</code> on a backend that validates
      product IDs, creates a hosted checkout session, and pays out through the processor dashboard.
      After that endpoint exists, set <code>CHECKOUT_PROCESSOR_CONNECTED</code> to <code>true</code>.
    </span>
    <small>Cart payload ready for backend: ${escapeHtml(summary)}</small>
  `;
}

async function beginCheckout() {
  const checkoutButton = document.querySelector("#checkoutButton");

  if (!cart.length) {
    setCheckoutStatus("error", "<span>Add a bundle to your cart before checking out.</span>");
    return;
  }

  const payload = buildCheckoutPayload();
  setCheckoutStatus("info", "<span>Preparing checkout...</span>");
  if (checkoutButton) checkoutButton.disabled = true;

  if (!CHECKOUT_PROCESSOR_CONNECTED || window.location.protocol === "file:") {
    setCheckoutStatus("warning", disconnectedCheckoutMessage(payload));
    if (checkoutButton) checkoutButton.disabled = false;
    return;
  }

  try {
    const response = await fetch(CHECKOUT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Checkout endpoint returned ${response.status}`);
    }

    const data = await response.json();
    if (!data?.url) {
      throw new Error("Checkout endpoint did not return a checkout URL.");
    }

    window.location.assign(data.url);
  } catch (error) {
    setCheckoutStatus("warning", disconnectedCheckoutMessage(payload));
  } finally {
    if (checkoutButton) checkoutButton.disabled = false;
  }
}

function openCart() {
  const drawer = document.querySelector("#cartDrawer");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  const drawer = document.querySelector("#cartDrawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function contractsAdminUnlocked() {
  return sessionStorage.getItem("contractsUnlocked") === "true";
}

function setContractAccess(isUnlocked) {
  sessionStorage.setItem("contractsUnlocked", String(isUnlocked));
  document.querySelector("#contractLock").hidden = isUnlocked;
  document.querySelector("#contractAdmin").hidden = false;
  document.querySelector("#contractAdmin").classList.toggle("admin-mode", isUnlocked);
  document.querySelector("#uploadTabButton").hidden = !isUnlocked;
  document.querySelector("#logoutContracts").hidden = !isUnlocked;
  setMediaUploadPanels(isUnlocked);
  if (!isUnlocked) showTab("library");
  renderDocuments();
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderReadableDocument(doc) {
  const paragraphs = doc.previewBody?.length
    ? doc.previewBody
    : ["No readable text was found in this document preview."];

  return `
    <article class="document-page">
      <header>
        <span class="document-tag">${escapeHtml(doc.type)}</span>
        <div>
          <h2>${escapeHtml(doc.previewTitle || doc.name)}</h2>
          <p>${escapeHtml(doc.name)} • ${escapeHtml(doc.size)} • ${escapeHtml(doc.uploaded)}</p>
        </div>
      </header>
      <div class="document-copy">
        ${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
      ${doc.previewNote ? `<p class="preview-note">${escapeHtml(doc.previewNote)}</p>` : ""}
    </article>
  `;
}

function renderDocuments() {
  const isAdmin = contractsAdminUnlocked();
  document.querySelector("#documentRows").innerHTML = documents
    .map(
      (doc) => `
        <tr>
          <td>${escapeHtml(doc.name)}</td>
          <td>${escapeHtml(doc.type)}</td>
          <td>${escapeHtml(doc.size)}</td>
          <td>${escapeHtml(doc.uploaded)}</td>
          <td>
            <div class="row-actions">
              <button type="button" aria-label="Preview ${escapeHtml(doc.name)}" data-preview-doc="${doc.id}">${icons.eye}</button>
              ${
                isAdmin
                  ? `
                    <button type="button" aria-label="Download ${escapeHtml(doc.name)}" data-download-doc="${doc.id}">${icons.download}</button>
                    <button type="button" aria-label="Delete ${escapeHtml(doc.name)}" data-delete-doc="${doc.id}">${icons.trash}</button>
                  `
                  : ""
              }
            </div>
          </td>
        </tr>
      `,
    )
    .join("");
}

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }

  return `${size.toFixed(size >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function findZipEndOfCentralDirectory(view) {
  const minOffset = Math.max(0, view.byteLength - 65557);
  for (let offset = view.byteLength - 22; offset >= minOffset; offset -= 1) {
    if (view.getUint32(offset, true) === 0x06054b50) return offset;
  }
  return -1;
}

async function inflateRawZipData(compressedData) {
  if (!("DecompressionStream" in window)) {
    throw new Error("This browser cannot decompress DOCX files locally.");
  }

  const stream = new Blob([compressedData]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function readZipEntry(buffer, targetName) {
  const view = new DataView(buffer);
  const endOffset = findZipEndOfCentralDirectory(view);
  if (endOffset < 0) throw new Error("Invalid DOCX archive.");

  const centralDirectorySize = view.getUint32(endOffset + 12, true);
  const centralDirectoryOffset = view.getUint32(endOffset + 16, true);
  const decoder = new TextDecoder();
  let offset = centralDirectoryOffset;
  const end = centralDirectoryOffset + centralDirectorySize;

  while (offset < end) {
    if (view.getUint32(offset, true) !== 0x02014b50) break;

    const compressionMethod = view.getUint16(offset + 10, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const fileNameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const localHeaderOffset = view.getUint32(offset + 42, true);
    const fileNameBytes = new Uint8Array(buffer, offset + 46, fileNameLength);
    const fileName = decoder.decode(fileNameBytes);

    if (fileName === targetName) {
      if (view.getUint32(localHeaderOffset, true) !== 0x04034b50) {
        throw new Error("Invalid DOCX file header.");
      }

      const localNameLength = view.getUint16(localHeaderOffset + 26, true);
      const localExtraLength = view.getUint16(localHeaderOffset + 28, true);
      const dataOffset = localHeaderOffset + 30 + localNameLength + localExtraLength;
      const compressedData = new Uint8Array(buffer, dataOffset, compressedSize);

      if (compressionMethod === 0) return compressedData;
      if (compressionMethod === 8) return inflateRawZipData(compressedData);
      throw new Error("Unsupported DOCX compression method.");
    }

    offset += 46 + fileNameLength + extraLength + commentLength;
  }

  throw new Error("DOCX text content was not found.");
}

function extractParagraphsFromDocxXml(xmlText) {
  const xml = new DOMParser().parseFromString(xmlText, "application/xml");
  const parserError = xml.querySelector("parsererror");
  if (parserError) throw new Error("DOCX text XML could not be read.");

  return [...xml.getElementsByTagName("w:p")]
    .map((paragraph) =>
      [...paragraph.getElementsByTagName("w:t")]
        .map((node) => node.textContent || "")
        .join(""),
    )
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

async function extractDocxParagraphs(file) {
  const buffer = await file.arrayBuffer();
  const bytes = await readZipEntry(buffer, "word/document.xml");
  const xmlText = new TextDecoder("utf-8").decode(bytes);
  return extractParagraphsFromDocxXml(xmlText);
}

async function addDocuments(files) {
  const accepted = [...files].filter((file) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    return ["pdf", "doc", "docx"].includes(extension);
  });

  if (!accepted.length) {
    document.querySelector("#documentPreview").innerHTML =
      "<p>Please choose a PDF, DOC, or DOCX file to add to the document library.</p>";
    return;
  }

  const nextDocs = await Promise.all(accepted.map(async (file) => {
    const extension = file.name.split(".").pop()?.toUpperCase() || "FILE";
    const doc = {
      id: crypto.randomUUID(),
      name: file.name,
      type: extension,
      size: formatBytes(file.size),
      uploaded: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      url: URL.createObjectURL(file),
      previewable: true,
    };

    if (extension === "PDF") {
      doc.previewKind = "pdf";
      return doc;
    }

    if (extension === "DOCX") {
      try {
        const paragraphs = await extractDocxParagraphs(file);
        doc.previewTitle = file.name.replace(/\.docx$/i, "");
        doc.previewBody = paragraphs.length
          ? paragraphs
          : ["This DOCX was uploaded, but no readable paragraph text was found."];
      } catch (error) {
        doc.previewTitle = file.name;
        doc.previewBody = ["This DOCX was uploaded and is available for download."];
        doc.previewNote = error.message;
      }
      return doc;
    }

    return {
      ...doc,
      previewTitle: file.name,
      previewBody: [
        "This legacy Word .doc file was uploaded and is available for download.",
        "Browser-side text preview is supported for PDF and DOCX files. Open this .doc file in Word or a compatible document app to view its full contents.",
      ],
    };
  }));

  documents = [...nextDocs, ...documents];
  renderDocuments();
  showTab("library");
}

function previewDocument(id) {
  const doc = documents.find((item) => item.id === id);
  const preview = document.querySelector("#documentPreview");

  if (!doc) return;

  if (doc.type === "PDF" && doc.url) {
    preview.innerHTML = `<iframe title="Preview of ${escapeHtml(doc.name)}" src="${doc.url}#toolbar=1"></iframe>`;
    return;
  }

  preview.innerHTML = renderReadableDocument(doc);
}

function downloadDocument(id) {
  if (!contractsAdminUnlocked()) {
    document.querySelector("#documentPreview").innerHTML =
      "<p>Public visitors can preview contracts here, but downloads require admin access.</p>";
    return;
  }

  const doc = documents.find((item) => item.id === id);
  if (!doc?.url) {
    const text = [doc.previewTitle || doc.name, "", ...(doc.previewBody || [])].join("\n\n");
    const blobUrl = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = doc.name.replace(/\.[^.]+$/, ".txt");
    link.click();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 0);
    return;
  }

  const link = document.createElement("a");
  link.href = doc.url;
  link.download = doc.name;
  link.click();
}

function deleteDocument(id) {
  if (!contractsAdminUnlocked()) {
    document.querySelector("#documentPreview").innerHTML =
      "<p>Public visitors can preview contracts here, but deleting documents requires admin access.</p>";
    return;
  }

  const doc = documents.find((item) => item.id === id);
  if (doc?.url) URL.revokeObjectURL(doc.url);
  documents = documents.filter((item) => item.id !== id);
  renderDocuments();
  document.querySelector("#documentPreview").innerHTML =
    "<p>Select a PDF, DOCX, or Word file from the library to preview it here.</p>";
}

function showTab(tabName) {
  document.querySelectorAll("[data-tab]").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  document.querySelectorAll("[data-tab-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.tabPanel === tabName);
  });
}

function setEditorPanelSection(side, section) {
  document.querySelectorAll(`[data-panel-side="${side}"]`).forEach((panelSection) => {
    panelSection.classList.toggle("active", panelSection.dataset.panelSection === section);
  });

  document.querySelectorAll(`[data-editor-panel="${side}"]`).forEach((button) => {
    const isActive = button.dataset.editorSection === section;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.addEventListener("click", (event) => {
  const routeLink = event.target.closest("[data-route-link]");
  if (routeLink) {
    event.preventDefault();
    routeTo(routeLink.dataset.routeLink);
    return;
  }

  const addButton = event.target.closest("[data-add-cart]");
  if (addButton) {
    addToCart(addButton.dataset.addCart);
    return;
  }

  const removeButton = event.target.closest("[data-remove-cart]");
  if (removeButton) {
    removeCartItem(removeButton.dataset.removeCart);
    return;
  }

  const previewButton = event.target.closest("[data-preview-doc]");
  if (previewButton) {
    previewDocument(previewButton.dataset.previewDoc);
    return;
  }

  const downloadButton = event.target.closest("[data-download-doc]");
  if (downloadButton) {
    downloadDocument(downloadButton.dataset.downloadDoc);
    return;
  }

  const deleteButton = event.target.closest("[data-delete-doc]");
  if (deleteButton) {
    deleteDocument(deleteButton.dataset.deleteDoc);
    return;
  }

  const editMediaAlbumButton = event.target.closest("[data-edit-media-album]");
  if (editMediaAlbumButton) {
    selectMediaAlbum(editMediaAlbumButton.dataset.editMediaAlbum, editMediaAlbumButton.dataset.albumId);
    return;
  }

  const deleteCoverMediaButton = event.target.closest("[data-delete-cover-media]");
  if (deleteCoverMediaButton) {
    deleteFirstMediaItem(deleteCoverMediaButton.dataset.deleteCoverMedia, deleteCoverMediaButton.dataset.albumId);
    return;
  }

  const deleteMediaItemButton = event.target.closest("[data-delete-media-item]");
  if (deleteMediaItemButton) {
    deleteMediaItem(
      deleteMediaItemButton.dataset.deleteMediaItem,
      deleteMediaItemButton.dataset.albumId,
      deleteMediaItemButton.dataset.itemId,
    );
    return;
  }

  const deleteSelectedMediaButton = event.target.closest("[data-delete-selected-media]");
  if (deleteSelectedMediaButton) {
    deleteSelectedMediaItems(deleteSelectedMediaButton.dataset.deleteSelectedMedia);
    return;
  }

  const clearMediaAlbumButton = event.target.closest("[data-clear-media-album]");
  if (clearMediaAlbumButton) {
    clearMediaAlbum(clearMediaAlbumButton.dataset.clearMediaAlbum);
    return;
  }

  const editorPanelButton = event.target.closest("[data-editor-panel][data-editor-section]");
  if (editorPanelButton) {
    setEditorPanelSection(editorPanelButton.dataset.editorPanel, editorPanelButton.dataset.editorSection);
    return;
  }

  const photoPresetButton = event.target.closest("[data-photo-preset]");
  if (photoPresetButton) {
    applyPhotoPreset(photoPresetButton.dataset.photoPreset);
    return;
  }

  const photoTransformButton = event.target.closest("[data-photo-transform]");
  if (photoTransformButton) {
    transformPhoto(photoTransformButton.dataset.photoTransform);
    return;
  }

  const photoToolButton = event.target.closest("[data-photo-tool]");
  if (photoToolButton) {
    photoEditorState.activeTool = photoToolButton.dataset.photoTool;
    document.querySelectorAll("[data-photo-tool]").forEach((button) => {
      button.classList.toggle("active", button === photoToolButton);
    });
    return;
  }

  const deleteFeedButton = event.target.closest("[data-delete-feed-photo]");
  if (deleteFeedButton) {
    deleteFeedPhoto(deleteFeedButton.dataset.deleteFeedPhoto);
    return;
  }

  const downloadFeedButton = event.target.closest("[data-download-feed-photo]");
  if (downloadFeedButton) {
    downloadFeedPhoto(downloadFeedButton.dataset.downloadFeedPhoto);
    return;
  }

  const editFeedButton = event.target.closest("[data-edit-feed-photo]");
  if (editFeedButton) {
    editFeedPhoto(editFeedButton.dataset.editFeedPhoto);
    return;
  }

  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) {
    showTab(tabButton.dataset.tab);
  }
});

document.addEventListener("change", (event) => {
  const renameInput = event.target.closest("[data-rename-media-item]");
  if (renameInput) {
    renameMediaItem(
      renameInput.dataset.renameMediaItem,
      renameInput.dataset.albumId,
      renameInput.dataset.itemId,
      renameInput.value,
    );
    return;
  }

  const photoSetting = event.target.closest("[data-photo-setting]");
  if (photoSetting) {
    const value = photoSetting.type === "checkbox" ? photoSetting.checked : photoSetting.value;
    setPhotoSetting(photoSetting.dataset.photoSetting, value, true);
    return;
  }

  if (event.target.id === "compareOriginal") {
    toggleOriginalCompare(event.target.checked);
  }
});

document.addEventListener("input", (event) => {
  const photoSetting = event.target.closest("[data-photo-setting]");
  if (photoSetting) {
    const value = photoSetting.type === "checkbox" ? photoSetting.checked : photoSetting.value;
    setPhotoSetting(photoSetting.dataset.photoSetting, value, false);
    return;
  }

  if (event.target.id === "brushSize") {
    document.querySelector("#brushSizeValue").textContent = event.target.value;
    return;
  }

  if (event.target.id === "brushOpacity") {
    document.querySelector("#brushOpacityValue").textContent = event.target.value;
    return;
  }

  if (event.target.id === "shapeSize") {
    document.querySelector("#shapeSizeValue").textContent = event.target.value;
  }
});

document.addEventListener("keydown", (event) => {
  const renameInput = event.target.closest("[data-rename-media-item]");
  if (!renameInput || event.key !== "Enter") return;

  event.preventDefault();
  renameInput.blur();
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  const header = document.querySelector(".site-header");
  const isOpen = header.classList.toggle("menu-open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".cart-button").forEach((button) => {
  button.addEventListener("click", openCart);
});

document.querySelector("#closeCart").addEventListener("click", closeCart);
document.querySelector("#cartDrawer").addEventListener("click", (event) => {
  if (event.target.id === "cartDrawer") closeCart();
});
document.querySelector("#checkoutButton").addEventListener("click", beginCheckout);

document.querySelector("#videoCategory").addEventListener("change", renderVideos);
document.querySelector("#videoSort").addEventListener("change", renderVideos);
document.querySelector("#imageCategory").addEventListener("change", renderImages);
document.querySelector("#imageSort").addEventListener("change", renderImages);
document.querySelector("#videoEditorAlbum").addEventListener("change", () => renderMediaEditor("video"));
document.querySelector("#imageEditorAlbum").addEventListener("change", () => renderMediaEditor("image"));
document.querySelector("#videoUploadAlbum").addEventListener("change", (event) => {
  const album = getMediaAlbum("video", event.target.value);
  if (album) setMediaStatus("video", `Upload target: ${album.title}.`);
});
document.querySelector("#imageUploadAlbum").addEventListener("change", (event) => {
  const album = getMediaAlbum("image", event.target.value);
  if (album) setMediaStatus("image", `Upload target: ${album.title}.`);
});

document.addEventListener("dragstart", (event) => {
  const item = event.target.closest("[data-editor-item]");
  if (!item || !contractsAdminUnlocked()) return;

  draggedMediaItem = {
    kind: item.dataset.editorKind,
    albumId: item.dataset.albumId,
    itemId: item.dataset.itemId,
  };
  item.classList.add("dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", draggedMediaItem.itemId);
});

document.addEventListener("dragend", () => {
  document.querySelectorAll(".editor-item.dragging, .editor-item.drag-over").forEach((item) => {
    item.classList.remove("dragging", "drag-over");
  });
  draggedMediaItem = null;
});

document.addEventListener("dragover", (event) => {
  const targetItem = event.target.closest("[data-editor-item]");
  if (!targetItem || !draggedMediaItem) return;
  if (
    targetItem.dataset.editorKind !== draggedMediaItem.kind ||
    targetItem.dataset.albumId !== draggedMediaItem.albumId
  ) {
    return;
  }

  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  targetItem.classList.add("drag-over");
});

document.addEventListener("dragleave", (event) => {
  event.target.closest("[data-editor-item]")?.classList.remove("drag-over");
});

document.addEventListener("drop", (event) => {
  const targetItem = event.target.closest("[data-editor-item]");
  if (!targetItem || !draggedMediaItem) return;
  if (
    targetItem.dataset.editorKind !== draggedMediaItem.kind ||
    targetItem.dataset.albumId !== draggedMediaItem.albumId
  ) {
    return;
  }

  event.preventDefault();
  targetItem.classList.remove("drag-over");
  moveMediaItem(draggedMediaItem.kind, draggedMediaItem.albumId, draggedMediaItem.itemId, targetItem.dataset.itemId);
});

document.querySelector("#passwordForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const passwordInput = document.querySelector("#contractPassword");
  const message = document.querySelector("#passwordMessage");

  if (passwordInput.value === ADMIN_PASSWORD) {
    passwordInput.value = "";
    message.textContent = "";
    setContractAccess(true);
    return;
  }

  message.textContent = "Incorrect password.";
});

document.querySelector("#logoutContracts").addEventListener("click", () => {
  setContractAccess(false);
});

document.querySelector("#documentUpload").addEventListener("change", async (event) => {
  await addDocuments(event.target.files);
  event.target.value = "";
});
document.querySelector("#videoUpload").addEventListener("change", (event) => {
  addUploadedMedia("video", event.target.files);
  event.target.value = "";
});
document.querySelector("#imageUpload").addEventListener("change", (event) => {
  addUploadedMedia("image", event.target.files);
  event.target.value = "";
});
document.querySelector("#photoEditorUpload").addEventListener("change", async (event) => {
  await handlePhotoUpload(event.target.files);
  event.target.value = "";
});
document.querySelector("#publishPhotoFeed").addEventListener("click", publishPhotoToFeed);
document.querySelector("#downloadPhotoEdit").addEventListener("click", () => {
  if (!hasLoadedPhoto()) {
    setPhotoStatus("Load a photo first.");
    return;
  }
  downloadDataUrl(getRenderedPhotoDataUrl("image/png"), `${slugify(photoEditorState.fileName) || "edited-photo"}.png`);
});
document.querySelector("#undoPhotoEdit").addEventListener("click", () => {
  if (photoEditorState.historyIndex > 0) {
    restorePhotoHistory(photoEditorState.historyIndex - 1);
  }
});
document.querySelector("#redoPhotoEdit").addEventListener("click", () => {
  if (photoEditorState.historyIndex < photoEditorState.history.length - 1) {
    restorePhotoHistory(photoEditorState.historyIndex + 1);
  }
});
document.querySelector("#resetPhotoEdit").addEventListener("click", async () => {
  if (!photoEditorState.originalDataUrl) return;
  photoEditorState.history = [];
  photoEditorState.historyIndex = -1;
  await setPhotoBase(photoEditorState.originalDataUrl, {
    resetSettings: true,
    history: true,
  });
  setPhotoStatus("Reset to original.");
});
document.querySelector("#applyCrop").addEventListener("click", cropPhoto);
document.querySelector("#applyResize").addEventListener("click", resizePhoto);
document.querySelector("#addPhotoText").addEventListener("click", addPhotoText);
document.querySelector("#addPhotoShape").addEventListener("click", addPhotoShape);
document.querySelector("#clearPhotoFeed").addEventListener("click", clearPhotoFeed);
document.querySelector("#photoCanvas").addEventListener("pointerdown", beginPhotoDraw);
document.querySelector("#photoCanvas").addEventListener("pointermove", continuePhotoDraw);
document.querySelector("#photoCanvas").addEventListener("pointerup", endPhotoDraw);
document.querySelector("#photoCanvas").addEventListener("pointercancel", endPhotoDraw);

window.addEventListener("beforeunload", () => {
  uploadedMediaUrls.forEach((url) => URL.revokeObjectURL(url));
});

prepareMediaAlbums("video", videoAlbums);
prepareMediaAlbums("image", imageAlbums);
photoFeed = loadPhotoFeed();
renderProducts();
renderVideos();
renderImages();
renderPhotoFeed();
syncPhotoControls();
setEditorPanelSection("left", "source");
setEditorPanelSection("right", "presets");
drawPhotoEditor();
renderCart();
setContractAccess(sessionStorage.getItem("contractsUnlocked") === "true");
routeTo(window.location.hash.replace("#", "") || "home");

window.addEventListener("load", () => {
  routeTo(window.location.hash.replace("#", "") || "home");
});
