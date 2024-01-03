import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, child, get } from "firebase/database";
import { database } from "../../firebase/config";
import { toast } from "react-toastify";

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (_, thunkAPI) => {
    const dbRef = ref(database);

    try {
      const snapshot = await get(child(dbRef, "/"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        const allTeachers = Object.values(data);
        console.log("Teachers data:", allTeachers);
        return allTeachers;
      } else {
        toast.warn("Oops, no teachers available");
      }
    } catch (error) {
      console.error("Error fetching teachers:", error);
      toast.error(`${error}`);
      throw error; // Додайте цей рядок, щоб повторно викидати помилку
    }
  }
);
