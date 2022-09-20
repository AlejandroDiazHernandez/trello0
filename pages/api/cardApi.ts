import type { NextApiRequest, NextApiResponse } from "next";

type CardItem = {
  title: string;
};

const cardItems: CardItem[] = [
  { title: "Titulo de prueba" },
  { title: "Segunda prueba" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardItem[]>
) {
  if (req.method === "POST") {
    const { card }: { card: string } = req.body;
    const newCard = card;
    if (newCard.trim() === "") {
      alert("Debes añadir un texto");
    }
    cardItems.push({ title: newCard });
    res.status(221).json(cardItems);
  } else {
    res.status(201).json(cardItems);
  }
}
