import React, { useState, useEffect } from "react";
import { Text, FlatList, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";

import {
  getCategories,
  ICATEGORY,
  IANIMAL,
  getAnimals,
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
} from "./styles";

//* Component that displays a list of animals based on selected category
export function Home() {
  //* Get token from Redux store
  const token = useSelector((state: any) => state.authState.token);

  //* States for categories, animals, and selected category
  const [categories, setCategories] = useState<ICATEGORY[]>([]);
  const [animals, setAnimals] = useState<IANIMAL[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("0");

  //* Effect to fetch categories from API on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        //* Use token from Redux store to fetch categories
        const tokenUse = token;
        const categories = await getCategories(tokenUse);
        setCategories(categories);
      } catch (error) {
        console.error("Erro ao buscar categorias", error);
      }
    };

    fetchCategories();
  }, []);

  //* Effect to fetch animals from API when selected category changes
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        //* Use token from Redux store to fetch animals
        const tokenUse = token;
        const animals = await getAnimals(tokenUse);
        setAnimals(animals);
      } catch (error) {
        console.error("Erro ao buscar animais", error);
      }
    };

    fetchAnimals();
  }, [selectedCategory]);

  //* Function to render each animal item in the list
  const renderAnimalItem = ({ item }: { item: IANIMAL }) => {
    return (
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
          <Text>ID: {item.id}</Text>
          <Text>Nome:{item.name}</Text>
          <Text>Idade: {item.age} anos</Text>
        </InfoContainer>
      </CardContainer>
    );
  };

  //* Filter animals based on selected category
  const filteredAnimals =
    selectedCategory === "0"
      ? animals
      : animals.filter((animal) => animal.id === selectedCategory);

  //* Render the component
  return (
    <Wrapper>
      <Container>
        <Title>HOME</Title>
        <SubTitle>Escolha uma categoria para visualizar</SubTitle>
        <PickerContainer>
          {/* Picker to select category */}
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
    </Wrapper>
  );
}
