import chainLinkPanelsCloseupImg from './assets/shop/chain-link-panels-closeup.jpeg'
import ownerDeskPortraitImg from './assets/shop/owner-desk-portrait.jpeg'
import ownerDeskWideImg from './assets/shop/owner-desk-wide.jpeg'
import whiteCementBagsImg from './assets/shop/white-cement-bags.jpeg'
import sanitaryShelfDisplayImg from './assets/shop/sanitary-shelf-display.jpeg'
import paintBucketsDisplayImg from './assets/shop/paint-buckets-display.jpeg'
import rebarStockYardImg from './assets/shop/rebar-stock-yard.jpeg'
import roofingSheetsStockImg from './assets/shop/roofing-sheets-stock.jpeg'
import meshRollsCorridorImg from './assets/shop/mesh-rolls-corridor.jpeg'
import fencingSuppliesDisplayImg from './assets/shop/fencing-supplies-display.jpeg'
import blueFencingStockroomImg from './assets/shop/blue-fencing-stockroom.jpeg'
import ownerDeskMediumImg from './assets/shop/owner-desk-medium.jpeg'
import pvcPipeCoilsSanitaryDisplayImg from './assets/shop/pvc-pipe-coils-sanitary-display.jpeg'
import steelSectionsYardImg from './assets/shop/steel-sections-yard.jpeg'
import fencingShowroomFrontImg from './assets/shop/fencing-showroom-front.jpeg'
import storefrontExteriorImg from './assets/shop/storefront-exterior.jpeg'
import paintAisleShelvesImg from './assets/shop/paint-aisle-shelves.jpeg'

const contact = {
  business: 'M/s Purushottam Das Ashish Kumar Gupta',
  addressLines: [
    'Ashish Bhawan',
    'Jaitpur Road, Burhar',
    'District Shahdol, Madhya Pradesh 484110',
  ],
  phoneDisplay: '+91 94242 53859',
  phoneHref: 'tel:+919424253859',
  mapsHref:
    'https://maps.app.goo.gl/88Pt8fEf4f6Z9fU69',
}

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Categories', href: '#categories' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const highlights = [
  'Bulk-ready inventory for projects, fabrication, fencing, plumbing and finishing.',
  'Real shop imagery and category-led presentation that makes the business feel credible and established.',
  'Designed for enquiries, calls and store visits rather than ecommerce browsing.',
]

const stats = [
  { value: '06+', label: 'core product segments' },
  { value: '01', label: 'trusted local destination' },
  { value: '100%', label: 'visit and enquiry focused' },
]

const categories = [
  {
    title: 'Paints & Waterproofing',
    description:
      'Interior and exterior paint systems, coatings, primers and waterproofing material for residential and commercial work.',
    image: paintBucketsDisplayImg,
  },
  {
    title: 'Steel & Structural Sections',
    description:
      'Square pipe, section steel, sheets and fabrication-ready stock for gates, sheds, frames and structural jobs.',
    image: steelSectionsYardImg,
  },
  {
    title: 'Fencing & Wire Mesh',
    description:
      'Barbed wire, chain-link mesh, welded mesh and wire rolls suited for farms, plots, warehouses and boundary security.',
    image: fencingShowroomFrontImg,
  },
  {
    title: 'Pipes & PVC Fittings',
    description:
      'PVC pipe coils, fittings and utility plumbing essentials for homes, agriculture and building projects.',
    image: pvcPipeCoilsSanitaryDisplayImg,
  },
  {
    title: 'Sanitaryware',
    description:
      'Sanitary fittings and practical bathroom essentials displayed in-store for fast local selection.',
    image: sanitaryShelfDisplayImg,
  },
  {
    title: 'Cement & Construction Accessories',
    description:
      'White cement, allied consumables and project support material that round out everyday construction needs.',
    image: whiteCementBagsImg,
  },
]

const advantages = [
  {
    title: 'Built for practical buying',
    text: 'Contractors, homeowners, farmers and fabricators can understand the range quickly and enquire without friction.',
  },
  {
    title: 'Inventory depth visible at a glance',
    text: 'The site uses real shelves, yards and stock photos so visitors immediately see scale, seriousness and category breadth.',
  },
  {
    title: 'Premium presentation, local trust',
    text: 'The tone is modern and elevated, while the language stays rooted in reliability, access and store-first service.',
  },
]

const galleryImages = [
  {
    image: storefrontExteriorImg,
    title: 'Storefront presence',
    caption: 'A bold frontage on Jaitpur Road that makes the business easy to identify and visit.',
  },
  {
    image: ownerDeskPortraitImg,
    title: 'Trust-led service desk',
    caption: 'A human, owner-led front office that adds reassurance for local buyers and project enquiries.',
  },
  {
    image: fencingSuppliesDisplayImg,
    title: 'Front-loaded fencing stock',
    caption: 'Immediate visibility of wire mesh and heavy stock right from the entrance.',
  },
  {
    image: paintAisleShelvesImg,
    title: 'Paint and coating sections',
    caption: 'Dedicated shelves and bucket inventory for finishing and waterproofing requirements.',
  },
  {
    image: meshRollsCorridorImg,
    title: 'Rolled mesh inventory',
    caption: 'Dense in-store fencing stock that shows the business is prepared for bulk and recurring demand.',
  },
  {
    image: rebarStockYardImg,
    title: 'Rebar and steel stock',
    caption: 'Raw material readiness for fabrication, framework and structural work.',
  },
]

