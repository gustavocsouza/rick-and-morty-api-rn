import { Text, ActivityIndicator, FlatList, View, Image } from "react-native";
import { CharacterContainer, Container } from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "../interfaces";

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
          renderItem={({ item: character }) => (
            <CharacterContainer>
              <Image
                width={50}
                height={50}
                source={{
                  uri: character.image
                }}
              />
              <Text>{character.name}</Text>
            </CharacterContainer>
          )}
        />
      )}
    </Container>
  );
}
