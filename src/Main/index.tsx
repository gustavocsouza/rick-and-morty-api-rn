import { ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";

import { Character } from "../interfaces";

import { CharacterCard } from "../components/CharacterCard";
import { CharacterModal } from "../components/CharacterModal";

import { Container, ItemSeparator, SearchInput } from "./styles";
import { api } from "../utils/api";

export function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  console.log(searchValue);

  useEffect(() => {
    setIsLoading(true);
    async function getCharacter() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const response = await api(`character/?name=${searchValue}`);
      setCharacters(response.data.results);
      setIsLoading(false);
    }

    getCharacter();
  }, [searchValue]);

  function handleOpenCharacterModal(characterSelected: Character) {
    setSelectedCharacter(characterSelected)
    setModalIsVisible(true);
  }

  function handleCloseModal() {
    setModalIsVisible(false);
    setSelectedCharacter(null);
  }

  return (
    <Container>
      <CharacterModal
        visible={modalIsVisible}
        selectedCharacter={selectedCharacter}
        onCloseModal={handleCloseModal}
      />
      <SearchInput
        placeholder="Procurar personagem..."
        onChangeText={setSearchValue}
        value={searchValue}
      />
      {isLoading && (
        <ActivityIndicator />
      )}

      {!isLoading && (
        <FlatList
          data={characters}
          numColumns={3}
          keyExtractor={(item)=> item.id.toString()}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: character }) => (
            <CharacterCard
              onOpenCharacterModal={() => handleOpenCharacterModal(character)}
              character={character}
            />
          )}
        />
      )}
    </Container>
  );
}
