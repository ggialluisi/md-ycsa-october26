"use client";

import { useEffect } from "react";
import { GALLERY_ITEMS } from "@/lib/gallery";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export function PhotoGallery() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]',
    );

    const processEmbeds = () => window.instgrm?.Embeds.process();

    if (existing) {
      processEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = processEmbeds;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  const posts = GALLERY_ITEMS.filter((item) => item.kind === "post");
  const highlights = GALLERY_ITEMS.filter((item) => item.kind === "highlight");

  return (
    <section className="section gallery-section" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">NO CLIMA DA FESTA</p>
        <h2 id="gallery-title">Mari Dias & Os Waldorfs em cena.</h2>
        <p>Fotos e registros oficiais no Instagram da banda e do YCSA.</p>
      </div>

      <div className="instagram-grid">
        {posts.map((item) => (
          <article
            className={item.featured ? "instagram-card featured" : "instagram-card"}
            key={item.url}
          >
            <div className="instagram-frame">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={item.url}
                data-instgrm-version="14"
              >
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </blockquote>
            </div>
            <div className="instagram-copy">
              <strong>{item.label}</strong>
              <span>{item.caption}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="memory-grid" aria-label="Edições anteriores">
        {highlights.map((item) => (
          <a
            className="memory-card"
            href={item.url}
            target="_blank"
            rel="noreferrer"
            key={item.url}
          >
            <span className="memory-year">{item.label}</span>
            <span>{item.caption}</span>
            <b>Ver no Instagram ↗</b>
          </a>
        ))}
      </div>
    </section>
  );
}
