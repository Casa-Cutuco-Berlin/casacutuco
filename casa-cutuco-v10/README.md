# Casa Cutuco

This version adds:

- English / Spanish switching
- WhatsApp contact: +1 (760) 596-5501
- Airbnb iCal synchronization API scaffold
- Future Stripe direct-payment API scaffold
- Existing Airbnb booking links remain active

## Local development

```bash
cd casa-cutuco-v10
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Connect Airbnb calendars

The public Airbnb listing URL is not the calendar feed.

In Airbnb host tools, export the calendar for each listing and copy its private iCal URL into:

```env
AIRBNB_ICAL_CASA_1=https://...
AIRBNB_ICAL_CASA_2=https://...
```

The site exposes:

```text
GET /api/availability?property=casa-1
GET /api/availability?property=casa-2
```

It parses VEVENT date ranges and returns blocked dates as JSON.

## Direct payments

`POST /api/create-checkout-session` is reserved for Stripe.

Before enabling payment, the production version should:
1. verify requested dates against synchronized availability;
2. calculate pricing server-side;
3. create a pending reservation;
4. create a Stripe Checkout Session;
5. confirm payment with a Stripe webhook;
6. block the dates locally;
7. send confirmation to guest and host.

Do not accept direct payments until availability checks and webhook confirmation are implemented, otherwise double bookings can occur.


## Calendar connection status

- Casa Cutuco #2: Airbnb iCal URL configured locally in `.env.local`.
- Casa Cutuco #1: still needs its Airbnb iCal export URL.

`.env.local` is excluded by `.gitignore` because Airbnb calendar URLs contain private tokens. Do not publish or commit those URLs to a public repository.


## Both Airbnb calendars connected

- Casa Cutuco #1: configured
- Casa Cutuco #2: configured

Both private iCal URLs live only in `.env.local`, which is excluded from Git.
The availability API can now read both Airbnb calendars:

- `/api/availability?property=casa-1`
- `/api/availability?property=casa-2`


## v6: guest-facing Airbnb availability connected

The homepage property cards now fetch each Airbnb iCal feed through `/api/availability`.

Guests can:
- choose check-in and check-out dates;
- see whether the selected range overlaps an Airbnb-blocked reservation;
- see a simple list of blocked date ranges;
- proceed to Airbnb only when a valid, non-conflicting date range is selected;
- send the selected dates and guest count through WhatsApp.

Airbnb iCal is not instant and may update with some delay. Before accepting future direct payments, the server should re-check availability immediately before creating the payment session.


## v7: simplified Airbnb-first reservation flow

This version intentionally removes the direct-booking feel from the guest journey.

The website now focuses on:
- presenting Casa Cutuco professionally;
- showing both homes in English and Spanish;
- reassuring guests that Airbnb calendar availability is connected;
- sending guests to Airbnb for live dates, pricing, payment, cancellation terms and confirmation;
- keeping WhatsApp available for pre-booking questions.

This approach reduces double-booking and payment complexity while giving Casa Cutuco its own branded web presence.


## v8: video added

The uploaded MP4 has been added to:

`public/videos/casa-cutuco-tour.mp4`

A bilingual responsive video-tour section now appears on the homepage. It uses native browser video controls, plays inline on mobile, and loads metadata first to avoid unnecessary bandwidth before the guest chooses to play it.


## v9: first three videos

The website video gallery now contains exactly three Casa Cutuco videos:

- `/videos/casa-cutuco-tour-1.mp4`
- `/videos/casa-cutuco-tour-2.mp4`
- `/videos/casa-cutuco-tour-3.mp4`

They are displayed in a responsive bilingual gallery with native mobile-friendly controls.


## v10: expanded photo galleries

Added separate responsive galleries for both properties using every photo exposed by the public Airbnb listing pages that was retrievable during this build:

- Casa Cutuco #1: 7 photos
- Casa Cutuco #2: 6 photos

Photos open into a full-screen lightbox when clicked/tapped. The galleries are bilingual and lazy-load images for better page performance.

Note: Airbnb may have additional photos behind its JavaScript-only “Show all photos” interface that are not exposed in the public server-rendered listing page. For a guaranteed complete production gallery, upload the original property photos directly and they can replace the Airbnb-hosted image URLs.
