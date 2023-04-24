<div align="center" style="margin: 20px; text-align: center">

## PetLovers

 <p>A react native application using authentication through an API rest. </p>
 





 [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](https://github.com/BinaryLeo/react_native_petlover/blob/main/LICENSE)
  ![GitHub last commit](https://img.shields.io/github/last-commit/BinaryLeo/react_native_petlover?style=flat-square)
  ![GitHub top language](https://img.shields.io/github/languages/top/BinaryLeo/react_native_petlover?style=flat-square)
</div>
<div align="center" style="margin: 20px; text-align: center">

![rsz_whatsapp_image_2023-04-24_at_0010181](https://user-images.githubusercontent.com/72607039/233893123-a8a80eec-5520-4002-95ee-d2384951480e.jpg)
 
[![Skills](https://skillicons.dev/icons?i=react,ts,vscode,styledcomponents,redux,figma,&perline=6)](/BinaryLeo/react_native_petlover)
</div>

<table>
  <tr>
    <td>Video</td>
    <td>signIn</td>
    <td>Filter</td>
    <td>Pet List</td>
    <td>Details</td>
  </tr>
  <tr>
   <td><video src='https://user-images.githubusercontent.com/72607039/233896766-2b0155a2-87b0-4a74-b10e-678e83d6ba7c.mp4' width=150/></td>
    <td><img src="https://user-images.githubusercontent.com/72607039/233894829-39fca866-36ce-4a53-897b-397201069bc9.jpeg"></td>
    <td><img src="https://user-images.githubusercontent.com/72607039/233894256-0cf2e5cb-4bad-43a8-b04c-e98a346f2d30.jpeg"></td>
    <td><img src="https://user-images.githubusercontent.com/72607039/233894290-76ec1c88-4d8f-4c43-86de-aadc77d3040b.jpeg"></td>
    <td><img src="https://user-images.githubusercontent.com/72607039/233894197-5c8026b9-47ea-4adb-a351-5162d5c1c9ee.jpeg"></td>
    



  </tr>
</table>



#### Dependencies

#### State management:

```bash
yarn add @reduxjs/toolkit
yarn add react-redux
yarn add @types/react-redux -D
```

#### Component:

```bash
yarn add @react-native-picker/picker
```
#### Navigation:

```bash
yarn add @react-navigation/native
yarn add @react-navigation/stack
yarn add react-native-gesture-handler
yarn add react-native-reanimated
yarn add react-native-safe-area-context
```

#### Styling:

```bash
yarn add styled-components
yarn add @types/styled-components-react-native
yarn add react-native-svg
yarn add react-native-svg-transformer

```

#### API Requests:

```bash
yarn add axios
```

#### Endpoints

##### SignIn

```json
url: {baseURL}/auth/signin
tipo: POST
corpo: {
  "username": "username ...",
  "password": "password"
}
resposta:
{
    "token": "...",
    "type": "Bearer"
}
```

##### Categories and animals

```json
url: {baseURL}/categories
tipo: GET
cabeçalhos:
  - Authorization
resposta:
[
    {
        "name": "Weimaraner",
        "id": "1"
    },
    ...
]
url: {baseURL}/animals
tipo: GET
cabeçalhos:
  - Authorization
resposta:
[
    {
        "id": "1",
        "categoryId": "1",
        "name": "Oriental",
        "age": 7,
        "img": "http://loremflickr.com/640/480/animals?lock=1"
    },
    ...
]

```

#### Details
```json

url: {baseURL}/animals/{id}
tipo: GET
cabeçalhos:
  - Authorization
resposta:
{
    "id": "1",
    "categoryId": "1",
    "name": "Oriental",
    "age": 7,
    "img": "http://loremflickr.com/640/480/animals?lock=1",
    "description": "...",
    "phone": "+55 77 7609-0427",
    "email": "kenja@att.net"

} 
``
