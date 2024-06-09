import { ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

import { Character } from "../interfaces";

import { CharacterCard } from "../components/CharacterCard";

import { Container, ItemSeparator } from "./styles";

export function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    setIsLoading(true);
    async function getCharacter() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const response = await axios.get('https://rickandmortyapi.com/api/character')
      setCharacters(response.data.results);
      setIsLoading(false);
    }

    getCharacter();
  }, []);

  return (
    <Container>
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
              character={character}
            />
          )}
        />
      )}
    </Container>
  );
}
