export type Testimonial = {
  slug: string;
  name: string;
  quote: string;
  /** Public path under /public */
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    slug: "antoinette-gutierrez",
    name: "Antoinette Gutierrez",
    quote:
      "Foster Greatness has brought community right into the palm of my hands, connecting me with friends who truly understand my upbringing in foster care. Being part of the Storyteller Collective gave me the starting point I needed to launch my brand and the motivation to begin new projects.",
    image: "/assets/images/storytellers/antoinette-gutierrez.jpg",
  },
  {
    slug: "jennifer-tai",
    name: "Jennifer Tai",
    quote:
      "Foster Greatness has been an amazing support to me. Being part of the Storyteller Collective had a significant impact on my healing journey and also allowed an opportunity for me to use my lived experiences to help others. The bonds I formed...have been life changing.",
    image: "/assets/images/storytellers/jennifer-tai.jpg",
  },
  {
    slug: "abril-leonyvelez",
    name: "Abril Leonyvelez",
    quote:
      "Foster Greatness has created a way for me to expand my comfort zone and allow me to be able to speak more about the best and not so best parts of the experiences that I had gone through. It has shown me that there are others like myself who want to speak out more about the system itself.",
    image: "/assets/images/storytellers/abril-leonyvelez.jpg",
  },
  {
    slug: "chyenne-santini",
    name: "Chyenne Santini",
    quote:
      "Not only did being a Storyteller align with nearly everything that I have been leaning into creatively this year and prior, but it also allowed me to gain a community of love and support that I could not have anticipated...I am beyond grateful for the incredible gifts that Foster Greatness has unlocked.",
    image: "/assets/images/storytellers/chyenne-santini.jpg",
  },
  {
    slug: "emmerald-evans",
    name: "Emmerald Evans",
    quote:
      "As a former foster youth, it's rare to find spaces where your story isn't just listened to but it's respected and uplifted. Being part of Foster Greatness...has reignited my storytelling advocacy and has felt empowering. They didn't just ask me to share my story — they gave me the tools to shape it.",
    image: "/assets/images/storytellers/emmerald-evans.jpg",
  },
];
