import SingleCat from "./SingleCat";

export const cats = [
  { id: 'cheetah-1', name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://example.com/cheetah.jpghttps://wwwhttps://wildlifephttps://thomsonsafaris.com/wp-content/uploads/2012/12/cheetah-running-turn_1758173843.jpgrairiepark.org/storage/54/responsive-images/01J44V27EXKDC8C7NN9Y19Y34A___media_library_original_442_442.webp.google.com/imgres?q=cougar&imgurl=https%3A%2F%2Fwildlifeprairiepark.org%2Fstorage%2F54%2F01J44V27EXKDC8C7NN9Y19Y34A.webp&imgrefurl=https%3A%2F%2Fwildlifeprairiepark.org%2Fanimal%2Fcougar&docid=1M0TK2PuXbP4uM&tbnid=0D6HkRiagbrPjM&vet=12ahUKEwjYt_3xpI6PAxUIsFYBHea_FTQQM3oECBYQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwjYt_3xpI6PAxUIsFYBHea_FTQQM3oECBYQAA' },
  { id: 'cougar-1', name: 'Cougar', latinName: 'Puma concolor', image: 'https://example.com/cougar.jpghttps://wildlifeprairiepark.org/storage/54/responsive-images/01J44V27EXKDC8C7NN9Y19Y34A___media_library_original_442_442.webp' },
  { id: 'jaguar-1', name: 'Jaguar', latinName: 'Panthera onca', image: 'https://example.com/jaguar.jpghttps://reidparkzoo.org/wp-content/uploads/2025/01/bella-jaguar-close-up-focused-scaled.webp' },
  { id: 'leopard-1', name: 'Leopard', latinName: 'Panthera pardus', image: 'https://example.com/leopard.jphttps://assets.speakcdn.com/assets/2848/amur_leopard_122920-2-2.jpg?w=960g' },
  { id: 'lion-1', name: 'Lion', latinName: 'Panthera leo', image: 'https://example.com/lion.jpghttps://images.unsplash.com/reserve/wrev1ljvQ6KlfyljCQG0_lion.jpg?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGxpb258ZW58MHx8MHx8fDA%3D' },
  { id: 'snow-leopard-1', name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://example.com/snowhttps://cdn.britannica.com/52/170952-050-A545E35D/carnivore-Snow-leopard-regions-subcontinent-Asia-Indian.jpg-leopard.jpg' },
  { id: 'tiger-1', name: 'Tiger', latinName: 'Panthera tigris', image: 'https://example.com/tiger.jphttps://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/11/31/ac/img-2531-largejpg.jpg?w=1200&h=-1&s=1g' },
];

function BigCats() {
  return (
    <div>
      {cats.map(cats = (
      <SingleCat
        key={cats.id}
        name={cats.name}
        image={cats.image}
      />
      ))}
    </div>

  );

}

 /* import React, { useState } from 'react';

function AlphabeticalSorter() {
  const [items, setItems] = useState(['Orange', 'Apple', 'Banana', 'Grape']);

  const sortAlphabetically = () => {
    // Create a copy to avoid mutating the original state directly
    const sortedItems = [...items].sort((a, b) => a.localeCompare(b));
    setItems(sortedItems);
  };

  return (
    <div>
      <h1>Sorted Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={sortAlphabetically}>Sort Alphabetically</button>
    </div>
  );
}

export default AlphabeticalSorter; //

const [cats]


