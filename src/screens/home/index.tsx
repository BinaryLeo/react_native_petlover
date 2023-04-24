import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";
import {
  getCategories,
  ICATEGORY,
  IANIMAL,
  getAnimals,
  getAnimalById,
} from "../../services/api";
import {
  CardContainer,
  Container,
  InfoContainer,
  PickerContainer,
  ResultContainer,
  ResultLabel,
  Title,
  SubTitle,
  Wrapper,
  WrapperList,
  CardLabel,
  CardDetail,
  CardPhone,
  CardMail,
  CardInfoWrapper,
  CardInfo,
  BoxDetails,
  BoxContent,
  CloseButtonLabel,
  AnimalsDetailsPicture,
  BrowsePictures,
} from "./styles";
import CAT from "../../assets/cat.svg";
import DOG from "../../assets/dog.svg";
export function Home() {
  const token = useSelector((state: any) => state.authState.token);

  const [categories, setCategories] = useState<ICATEGORY[]>([]);
  const [animals, setAnimals] = useState<IANIMAL[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("0");
  const [selectedAnimal, setSelectedAnimal] = useState<IANIMAL | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false); // added state for modal visibility

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const tokenUse = token;
        const categories = await getCategories(tokenUse);
        setCategories(categories);
      } catch (error) {
        console.error("Erro ao buscar categorias", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const tokenUse = token;
        const animals = await getAnimals(tokenUse);
        setAnimals(animals);
      } catch (error) {
        console.error("Erro ao buscar animais", error);
      }
    };

    fetchAnimals();
  }, [selectedCategory]);

  const handleAnimalPress = async (id: string) => {
    try {
      const animal = await getAnimalById(id, token);
      setSelectedAnimal(animal);
      setIsModalVisible(true); // set modal visibility to true
    } catch (error) {
      console.error("Erro ao buscar animal por ID", error);
    }
  };

  const renderAnimalItem = ({ item }: { item: IANIMAL }) => {
    return (
      <TouchableOpacity onPress={() => handleAnimalPress(item.id)}>
        <CardContainer>
          <Image
            source={{ uri: item.img }}
            style={{
              width: 100,
              height: 100,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <InfoContainer>
            <Text>Animal {item.id}</Text>
            <View
              style={{
                gap: 5,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {parseInt(item.id) % 2 === 0 ? (
                <CAT width={15} height={15} fill="#000" />
              ) : (
                <DOG width={15} height={15} fill="#000" />
              )}
              <Text>{item.name}</Text>
            </View>

            <Text>{item.age} anos</Text>
          </InfoContainer>
        </CardContainer>
      </TouchableOpacity>
    );
  };

  const filteredAnimals =
    selectedCategory === "0"
      ? animals
      : animals.filter((animal) => animal.id === selectedCategory);

  return (
    <Wrapper>
      <Container>
        <Title>HOME</Title>
        <SubTitle>Escolha uma categoria para visualizar</SubTitle>
        <PickerContainer>
          <Picker
            style={{ backgroundColor: "#FCC234", color: "white" }}
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCategory(itemValue)
            }
          >
            <Picker.Item label="Todos" value="0" />
            {categories.map((category) => (
              <Picker.Item
                key={category.id}
                label={category.name}
                value={category.id}
              />
            ))}
          </Picker>
        </PickerContainer>
      </Container>

      <ResultContainer>
        <ResultLabel>Resultados da busca:</ResultLabel>
        <WrapperList>
          <FlatList
            data={filteredAnimals}
            keyExtractor={(item) => item.id}
            renderItem={renderAnimalItem}
          />
        </WrapperList>
      </ResultContainer>

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <CloseButtonLabel>Fechar</CloseButtonLabel>
          </TouchableOpacity>
          <View style={{ alignItems: "center", gap: 20 }}>
            <AnimalsDetailsPicture source={{ uri: selectedAnimal?.img }} />
            <View style={{ flexDirection: "row", gap: 10,width:"100%",justifyContent:"flex-end"}}>
              <BrowsePictures onPress={() => Alert.alert("imagem anterior")}>
                <Text style={{color:"#fff"}}>{"<"}</Text>
              </BrowsePictures>
              <BrowsePictures onPress={() => Alert.alert("imagem anterior")}>
              <Text style={{color:"#fff"}}>{">"}</Text>
              </BrowsePictures>
            </View>
            <CardInfoWrapper>
              <BoxContent>
                <CardLabel>PetLovers - Detalhes</CardLabel>
              </BoxContent>
              <BoxDetails>
                <CardInfo>ID do animal: {selectedAnimal?.id}</CardInfo>
                <CardInfo>Nome: {selectedAnimal?.name}</CardInfo>
                <CardInfo>Idade: {selectedAnimal?.age} anos</CardInfo>
                <CardDetail>
                  Descrição: {selectedAnimal?.description}
                </CardDetail>
                <CardPhone>Telefone:{selectedAnimal?.phone}</CardPhone>
                <CardMail>Email:{selectedAnimal?.email}</CardMail>
              </BoxDetails>
            </CardInfoWrapper>
          </View>
        </View>
      </Modal>
    </Wrapper>
  );
}
