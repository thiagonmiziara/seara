import SectionWrapper from '@/components/shared/SectionWrapper';
// import DevotionalClientPage from './DevotionalClientPage'; // To be removed once content is static
import { BookHeart } from 'lucide-react'; // Keep for potential icon usage

// This is a mocked devotional content. In the future, this will be fetched from a backend API.
const mockedDevotional = {
  title: "O Poder da Gratidão em Tempos Difíceis",
  date: "18 de Outubro de 2023",
  content: [
    "Em meio às tribulações da vida, a gratidão pode parecer algo distante e difícil de praticar. No entanto, a Bíblia nos ensina a sermos gratos em todas as circunstâncias (1 Tessalonicenses 5:18). A gratidão não nega a dor ou a dificuldade, mas nos permite enxergar além delas, reconhecendo a soberania de Deus e as bênçãos que Ele continua a derramar sobre nós.",
    "Praticar a gratidão transforma nossa perspectiva. Em vez de focar no que nos falta, passamos a valorizar o que temos. Isso nos fortalece, nos enche de esperança e nos aproxima de Deus. Mesmo nos momentos mais sombrios, sempre há algo pelo qual agradecer: a vida, a família, os amigos, a natureza, e acima de tudo, o amor inabalável de Deus.",
    "Que hoje você possa encontrar motivos para ser grato, por menores que pareçam. A gratidão é um poderoso antídoto contra o desespero e uma chave para uma vida mais plena e feliz em Cristo Jesus.",
  ],
};

export default function DevocionalPage() {
  return (
    <SectionWrapper 
      title="Devocional Diário"
      // Subtitle updated to reflect static content for now
      subtitle="Encontre inspiração e reflexão para o seu dia com nosso devocional."
    >
      <div className="max-w-3xl mx-auto">
        {/* This section will eventually fetch and display devotional content from an API */}
        <h2 className="text-2xl font-bold mb-4">{mockedDevotional.title}</h2>
        <p className="text-gray-500 mb-6">{mockedDevotional.date}</p>
        {mockedDevotional.content.map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
        {/* <DevotionalClientPage /> */} {/* Remove this component once backend integration is complete */}
      </div>
    </SectionWrapper>
  );
}
