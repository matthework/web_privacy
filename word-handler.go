package main

import (
	"fmt"
	"net/http"
	"time"
	"encoding/json"
	"github.com/gorilla/mux"
)

func viewWords(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Access-Control-Allow-Origin", "*")
	if err := json.NewEncoder(w).Encode(listWordsSort()); err != nil {
		fmt.Println(err)
	}
}

func viewFindWordByID(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Access-Control-Allow-Origin", "*")
	vars := mux.Vars(r)
	id := vars["id"]
  	if id != "" {
  		if err := json.NewEncoder(w).Encode(findWordByID(id)); err != nil {
			fmt.Println(err)
		}
	}
}

func addNewWord(w http.ResponseWriter, r *http.Request) {
	var word Word
	if err := json.NewDecoder(r.Body).Decode(&word); err != nil {
		panic(err)
	}
	word.TimeStamp = time.Now()
	if word.Name != "" {
		if err := insertWord(word); err != nil {
			fmt.Println(err)
		}
	}
}

func updateWord(w http.ResponseWriter, r *http.Request) {
	var word Word
	if err := json.NewDecoder(r.Body).Decode(&word); err != nil {
		fmt.Println(err)
	}
	vars := mux.Vars(r)
	id := vars["id"]
	word.TimeStamp = time.Now()
	if id != "" {
		if err := updateWordByID(id,word); err != nil {
			fmt.Println(err)
		}
	}
}

func removeWord(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	if id != "" {
		if err := removeWordByID(id); err != nil {
			fmt.Println(err)
		}
	}
}



