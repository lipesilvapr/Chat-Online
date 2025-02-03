import { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/teste') // Chama o endpoint "/teste" do backend
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Erro ao conectar com o backend:', error));
  }, []);

  return (
    <div>
      <h1>Teste de conexão</h1>
      <p>{message || 'Conectando...'}</p>
    </div>
  );
}

export default App;
