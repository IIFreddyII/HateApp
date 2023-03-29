# -*- coding: utf-8 -*-
"""
Created on Mon Mar 27 08:16:58 2023

@author: abrah
"""

import pandas as pd
import matplotlib.pyplot as plt
plt.rc("font", size=14)
import numpy as np
from textblob import TextBlob
import string
import re
#%matplotlib inline
import seaborn as sns
sns.set(style="white")
sns.set(style="whitegrid", color_codes=True)

# Preprocesado y modelado
from sklearn import svm
from sklearn.model_selection import train_test_split
from sklearn.model_selection import GridSearchCV
from sklearn.metrics import confusion_matrix
from sklearn.feature_extraction.text import TfidfVectorizer
import nltk
from nltk.corpus import stopwords


import os
#os.chdir("D:\\abraham\Documentos\Big Data Analytics\proyecto")
os.getcwd()
os.getcwd()
df=pd.read_csv("Tweets.csv")
df.head()
df.info()
df[['sentiment']]


#graficar el numero de tweetes de cada sentimiento
plt.hist(df["sentiment"])
plt.title("Sentimientos")
plt.xlabel("positivo-negativo-neutral")
plt.ylabel("Total de Tweets de cada tipo ")

#graficar el numero de cada tipo de tweets
total_sentiment=df["sentiment"].value_counts()
labels=df["sentiment"].unique()
colors=["blue", "red", "green", "gray"]
extraccion=0,0,0.1

fig, ax=plt.subplots(figsize=(6,8))
plt.pie(total_sentiment, labels=labels, autopct="%0.2f %%", colors=colors, 
        explode=extraccion, shadow=True)
ax.set_title("Porcentajes por cada categoria de sentimiento")
plt.rcParams.update({'font.size': 16, 'font.weight': 'bold'})
ax.legend()
plt.show()


#eliminar la columna que no es relevante en el dataframe
df.drop(['textID'], axis = 1,inplace=True)

#Revisar si existe algun dato nulo en los datos
df.isnull().sum()

#
ctypes={'negative':2,'positive':1,'neutral':0}
df['sentiment']=df['sentiment'].map(ctypes)
df.info

#sns.pairplot(df,vars=['','',''],hue='sentiment')

#modelo KNN
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

#dividimos en etiquetas y características los datos de sentiment
X = np.array(df.iloc[:,1:])
y = np.array(df['sentiment'])

# tomar los conjuntos de datos de prueba y de entrenamiento por separado.
X_train, X_test, y_train, y_test = train_test_split(X,y, test_size = 0.33, random_state = 42)



