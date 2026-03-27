import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  QueryConstraint,
} from "firebase/firestore";

// Articles collection
export const articlesRef = collection(db, "articles");

// Get all articles
export async function getAllArticles() {
  const snapshot = await getDocs(articlesRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Get articles with filters
export async function getArticles(...constraints: QueryConstraint[]) {
  const q = query(articlesRef, ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Get single article
export async function getArticle(id: string) {
  const docRef = doc(db, "articles", id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}

// Add article
export async function addArticle(data: any) {
  return await addDoc(articlesRef, {
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

// Update article
export async function updateArticle(id: string, data: any) {
  const docRef = doc(db, "articles", id);
  return await updateDoc(docRef, {
    ...data,
    updatedAt: new Date(),
  });
}

// Delete article
export async function deleteArticle(id: string) {
  const docRef = doc(db, "articles", id);
  return await deleteDoc(docRef);
}

// Users collection
export const usersRef = collection(db, "users");

// Get user profile
export async function getUserProfile(uid: string) {
  const docRef = doc(db, "users", uid);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}

// Create user profile
export async function createUserProfile(uid: string, data: any) {
  const docRef = doc(db, "users", uid);
  return await updateDoc(docRef, {
    ...data,
    createdAt: new Date(),
  }).catch(() => addDoc(usersRef, { uid, ...data, createdAt: new Date() }));
}
