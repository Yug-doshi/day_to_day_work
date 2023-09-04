import React, { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { collection, getDocs, addDoc } from "firebase/firestore";
import "./firebase.css";

export default function Notes() {
  useEffect(() => {
    read();
  }, []);

  const [data, setData] = useState();
  const [mynotes, setMyNotes] = useState([]);
  const notes = collection(db, "notes");

  const write = async () => {
    let text = document.getElementById("text");
    text.value = "";
    await addDoc(notes, { value: data });
  };

  const read = async () => {
    const mydata = await getDocs(notes);
    setMyNotes(
      mydata.docs.map((doc) => {
        return doc.data();
      })
    );
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 className="heading">Enter a Note:</h1>
        <textarea
          class="textarea border border-white-300 p-2 rounded-md focus:ring-white-300 w-4/12 h-56"
          style={{
            backgroundColor: "#191532",
            color: "white",
            marginTop: "20px",
          }}
          onChange={(event) => {
            setData(event.target.value);
          }}
          id="text"
        ></textarea>
        <br></br>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          style={{ marginTop: "20px" }}
          onClick={write}
        >
          Write
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          style={{ marginTop: "20px", marginLeft: "5vw" }}
          onClick={read}
        >
          Read
        </button>
        <hr style={{ color: "white", marginTop: "30px" }}></hr>
        <h1
          className="heading"
          style={{ marginTop: "5px", marginBottom: "20px" }}
        >
          All Notes:
        </h1>
        <hr style={{ color: "white", marginBottom: "10px" }}></hr>
        <ol type="1" style={{ color: "white" }}>
          {mynotes.map((note, index) => {
            return (
              <li
                style={{
                  color: "white",
                  fontSize: "19px",
                  marginBottom: "10px",
                }}
              >
                {index + 1 + ". "} {note.value}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
