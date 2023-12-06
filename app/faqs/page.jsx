import FAQsComponent from "@/components/FAQsComponent";
import { Cookie } from "next/font/google";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

const FAQs = () => {
  const faqs = [
    {
      question: "What is Inter IIT Cultural Meet?",
      answer:
        "Inter IIT Cultural Meet is an annual cultural competition between all the IITs. It is a 4 day event where students from all the IITs compete in various cultural events.",
    },
    {
      question: "When does Inter IIT Cultural Meet happening?",
      answer:
        "Inter IIT Cultural Meet 6.0 will be held from 26th to 29th December 2023.",
    },
    {
      question: "Where is Inter IIT Cultural Meet happening?",
      answer: "Inter IIT Cultural Meet 6.0 will be held at IIT Kharagpur.",
    },
    {
      question: "Who can participate in Inter IIT Cultural Meet?",
      answer:
        "Only students from IITs can participate in Inter IIT Cultural Meet.",
    },
    {
      question: "How can I participate in Inter IIT Cultural Meet?",
      answer:
        "You can participate in Inter IIT Cultural Meet by getting selected in the auditions conducted by your respective IITs.",
    },
  ];

  return (
    <main className={cookie.className}>
      <FAQsComponent faqs={faqs} />
    </main>
  );
};

export default FAQs;
