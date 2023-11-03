import React, { useState } from 'react';
import Modal from 'react-modal';
import { useAppSelector } from "@/redux/store";
import Battle from './Battle'; 
import Button from '@mui/material/Button';


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
      <Button
        variant="contained" disableElevation
        disabled={heroes.length < 2}
        className="bg-teal-600 font-bold py-2 px-4 rounded border-b-4 hover:brightness-150 border-teal-700
        disabled:bg-slate-700 disabled:brightness-100  disabled:border-b-0  disabled:text-gray-500"
        onClick={handleBattleClick}
      >
        Battle
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
      <Button color="error" onClick={closeModal}>X</Button>
        <Battle />
      </Modal>
    </div>
  );
}
