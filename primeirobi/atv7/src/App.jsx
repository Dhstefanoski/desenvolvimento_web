import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const post = {
    titulo: 'Conheça as Melhores Combinações de Laranjas com Tênis',
    autor: 'Davi Stefanoski',
    data: '25 de fevereiro de 2026',
    conteudo: 'Já se perguntou qual seriam as melhores opções de tênis que você tem dentro da sua casa e serviriam bem em uma laranja? Nesse post iremos...'
  };

  return (
    <div className="container">
      <Header />
      <Navigation />
      <Article
        titulo={post.titulo}
        autor={post.autor}
        data={post.data}
        conteudo={post.conteudo}
      />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
