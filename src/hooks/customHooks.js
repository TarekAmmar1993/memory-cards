import { useEffect, useState } from 'react';
import firebase from '../Firebase/firebase';

export function useCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('Cards')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setCards(data);
      });

    return () => unsubscribe();
  }, []);

  return cards;
}
