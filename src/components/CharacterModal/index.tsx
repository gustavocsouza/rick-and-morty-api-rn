import { Modal } from "react-native";
import Text from "../Text";
import { Character } from "../../interfaces";
import { ModalBody, CharacterImage } from "./styles";

interface CharacterModalProps {
  visible: boolean;
  selectedCharacter: Character | null;
  onCloseModal: () => void;
}

export function CharacterModal({ visible, selectedCharacter, onCloseModal }: CharacterModalProps) {
  if (!selectedCharacter) {
    return;
  }
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onCloseModal}
    >
      <ModalBody>
        <CharacterImage
          source={{
            uri: selectedCharacter.image
          }}
        />
        <Text>
          {selectedCharacter.name}
        </Text>
      </ModalBody>
    </Modal>
  );
}
