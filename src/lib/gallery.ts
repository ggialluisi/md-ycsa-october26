export type GalleryItem = {
  src?: string;
  url: string;
  label: string;
  caption: string;
  featured?: boolean;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    url: "https://www.instagram.com/p/DdNIT7vA_11/",
    label: "Mari Dias & Os Waldorfs",
    caption: "Registro da banda no Instagram.",
    featured: true,
  },
  {
    url: "https://www.instagram.com/p/DeCdz9IgM0h/",
    label: "Octoberfest YCSA 26",
    caption: "Post oficial da festa deste ano.",
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
