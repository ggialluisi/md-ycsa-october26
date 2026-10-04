export type GalleryItem =
  | {
      kind: "post";
      url: string;
      label: string;
      caption: string;
      featured?: boolean;
    }
  | {
      kind: "highlight";
      url: string;
      label: string;
      caption: string;
    };

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    kind: "post",
    url: "https://www.instagram.com/p/DdNIT7vA_11/",
    label: "Mari Dias & Os Waldorfs",
    caption: "A banda em cena — abra o post para ver o registro completo.",
    featured: true,
  },
  {
    kind: "post",
    url: "https://www.instagram.com/p/DeCdz9IgM0h/",
    label: "Octoberfest YCSA 26",
    caption: "O post oficial da festa deste ano.",
  },
  {
    kind: "highlight",
    url: "https://www.instagram.com/stories/highlights/17961879507004062/",
    label: "Octoberfest 2025",
    caption: "Relembre a edição de 2025.",
  },
  {
    kind: "highlight",
    url: "https://www.instagram.com/stories/highlights/17996968259512533/",
    label: "Octoberfest 2023",
    caption: "Mais momentos da festa no YCSA.",
  },
  {
    kind: "highlight",
    url: "https://www.instagram.com/stories/highlights/18236890132134090/",
    label: "Octoberfest 2022",
    caption: "Arquivo de uma edição anterior.",
  },
];
