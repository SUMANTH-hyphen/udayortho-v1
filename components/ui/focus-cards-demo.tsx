import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "",
      src: "/book1.jpg",
    },
    {
      title: "",
      src: "/book2.jpg",
    },
    {
      title: "",
      src: "/book3.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
