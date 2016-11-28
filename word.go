package main

import (
	"fmt"
	"time"
	"gopkg.in/mgo.v2/bson"	
)

type Word struct {
	ID      bson.ObjectId	`json:"_id,omitempty" bson:"_id,omitempty"`
	Name	string	`json:"name" bson:"name"`
	Category	string	`json:"category" bson:"category"`
	Tags   []string	`json:"tags" bson:"tags"`
	InUsed	bool	`json:"inused" bson:"inused"`
	Others []string 	`json:"others" bson:"others"`	
	TimeStamp time.Time 	`json:"timestamp" bson:"timestamp"`
}

var col_word = "word"

func listWords() (words []Word) {
	session := connect()
	defer session.Close()

	collection := session.DB(DB).C(col_word)
	err := collection.Find(nil).All(&words)
	if err != nil {
		fmt.Println(err)
	}
	return words
}

func listWordsSort() (words []Word) {
	session := connect()
	defer session.Close()

	collection := session.DB(DB).C(col_word)
	err := collection.Find(nil).Sort("-inused","name").All(&words)
	if err != nil {
		fmt.Println(err)
	}
	return words
}

func findWordByID(id string) (word Word) {
	session := connect()
	defer session.Close()

	collection := session.DB(DB).C(col_word)
	idoi := bson.ObjectIdHex(id)
	fQuery := bson.M{"_id": idoi}
	err := collection.Find(fQuery).One(&word)
	if err != nil {
		fmt.Println(err)
	}
	return word
}

func insertWord(word Word) (err error) {
	session := connect()
	defer session.Close()

	collection := session.DB(DB).C(col_word)
	err = collection.Insert(word)
	if err != nil {
		fmt.Println(err)
	}
	return err
}

func updateWordByID(id string, newWord Word) (err error) {
	session := connect()
	defer session.Close()

	collection := session.DB(DB).C(col_word)
	idoi := bson.ObjectIdHex(id)
	fQuery := bson.M{"_id": idoi}
	result := Word{}
    err = collection.Find(fQuery).One(&result)
	if err == nil {
		change := bson.M{"$set": newWord}
		err = collection.Update(fQuery, change)
		if err != nil {
			fmt.Println(err)
		}
	}else{
    	fmt.Println(err)
    }
	return err
}

func removeWordByID(id string) (err error) {
	session := connect()
	defer session.Close()

	collection := session.DB(DB).C(col_word)
	idoi := bson.ObjectIdHex(id)
	fQuery := bson.M{"_id": idoi}
	err = collection.Remove(fQuery)
	if err != nil {
		fmt.Println(err)
	}
	return err
}

func removeAllWords() (err error) {
	session := connect()
	defer session.Close()

	collection := session.DB(DB).C(col_word)
	collection.RemoveAll(nil)
	if err != nil {
		fmt.Println(err)
	}
	return err
}


