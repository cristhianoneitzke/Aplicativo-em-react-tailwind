
export default function CadastroProduto() {

  return (

      <form className="bg-zinc-200 mt-2 dark:bg-white p-3 rounded-xl shadow-md max-w-md mx-auto">
        <h2 className="text-zinc-500 font-bold mb-4">Formulário de Contato</h2>
        <input type="text" placeholder="Digite seu nome" className="w-full p-2 border mb-4 rounded-md" />
        <input type="email"  placeholder="Digite seu email" className="w-full p-2 border mb-4 rounded-md"/>
        <input type="date"  placeholder="Digite il" className="w-full p-2 border mb-4 rounded-md"/>
        <textarea className="w-full p-2 border mb-4 rounded-md" placeholder="Mensagem"></textarea>
        <div className="flex items-center justify-center">
         <button type="submit" className="bg-blue-500 w-36 text-white p-2 rounded-md">Enviar</button>
        </div>
        </form>
        );
  }
