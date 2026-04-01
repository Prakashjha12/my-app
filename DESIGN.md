# Design System Philosophy: High-End Editorial Dark Mode

## 1. Overview & Creative North Star
**The Creative North Star: "The Sonic Noir Gallery"**

This design system is not a utility-first framework; it is an editorial statement. Designed for high-profile artists and influencers, it moves away from the "template" aesthetic by embracing the stillness of pure black space and the sophistication of high-fashion typography. 

We break the standard grid through intentional asymmetry—overlapping elements, staggered text reveals, and breathing room that feels expensive. The interface should feel like a premium digital gallery where the content (the artist) is the exhibit, and the UI is the sophisticated lighting that guides the eye.

---

## 2. Colors: The Depth of the Void
Our palette is anchored in **Pure Black (#000000)**. Depth is not created through shadows, but through tonal shifts in the dark spectrum.

*   **The "No-Line" Rule:** Under no circumstances should 1px solid borders be used for sectioning. Structural boundaries must be defined solely by background shifts. To separate a section, transition from `surface` (#131313) to `surface_container_low` (#1B1B1B).
*   **Surface Hierarchy:** Treat the UI as physical layers of obsidian. 
    *   **Base:** `surface_dim` (#131313) for the main canvas.
    *   **Nested Containers:** Use `surface_container_highest` (#353535) only for high-interaction small components.
*   **The Glass & Gradient Rule:** To achieve the "Apple-inspired" look, use Glassmorphism for floating overlays. Apply the `.liquid-glass` class (backdrop-filter: blur(4px)) to create a sense of light passing through dark water.
*   **Signature Glow:** Use the `primary_container` (#4F2442) as a soft, radial glow behind hero imagery or main CTA buttons. This provides a "visual pulse" to an otherwise muted environment.

---

## 3. Typography: Editorial Authority
The contrast between the classical `notoSerif` (Instrument Serif equivalent) and the technical `manrope` (Barlow equivalent) creates a "Tech-Luxury" tension.

*   **Display & Headline (The Artist's Voice):** 
    *   Use `display-lg` for hero statements. 
    *   **Style:** Always Italic, `tracking-tight`, and a claustrophobic `leading-[0.9]`. This stacking of letters creates a custom, "logotype" feel for every header.
*   **Body & Labels (The Technical Detail):** 
    *   Use `body-md` and `body-sm` for all descriptions. 
    *   **Color:** Use `on_surface_variant` at 60% opacity. Pure white text is too harsh; we want the typography to feel like it’s receding into the shadows.
*   **Rhythm:** Always pair a large `display-sm` heading with a small `label-md` uppercase caption to establish a clear, professional hierarchy.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, shadows are "Ambient Light" rather than "Drop Shadows."

*   **The Layering Principle:** Depth is achieved by stacking. A `surface_container_lowest` (#0E0E0E) card sitting on a `surface_container` (#1F1F1F) section creates a natural "in-set" look that feels more modern than a raised shadow.
*   **Ambient Glows:** When an element must "float" (like a dropdown or modal), use a shadow with a 40px–60px blur at 5% opacity, tinted with the `surface_tint` (#f2b4da) color. This mimics the way light bounces off a dark surface.
*   **The Ghost Border:** If a boundary is required for accessibility, use a "Ghost Border": the `outline_variant` (#4F444A) at 15% opacity. It should be felt, not seen.
*   **Liquid Glass Strong:** For high-impact moments (Profile Headers, Feature Cards), use `.liquid-glass-strong`. Combine a 50px backdrop blur with a heavy inner box shadow to give the element a "physical weight."

---

## 5. Components: Minimalist Primitives

### Buttons
*   **Primary:** A subtle gradient from `primary` (#f2b4da) to `primary_container` (#4F2442). Roundedness: `md` (0.375rem).
*   **Secondary/Glass:** Use `.liquid-glass` with a 1.4px gradient border mask. This is our signature "Apple-inspired" button.
*   **Interaction:** On hover, use a staggered text reveal (BlurText) rather than a simple color change.

### Cards & Lists
*   **No Dividers:** Never use horizontal lines. Use `spacing-10` (3.5rem) of vertical white space to separate list items, or a slight shift to `surface_container_low` (#1B1B1B) on hover.
*   **The Artist Card:** A blend of `surface_container_lowest` with a background image at 20% opacity. The typography should overlap the image boundaries to break the container feel.

### Input Fields
*   **State:** Default inputs are background-less with only a bottom "Ghost Border." 
*   **Focus:** Transition the border to `primary` (#f2b4da) and add a very soft `primary_container` outer glow.

### Additional Signature Component: The "Glass Audio Orb"
For DJ/Influencer contexts, use a floating playback component using `.liquid-glass-strong` with a rotating `primary_container` gradient blur behind it. It should feel like a piece of high-end hardware floating in space.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Place headings off-center. Let images bleed off the edge of the screen.
*   **Use Staggered Motion:** All text should enter via a `BlurText` component or a Framer Motion `y: 20` to `y: 0` transition.
*   **Respect the Spacing Scale:** Use `spacing-16` (5.5rem) and `spacing-20` (7rem) for section gaps. This "luxury of space" is what makes the design feel premium.

### Don't:
*   **Don't use pure white (#FFFFFF) for body text:** It creates "vibration" against the pure black background. Use `on_surface_variant`.
*   **Don't use standard shadows:** Avoid the "fuzzy grey" shadow look. If it's not a tonal shift or a tinted glow, don't use it.
*   **Don't use 100% opacity borders:** It breaks the "liquid" illusion of the system.
*   **Don't use sharp corners:** While minimal, our `DEFAULT` (0.25rem) and `md` (0.375rem) rounding softens the brutalism of the black background.