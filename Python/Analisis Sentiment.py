# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""
#Importacion de librerias
import pandas as pd
import numpy as np
import nltk
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from nltk.stem import WordNetLemmatizer
import re
from sklearn.model_selection import train_test_split

#lectura del data set
dataset = pd.read_csv(r'Sentiment3.csv',encoding="ISO 8859-1")

#seleccionamos la informacion de interes en este caso nos interesa el genero, el texto del tuit y la localizacion
dataset = dataset[['text','sentiment','tweet_location']]


#procesamiento de datos
#La función train_test_split permite hacer una división de un conjunto de datos en dos 
#bloques de entrenamiento y prueba de un modelo (train and test).
train,test = train_test_split(dataset,test_size=0.1)

#analisis de un tuit para ver si trae simbolos
train['text'][307]

#limpiamos el tuit quitando todos los simbolos
pattern = "(#\w+)|(RT\s@\w+:)|(http.*)|(@\w+)|( ðºð¸ â¦)|(Ã°ÂŸÂ‡ÂºÃ°ÂŸÂ‡Â)"

ps = PorterStemmer()
lemmatizer = WordNetLemmatizer()

#creamos una clase para limpiar el texto
def Clean_text(data):
    #creamo dos listas de las dos cosas que nos interesan que son los tuits y los sentimientos
    tweets = []
    sentiments = []
    for index,row in data.iterrows():
        sentence = re.sub(pattern,'',row.text)
        words = [e.lower() for e in sentence.split()]
        words = [lemmatizer.lemmatize(word) for word in words if word not in stopwords.words('english')]
        words = ' '.join(words)
        tweets.append(words)
        sentiments.append(row.sentiment)
    return tweets,sentiments

#hacemos el uso de la clase que hemos creado para limpiar el texto
train_tweets,train_sentiments = Clean_text(train)
final_data = {'tweets':train_tweets,'sentiments':train_sentiments}
processed_data = pd.DataFrame(final_data)

#guardar nuevo data set con la informaicon limpia
processed_data.to_csv('Sentiments3_clean.csv')



