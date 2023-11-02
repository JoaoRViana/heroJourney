import React, { useState } from 'react';
import Modal from 'react-modal';
import { useAppSelector } from "@/redux/store";
import Battle from './Battle'; 

export default function BattleButton() {
  const heroes = useAppSelector((state) => state.chooseHeroes.heroes);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleBattleClick = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button
        disabled={heroes.length < 2}
        className="bg-teal-600 font-bold py-2 px-4 rounded border-b-4 hover:brightness-150
        disabled:bg-slate-700 disabled:brightness-100 border-teal-700 disabled:border-b-0  disabled:text-gray-500"
        onClick={handleBattleClick}
      >
        Battle
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button onClick={closeModal}>Fechar</button>
        <Battle />
      </Modal>
    </div>
  );
}
