# -*- coding: utf-8 -*-
"""
Created on Mon Mar 27 23:10:04 2023

@author: abrah
"""

import pandas as pd                                  
import numpy as np                      
import matplotlib.pyplot as plt
             
from sklearn.model_selection import train_test_split  


import os
os.chdir("D:\\abraham\Documentos\Big Data Analytics\proyecto")
os.getcwd()
os.getcwd()
df=pd.read_csv("Tweets.csv")
df.head()
df.info()

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

 
#registro de los tweets por su categoria
datasetCR = df[df['sentiment']=='positive']
datasetCR
datasetCR.shape

#se eliminan las columnas que no serviran
df.info()
df1 = df.drop(['textID', 'text', 'selected_text'], axis = 1)
df1.head()
df1.info()


## Codificación 1-hot de variables temporales
variables_ficticias = ['sentiment']
for variable in variables_ficticias:
    dummies = pd.get_dummies(df1[variable], prefix=variable, drop_first=False)
    df1 = pd.concat([df1, dummies], axis=1)
df1.head()


# Creación de diccionario
mapeo= {'negative':0,'neutral':1,'positive':2}
df1= df1.replace({'sentiment': mapeo})
df1

# Separación de las características y las variables objetivo
caracteristicas = df1.drop(['sentiment'],axis=1)
targets = df1['sentiment']


# Construcción de los conjuntos de entrenamiento y prueba.
x_train, x_test, y_train, y_test = train_test_split(caracteristicas, targets,test_size = 0.20,random_state = 10)

# verificación del tamaño de los conjuntos de train y test
print(x_train.shape)
print(y_train.shape)
print(x_test.shape)
print(y_test.shape)


##CONSTRUCCIÓN DE MÁQUINA DE SOPORTE VECTORIAL

#IMPORTAR LIBRERIAS
from sklearn import svm
from sklearn.metrics import f1_score, precision_score, recall_score

modeloSVM = svm.SVC(C=25, kernel='rbf', gamma=100 ,probability=True)
#MOD=svm.SVC(C=5, kernel='poly',grade=)
modeloSVM.fit(x_train, y_train)

acc_train = modeloSVM.score(x_train, y_train)
acc_test = modeloSVM.score(x_test, y_test)
print('acc_train = ', acc_train)
print('acc_test = ', acc_test)

y_pred=modeloSVM.predict(x_test)
y_pred

p=precision_score(y_test, y_pred, average=None)
r=recall_score(y_test, y_pred, average=None)
print(p,r)

f1=f1_score(y_test, y_pred,average=None)
print(f1)

T=np.mean(p)
Tr=np.mean(r)
print(T,Tr)

promT=np.mean(f1)
print(promT)

