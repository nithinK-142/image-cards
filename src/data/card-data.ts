export type CardData = {
  title: string;
  imageUrl: string;
  description: string;
}

const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias non odio natus maxime fugiat? Debitis consectetur incidunt corrupti quos labore."

export const cardData: CardData[] = [
  {
    title: "Dog 1",
    imageUrl:
      "https://images.unsplash.com/photo-1618359057154-e21ae64350b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODg5NDZ8MHwxfHNlYXJjaHw0fHxwdXBweXxlbnwwfDB8fHwxNjk2MzQzODE0fDA&ixlib=rb-4.0.3&q=80&w=400",
    description: `${description}`,
  },
  {
    title: "Dog 2",
    imageUrl:
      "https://images.unsplash.com/photo-1562176546-95420556c872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODg5NDZ8MHwxfHNlYXJjaHw3fHxwdXBweXxlbnwwfDB8fHwxNjk2MzQzODE0fDA&ixlib=rb-4.0.3&q=80&w=400",
    description: `${description}`,
  },
  {
    title: "Dog 3",
    imageUrl:
      "https://images.unsplash.com/photo-1597662942557-4087865bf476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODg5NDZ8MHwxfHNlYXJjaHw4fHxwdXBweXxlbnwwfDB8fHwxNjk2MzQzODE0fDA&ixlib=rb-4.0.3&q=80&w=400",
    description: `${description}`,
  },
  {
    title: "Dog 4",
    imageUrl:
      "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODg5NDZ8MHwxfHNlYXJjaHw5fHxwdXBweXxlbnwwfDB8fHwxNjk2MzQzODE0fDA&ixlib=rb-4.0.3&q=80&w=400",
    description: `${description}`,
  },
  {
    title: "Dog 5",
    imageUrl:
      "https://images.unsplash.com/photo-1600077106724-946750eeaf3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODg5NDZ8MHwxfHNlYXJjaHwzfHxwdXBweXxlbnwwfDB8fHwxNjk2MzQzODE0fDA&ixlib=rb-4.0.3&q=80&w=400",
    description: `${description}`,
  },
  {
    title: "",
    imageUrl:
      "",
    description: `${description}`,
  },
  {
    title: "Dog 6",
    imageUrl:
      "https://images.unsplash.com/photo-1545401286-d0f8826ab98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODg5NDZ8MHwxfHNlYXJjaHw2fHxwdXBweXxlbnwwfDB8fHwxNjk2MzQzODE0fDA&ixlib=rb-4.0.3&q=80&w=400",
    description: `${description}`,
  },
  {
    title: "",
    imageUrl:
      "",
    description: `${description}`,
  },
  {
    title: "Dog 7",
    imageUrl:
      "https://images.unsplash.com/photo-1510337550647-e84f83e341ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODg5NDZ8MHwxfHNlYXJjaHwyfHxwdXBweXxlbnwwfDB8fHwxNjk2MzQzODE0fDA&ixlib=rb-4.0.3&q=80&w=400",
    description: `${description}`,
  },
  {
    title: "",
    imageUrl:
      "",
    description: `${description}`,
  },
];


export const defaultCardData = [
  {
    title: "Image not found!!!",
    imageUrl:
      "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design.jpg",
    description: `${description}`,
  }
]