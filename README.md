<p align="center">
<img width="400px" src="https://user-images.githubusercontent.com/64798006/174625968-a60bc82f-c94f-4365-8e0f-101c0c6e223a.png" />
  </p>
  
# Mayoral Frontend Assignment
### Run the project:

```sh
$ yarn install
$ yarn run dev
```

## 1.Tech stack 🛠️

- Using HTML, Sass, TypeScript, React, Next js.

- Use of mediaqueries for the adaptation of the application to the different devices, mobile and desktop.

- Using git for project version control.

## 2.Requirements and functions
- [x] Separates into components in an optimal and organised way
- [x] The view should be as close as possible to the attached photos
- [x] Implement product search by name
- [x] Consuming a JSON with product data (local or external JSON)
- [x] Change the view with the icons indicated in the picture: Desktop from 4 to 3 elements, Mobile from 3 to 2 elements
- [x] Implement logic and design of a "sort" component (ascending and descending price).
- [x] Create the appropriate unit tests

## 2.Components :jigsaw:


 ![componentsMayoral](https://user-images.githubusercontent.com/64798006/174634320-949101ac-42f5-4af9-a5f6-d153bae6db40.PNG)
 
 - The application has a total of 6 components, **index** is the root component. First of all, the **Filters** component contains a form and this, in turn, contains the two components in charge of filtering, **FilterName** by name and **FilterPrice** by ascending or descending price. This last component, I have chosen to make a "select" because I found it more intuitive for the user, as he/she can intuit from the first glance that he/she can sort by price.
- **TshirtsList** component is where the _filter_ by name, the _sort_ (ascending or descending price) and the _map_ are made, to paint the list. All these functions have been developed through the "props" passed on from their parent component.
- The content of the list is developed in a separate component called **TshirtItem**, where it is passed through the props, the object generated with a map in the previous component.

## 3.Layout and styles :art:

- Responsive design for mobile and desktop (Formatting changes from 1000px onwards) using mediaqueries.
- SCSS and BEM format for styles.
- Flex and Grid for adapting lists to different formats.
- SCSS files divided according to each component.

## 4.Trade off :bulb:

- Use of **Typescript** and **Next js**: has been new to me, so I need to practice and study the documentation much better. For now, the types have been used for the properties and functions of my components.

- Next images: It is necessary to change the **img** element for the **Image** component. I haven't had time to do it because I need to know exactly what properties it needs and study its conditions.

- Unit **test**: I have applied tests to one of the components but I need to study more about the Jest documentation and test the remaining components.

## 4.Remarks :mag_right:

- Jest.config.js file: I have configured the compilerOptions path, because it was not displaying the tests and I only had to delete a "./" In this same file, (line 11) I have added an empty object because I could not find the path "paths".

- Select type filter: I have chosen to make a "select" because I found it more intuitive for the user, as he/she can intuit from the first glance that he/she can sort by price.

- Fetch: Although I have obtained the data locally, I have simulated a fetch

``export async function getServerSideProps() {
 const res = await fetch(`http://localhost:3000/data.json`);
 const data = await res.json();
 return { props: { data } };
}``

- Types.ts file: I have created a types file to optimally pass the types to the necessary components.





  




