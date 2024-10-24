import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Input } from "./components/input/Input";
import { Select } from "./components/input/Select.jsx";
import { Button } from "./components/input/button/Button.jsx";
import api from "./services/api.js";

function App() {
  const numeroInputRef = useRef(null); 
  const [formData, setFormData] = useState({
    /* nomeCompleto: "",
    nomeMae: "",
    estado: "",
    cidade: "", */
  });

  // Função para lidar com mudanças nos campos
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value, // Atualiza o campo correspondente no estado
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do Formulário:", JSON.stringify(formData, null, 2));
  };

  const handleReset = () => {
    setFormData({});
  };

  // Função para buscar dados do CEP
  // Função para buscar dados do CEP
  const fetchCepData = async () => {
    if (formData.cep.length === 8) {
      try {
        const response = await api.get(`/cep/v2/${formData.cep}`); // Chamando o endpoint
        //setCepData(response.data);

        const data = response.data;

        // Atualizando os campos do formulário com os dados do CEP
        setFormData({...formData, 
          cep: data.cep || "",
          estado: data.state || "",
          cidade: data.city || "",
          bairro: data.neighborhood || "",
          endereco: data.street || "",
         /*  longitude: data.location.coordinates.longitude || "",
          latitude: data.location.coordinates.latitude || "", */
        });

        numeroInputRef.current.focus()

        console.log(response);
      } catch (err) {
        //setError("Erro ao buscar dados do CEP.");
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (formData.cep && formData.cep.lentgth === 11) fetchCepData(formData.cep); // Chamada da função
  }, [formData.cep]); // O array vazio garante que a requisição aconteça apenas uma vez após o componente montar

  return (
    <>
      <main className="form-pessoa">
        <h2>Cadastro de Pessoa</h2>

        <form className="row g-3" onSubmit={handleSubmit}>
          <Input
            label="Nome Completo"
            id="nomeCompleto"
            value={formData.nomeCompleto} // Valor atual do input
            onChange={handleInputChange} // Função chamada quando o valor mudar
          />

          <Input
            label="Nome Mãe"
            id="nomeMae"
            value={formData.nomeMae} // Valor atual do input
            onChange={handleInputChange} // Função chamada quando o valor mudar
          />

          <Input
            label="Data Nascimento"
            id="dataNascimento"
            type="date"
            inputSize={2} // O campo Data de Nascimento ocupará 2 colunas
            value={formData.dataNascimento} // Valor atual do input
            onChange={handleInputChange} // Função chamada quando o valor mudar
          />

          <Input
            label="Email"
            id="email"
            type="email"
            inputSize={5} // O campo Email ocupará 5 colunas
            value={formData.email} // Valor atual do input
            onChange={handleInputChange} // Função chamada quando o valor mudar
          />

          <Input
            label="Senha"
            id="senha"
            type="password"
            inputSize={5} // O campo Senha ocupará 5 colunas
            value={formData.senha} // Valor atual do input
            onChange={handleInputChange} // Função chamada quando o valor mudar
          />

          <Input
            label="CEP"
            id="cep"
            inputSize={4} // O campo CEP ocupará 4 colunas
            value={formData.cep} // Valor atual do input
            onChange={handleInputChange} // Função chamada quando o valor mudar
            onKeyUp={fetchCepData}
          />

          <Input
            label="Endereço"
            id="endereco"
            inputSize={8} // O campo Endereço ocupará 8 colunas
            value={formData.endereco} // Valor atual do input
            onChange={handleInputChange} // Função chamada quando o valor mudar
          />

          <Input
            label="Número"
            id="numero"
            inputSize={1} // O campo Número ocupará 1 coluna
            value={formData.numero} // Valor atual do input
            onChange={handleInputChange} // Função chamada quando o valor mudar
            ref={numeroInputRef}
          />

          <Input
            label="Complemento"
            id="complemento"
            inputSize={11} // O campo Complemento ocupará 11 colunas
            value={formData.complemento} // Valor atual do input
            onChange={handleInputChange} // Função chamada quando o valor mudar
          />

          <Input
            label="Bairro"
            id="bairro"
            inputSize={4} // O campo Bairro ocupará 4 colunas
            value={formData.bairro} // Valor atual do input
            onChange={handleInputChange} // Função chamada quando o valor mudar
          />

          {/* <div className="col-md-6">
            <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
            <input type="text" className="form-control" id="nomeCompleto" />
          </div> */}

          {/* <div className="col-md-6">
            <label htmlFor="nomeMae" className="form-label">Nome Mãe</label>
            <input type="text" className="form-control" id="nomeMae" />
          </div> 

          <div className="col-md-2">
            <label htmlFor="dataNascimento" className="form-label">Data Nascimento</label>
            <input type="date" className="form-control" id="dataNascimento" />
          </div>

          <div className="col-md-5">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="col-md-5">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input type="password" className="form-control" id="senha" />
          </div>

          <div className="col-md-4">
            <label htmlFor="cep" className="form-label">CEP</label>
            <input type="text" className="form-control" id="cep" />
          </div>

          <div className="col-md-8">
            <label htmlFor="endereco" className="form-label">Endereço</label>
            <input type="text" className="form-control" id="endereco" />
          </div>

          <div className="col-md-1">
            <label htmlFor="numero" className="form-label">Número</label>
            <input type="text" className="form-control" id="numero" />
          </div>

          <div className="col-md-11">
            <label htmlFor="complemento" className="form-label">Complemento</label>
            <input type="text" className="form-control" id="complemento" />
          </div>

          <div className="col-md-4">
            <label htmlFor="bairro" className="form-label">Bairro</label>
            <input type="text" className="form-control" id="bairro" />
          </div>*/}

          {/* <div className="col-md-4">
            <label htmlFor="estado" className="form-label">
              Estado
            </label>
            <select id="estado" class="form-select">
              <option selected>Escolha...</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="cidade" className="form-label">
              Cidade
            </label>
            <select id="cidade" class="form-select">
              <option selected>Escolha...</option>
              <option>...</option>
            </select>
          </div> */}

          <Select
            label="Estado"
            id="estado"
            selectSize={4} /* options={estados} */
          />

          <Select
            label="Cidade"
            id="cidade"
            selectSize={4} /* options={cidades} */
          />

          <Button label="Salvar" classButton="btn btn-success text-start" />

          <Button
            label="Limpar"
            type="reset"
            classButton="btn btn-light text-start"
            onClick={handleReset}
          />

          {/*  <div className="col-md-1">
            <button type="submit" className="btn btn-success text-start">
              Salvar
            </button>
          </div> */}
        </form>

        {/* Exibe o JSON com os dados do formulário */}
        <div className="form-data">
          <h3>Dados do Formulário</h3>
          <pre id="json">{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </main>
    </>
  );
}

export default App;
