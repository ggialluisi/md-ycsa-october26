export type GalleryItem = {
  localImage?: "band" | "mari";
  url: string;
  label: string;
  caption: string;
  featured?: boolean;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    localImage: "band",
    url: "https://www.instagram.com/maridias.oswaldorfs/",
    label: "Mari Dias & Os Waldorfs",
    caption: "A banda reunida.",
    featured: true,
  },
  {
    localImage: "mari",
    url: "https://www.instagram.com/maridias.oswaldorfs/",
    label: "Mari Dias no palco",
    caption: "Clima de show para entrar no espírito da Octoberfest.",
  },
  {
    url: "https://www.instagram.com/stories/highlights/17961879507004062/",
    label: "Octoberfest 2025",
    caption: "Relembre a edição de 2025.",
  },
  {
    url: "https://www.instagram.com/stories/highlights/17996968259512533/",
    label: "Octoberfest 2023",
    caption: "Mais momentos da festa no YCSA.",
  },
  {
    url: "https://www.instagram.com/stories/highlights/18236890132134090/",
    label: "Octoberfest 2022",
    caption: "Arquivo de uma edição anterior.",
  },
];
