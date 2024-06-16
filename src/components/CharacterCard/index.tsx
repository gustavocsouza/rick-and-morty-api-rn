import { Pressable } from "react-native";
import { Character } from "../../interfaces";
import Text from "../Text";

import { CharacterContainer, CharacterImage, CharacterInfo } from "./styles";

interface CharacterCardProps {
  character: Character;
  onOpenCharacterModal: () => void;
}

export function CharacterCard({ character, onOpenCharacterModal }: CharacterCardProps) {
  return (
    <CharacterContainer
      onPress={onOpenCharacterModal}
    >
      <CharacterImage
        source={{
          uri: character.image
        }}
      />
      <CharacterInfo>
        <Text
          size={16}
          weight={600}
        >
          {character.name}
        </Text>
        <Text>{character.status}</Text>
        <Text>{character.species}</Text>
        <Pressable
          onPress={() => alert(character.location.url)}
        >
          <Text>{character.location.name}</Text>
        </Pressable>
      </CharacterInfo>
    </CharacterContainer>
  );
}
