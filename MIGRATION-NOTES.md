# Royella → this Astro app: migration notes (Stage 1)

## Scope completed
Home1 (as the real homepage), About, Rooms (list), Room Details, Services, Contact —
in both `sr` (default) and `en` locales, using this app's existing typed i18n scaffold.

## Static vs. island split
Real Astro benefits only show up where content is actually static, so here's what's
what and why:

**Fully static `.astro` (zero JS shipped for content):**
- Navbar, Footer, GoToTop, BreadCrumb — dark-mode toggle and mobile menu use a
  small vanilla `<script>` instead of React state
- Home1: `Facilities`, `HotelAndFacilities`, `Brand`
- **Services**, **Contact** — entire pages, including the old select-expand JS
  trick, ported to a 5-line vanilla script instead of React

**React islands (only hydrate their own section, own JS chunk):**
- Home1: `HeroSection`, `Rooms`, `HotelAndResort`, `Offers`, `Testimonial`,
  `LatestBlog` (all keen-slider/Swiper carousels), `Action` (video lightbox)
- **About**, **Rooms list**, **Room Details** — ported as single page-level
  islands (`client:visible`) rather than split further, since each interleaves
  static copy with a carousel/lightbox/booking-alert that's threaded through
  the whole layout. Splitting these further into micro-islands is possible
  later but wasn't worth the risk for this pass.

Verified in the build output: Services and Contact ship **0** islands (truly
static), and every carousel/lightbox/sweetalert2 library only loads on the
page that actually uses it (e.g. `sweetalert2` only loads on `/room_details`,
`fslightbox-react` only on `/about`) — real per-page code-splitting, instead
of the old single React-SPA bundle shipped to every page.

## Known rough edges (didn't fix, in case you care)
- `react-router-dom`'s `Link`/`NavLink` were mechanically replaced with plain
  `<a href>` throughout. A few links pointed at pages outside this migration's
  scope (`/find_room`, `/service_details`, `/our_team`, `/blog`) — these were
  redirected to the closest in-scope page (`/room_details`, `/services`,
  `/contact`) as placeholders. Build real pages for these later and update the
  links.
- `RoomDetails` used to receive the selected room's price/title via
  react-router's in-memory navigation `state`. That doesn't exist across a
  real page load in a static site, so it's just unset now (`bookingsData =
  undefined`) — the UI already had safe fallbacks for this everywhere it's
  used, so nothing breaks, but the "shows what you picked" behavior is gone
  until it's rebuilt (e.g. via a URL query param).
- The scaffold's `[...slug].astro` generates both `/` and `/homepage` for the
  same content — that duplicate route existed before this migration and
  wasn't touched.
- Content is currently English-only for the pages ported in this stage
  (About/Rooms/RoomDetails/Services/Contact keep their original English copy
  as page-level islands or static markup); only the page-level `title`/
  `description` strings use this app's `sr`/`en` dictionary. Full bilingual
  content for every paragraph would mean moving all that copy into
  `translations.ts`, which is a bigger follow-up.

## Not in this stage
Everything from the React app outside the 6 pages above (Home2–5, Find Room,
Service Details, Our Team, Pricing, Blog, Blog Details) — not built.