const inventoryBands = [
  { title: 'Fencing Systems', image: chainLinkPanelsCloseupImg },
  { title: 'Pipe Coils', image: pvcPipeCoilsSanitaryDisplayImg },
  { title: 'Section Steel', image: steelSectionsYardImg },
  { title: 'Roofing Sheets', image: roofingSheetsStockImg },
  { title: 'Construction Consumables', image: whiteCementBagsImg },
  { title: 'Shelf Inventory', image: ownerDeskWideImg },
]

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
        {description}
      </p>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f14] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_28%),linear-gradient(180deg,_rgba(10,15,20,0.25),_#0a0f14_75%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:96px_96px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#overview" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-300/10 text-sm font-black tracking-[0.25em] text-amber-200">
              AB
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{contact.business}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Hardware and Building Supply
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={contact.phoneHref}
            className="rounded-full border border-amber-300/40 bg-amber-300 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-amber-200"
          >
            Call Now
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section id="overview" className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-slate-300">
                Premium local hardware destination
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                A modern hardware website for a business that supplies the real backbone of construction.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Ashish Bhawan brings together hardware, steel, fencing, paint, sanitaryware and utility supplies in one dependable location for Burhar and the wider Shahdol district.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
                >
                  Speak to the store
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  Explore inventory visuals
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur"
                  >
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-12 hidden h-32 w-32 rounded-full bg-sky-400/20 blur-3xl lg:block" />
              <div className="absolute -right-4 bottom-10 hidden h-36 w-36 rounded-full bg-amber-400/20 blur-3xl lg:block" />

              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-2xl">
                  <img
                    src={storefrontExteriorImg}
                    alt="Front view of Ashish Bhawan hardware shop"
                    className="h-full min-h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                      Jaitpur Road, Burhar
                    </p>
                    <p className="mt-3 max-w-sm text-2xl font-semibold text-white">
                      Built for walk-ins, project buying and fast local trust.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl">
                    <img
                      src={ownerDeskPortraitImg}
                      alt="Owner seated at the store desk"
                      className="h-56 w-full object-cover object-center"
                    />
                  </div>
                  <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-300">
                      What the website communicates
                    </p>
                    <div className="mt-4 space-y-4">
                      {highlights.map((item) => (
                        <div key={item} className="flex gap-3">
                          <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" />
                          <p className="text-sm leading-7 text-slate-200">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:grid-cols-3 md:p-8">
            {advantages.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6">
                <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Product ecosystem"
            title="Every major category is presented like a serious supply business, not a generic local listing."
            description="The imagery reveals depth across paint, steel, fencing, sanitaryware, cement support and plumbing lines, helping the brand feel larger, more organized and more dependable."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_70px_rgba(0,0,0,0.2)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.32em] text-amber-300">
                    Category
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-amber-300 via-orange-300 to-sky-300 p-[1px]">
            <div className="grid gap-0 rounded-[calc(2rem-1px)] bg-slate-950/95 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                  Brand story
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  The site feels premium because it is grounded in real stock, real space and real business confidence.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                  Instead of relying on stock photos, the design turns your storefront, yard, shelves and inventory into a strong visual identity. That makes the business look established, accessible and ready for serious buying conversations.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    Hardware
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    Building materials
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    Fencing
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    Plumbing
                  </span>
                </div>
              </div>
              <div className="min-h-[320px]">
                <img
                  src={ownerDeskWideImg}
                  alt="Ashish Bhawan desk and stocked interior"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Visual gallery"
            title="A responsive showcase that turns inventory scale into marketing strength."
            description="From paint aisles to steel yards and fencing stock, the gallery creates movement and depth while still keeping the experience clean, informative and premium."
            align="center"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {galleryImages.map((item, index) => (
              <article
                key={item.title}
                className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                      index === 0 ? 'h-[480px]' : 'h-72'
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5 py-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-6 lg:px-8">
            {inventoryBands.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                Contact and visit
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Make it easy for people to call, visit and trust the shop instantly.
              </h2>
              <div className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-300">
                    Business name
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">{contact.business}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-300">
                    Address
                  </p>
                  {contact.addressLines.map((line) => (
                    <p key={line} className="mt-1">
                      {line}
                    </p>
                  ))}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-300">
                    Mobile
                  </p>
                  <a
                    href={contact.phoneHref}
                    className="mt-2 inline-block text-lg font-medium text-white transition hover:text-amber-300"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                >
                  Call for enquiry
                </a>
                <a
                  href={contact.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Open in Maps
                </a>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 md:col-span-2">
                <img
                  src={storefrontExteriorImg}
                  alt="Exterior storefront of Ashish Bhawan"
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <img
                  src={blueFencingStockroomImg}
                  alt="Coils and construction stock in storage"
                  className="h-full min-h-72 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <img
                  src={ownerDeskMediumImg}
                  alt="Store desk and stocked shelves"
                  className="h-full min-h-72 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
