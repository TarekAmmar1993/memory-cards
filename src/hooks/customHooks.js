import { useEffect, useState } from "react";
import firebaseApp from "../Firebase/firebase";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

export const useCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const db = getFirestore(firebaseApp);

    const cardsQuery = query(
      collection(db, "Cards"),
      orderBy("createdAt", "desc"),
    );
    onSnapshot(cardsQuery, (snapshot) => {
      const updatedCards = [];
      snapshot.docs.forEach((doc) => {
        updatedCards.push({
          id: doc.id,
          questionPreview: doc.data().questionPreview,
          question: doc.data().question,
          answer: doc.data().answer,
        });
      });
      setCards(updatedCards);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return { cards, loading };
};
