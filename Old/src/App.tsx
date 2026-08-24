import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Competencias } from './sections/Competencias';
import { Contato } from './sections/Contato';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Competencias />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
