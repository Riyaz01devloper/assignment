# Scroll-Driven Hero Animation

A responsive scroll-driven hero section built with Next.js, TypeScript, Tailwind CSS, and GSAP.

The project recreates a premium hero animation where the main visual responds directly to the user's scroll position.

## Live Demo

[View Live Demo](https://assignment-lake-five.vercel.app/)

## GitHub Repository

https://github.com/Riyaz01devloper/scroll-driven-hero

## Features

- Scroll-driven hero animation
- GSAP ScrollTrigger integration
- Smooth scroll-based object movement
- Responsive design for mobile, tablet, and desktop
- Animated headline on page load
- Staggered statistics animation
- Transform-based animations for better performance
- Clean and reusable React component structure

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- HTML5
- CSS3

## Animations

### Initial Load

The headline fades in with a slight upward movement.

The statistics appear sequentially using a staggered animation.

### Scroll Interaction

The main visual responds to the user's scroll position.

As the user scrolls, the visual:

- Moves horizontally
- Moves vertically
- Scales smoothly
- Rotates slightly

The animation uses GSAP ScrollTrigger with `scrub` so the animation remains connected to the scroll position.

## Responsive Design

The layout adapts to different screen sizes:

- Mobile
- Tablet
- Laptop
- Desktop

The statistics change from a four-column layout on larger screens to a two-column layout on mobile devices.

## Project Structure

```text
scroll-driven-hero/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── Hero.tsx
│
├── public/
│   └── images/
│       └── image.png
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
