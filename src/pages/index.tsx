import Image from "next/image";
import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import logoImage from "../assets/logo.svg";
import userAvatarExempleImage from "../assets/users-avatar.png";
import iconCheckImg from "../assets/icon-check.svg";
import { api } from "../lib/axios";
import { FormEvent, useState } from "react";

interface HomeProps {
  poolCount: String;
  guessCount: String;
  userCount: String;
}

export default function Home(props: HomeProps) {
  const [poolTitle , setPoolTitle] = useState('')


  async function createPool(event : FormEvent){
    event.preventDefault()

    try{
      const response = await api.post('/pools',{
        title: poolTitle,
      });
      const { code } = response.data

      await navigator.clipboard.writeText(code)

      alert(`Bolão criado com sucesso seu codigo: ${code} foi copiado para a area de transferencia`)

      setPoolTitle('')
    } catch(err){
      console.log(err)
      alert('Falha ao criar o Bolão! , tente Novamente!')
    }
  }

  return (
    <div className="max-w-6xl h-screen mx-auto grid grid-cols-2 gap-28 items-center mt-14 mb-24">
      <main>
        <Image src={logoImage} alt="NLW-COPA" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={userAvatarExempleImage} alt="" />
          <strong className="text-[#E1E1E6] text-xl">
            <span className="text-[#129E57]">+{props.userCount}</span> pessoas já estão
            usando
          </strong>
        </div>

        <form 
        onSubmit={createPool}
        className="mt-10 flex gap-2"
        >
          <input
            className="flex-1 px-6 py-4 rounded bg-[#202024] border border-[#323238] text-sm text-[#E1E1E6]"
            type="text"
            required
            placeholder="Qual nome do seu bolão?"
            onChange={event => setPoolTitle(event.target.value)}
            value={poolTitle}
          />
          <button
            className="bg-[#F7DD43] px-6 py-4 text-[#202024] font-bold font-sm uppercase hover:bg-[#e7c712]"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>
        <p className="mt-4 text-[#8D8D99] text-sm leading-relaxed ">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>
        <div className="mt-10 pt-10 border-t border-[#323238] flex items-center justify-between text-[#E1E1E6]">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt=" " />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{props.poolCount}</span>
              <span>Bolões criados </span>
            </div>
          </div>
          <div className="w-px h-14 bg-[#323238]" />
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt=" " />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{props.guessCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo uma previa da aplicação movel da NLW-COPA"
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const [poolCountResponse , guessCountResponse , usersCountResponse] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count')
  ])


  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      usersCount: usersCountResponse.data.count
    },
  };
};
