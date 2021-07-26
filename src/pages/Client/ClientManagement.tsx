import { useHistory } from 'react-router-dom';

export default function ClientManagement() {

  const history = useHistory();

  function handleButtonCreateClient() {
    history.push('/client/create')
  };

  function handleButtonListClients() {
    history.push('/clients')
  };

  return (
    <div>
      <h1>Cliente</h1>
      <div>
        <button type="button" onClick={handleButtonCreateClient}>Cadastrar</button>
        <button type="button" onClick={handleButtonListClients}>Listar</button>
      </div>
    </div>
  );
}