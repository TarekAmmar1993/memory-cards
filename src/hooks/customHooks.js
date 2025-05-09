import { useEffect, useState } from "react";
import firebaseApp from "../Firebase/firebase";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export const useCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
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
          category: doc.data().category,
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

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const categoriesQuery = query(
      collection(db, "Categories"),
      orderBy("categoryName", "asc"),
    );
    onSnapshot(categoriesQuery, (snapshot) => {
      const updatedCategories = [];
      snapshot.docs.forEach((doc) => {
        updatedCategories.push({
          id: doc.id,
          categoryName: doc.data().categoryName,
        });
      });
      setCategories(updatedCategories);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return { categories, loading };
};
