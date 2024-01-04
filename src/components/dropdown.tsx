'use client'
import { useState } from "react";

const Dropdown = ({ items }: any) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do dropdown

  const toggleDropdown = () => setIsOpen(!isOpen); // Alterna entre abrir e fechar

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2"
        onClick={toggleDropdown}
      >
        {selectedItem}
      </button>
      {isOpen && ( // Renderiza o conteúdo do dropdown apenas se estiver aberto
        <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
          <ul className="py-1 text-gray-700">
            {items.map((item: any, index: number) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedItem(item);
                  setIsOpen(false); // Fecha o dropdown quando um item é selecionado
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
