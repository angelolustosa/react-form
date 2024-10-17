import './App.css'
import { Input } from './components/input/Input'
import { Select } from './components/input/Select'

function App() {

  return (
    <>
      <main className="form-pessoa">
        <h2>Cadastro de Pessoa</h2>

        <form className='row g-3'>

          <Input
            label='Nome Completo'
            id='nomeCompleto'
          />

          <Input
            label='Nome Mãe'
            id='nomeMae'
          />

          <Input
            inputSize={2}
            label='Data Nascimento'
            id='dataNascimento'
            type='date'
          />

          <Input
            inputSize={5}
            label='Email'
            id='email'
            type='email'

          />

          <Input
            inputSize={5}
            label='Senha'
            id='senha'
            type='password'
          />

          <Input
            inputSize={4}
            label='CEP'
            id='cep'
            type='text'
          />


          <Input
            inputSize={8}
            label='Endereço'
            id='endereco'
          />

          <Input
            inputSize={1}
            label='Número'
            id='numero'
            type='number'
          />

          <Input
            inputSize={11}
            label='Complemento'
            id='complemento'
          />

          <Input
            inputSize={4}
            label='Bairro'
            id='bairro'
          />

          <Select
            label='Estado'
            id='estado'
          />

          <Select
            label='Cidade'
            id='cidade'
          />


        </form>
      </main>
    </>
  )
}

export default App
