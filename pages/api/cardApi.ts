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
  res.status(200).json(cardItems);
}
