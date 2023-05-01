import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoOptionsOutline } from "react-icons/io5";
import {
  SearchSelect,
  SearchSelectWrap,
  SelectDropdown,
  SelectHead,
  SelectLabel,
  SelectOptionStyled,
  SelectOptionsList,
  SelectUnfoldBtn,
} from "./Filter.styled";

const SelectOption = ({ checked, handleChange, handleClick, text }) => {
  return (
    <SelectOptionStyled>
      <input
        type="radio"
        name="searchOption"
        value={text}
        id={text}
        checked={checked}
        onChange={handleChange}
        onClick={handleClick}
      />
      <label htmlFor={text}>{text}</label>
    </SelectOptionStyled>
  );
};

export const Filter = ({ handleChoice, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState(options[0]);

  const handleChange = (option) => {
    setFilter(option);
    handleChoice(option);
  };

  return (
    <SearchSelectWrap>
      <SelectLabel>
        <IoOptionsOutline size={35} />
      </SelectLabel>
      <SearchSelect
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        <SelectHead isOpen={isOpen}>
          {filter}
          <SelectUnfoldBtn
            type="button"
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <BiChevronDown size={20} />
          </SelectUnfoldBtn>
        </SelectHead>

        <SelectDropdown>
          <SelectOptionsList isOpen={isOpen}>
            {options.map((option) => (
              <SelectOption
                key={option}
                checked={filter === option}
                handleChange={() => handleChange(option)}
                handleClick={() => {
                  setIsOpen(false);
                }}
                text={option}
              />
            ))}
          </SelectOptionsList>
        </SelectDropdown>
      </SearchSelect>
    </SearchSelectWrap>
  );
};
