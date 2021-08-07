from django.shortcuts import render
import requests
import json
import pandas as pd
from pandas import to_datetime
from pandas import DataFrame
from prophet import Prophet
from django.http import HttpResponse

def home(request):
    return render(request, 'index.html')

def aprendizado1(request):
    print("aprendizado1")
    data = requests.get('https://api.thingspeak.com/channels/196384/field/1/?results=500').json()
    Map = list(map(lambda x: { "Date":  x["created_at"], "Values": x["field1"] }, data["feeds"]))
    feeds = json.dumps(Map)

    df = pd.read_json(feeds)

    #print(df.to_string())
    df.columns = ['ds', 'y']
    df['ds']= to_datetime(df['ds'])
    df['ds'] = df['ds'].dt.strftime('%Y-%m-%d %H:%M:%S')

    model = Prophet()
    model.fit(df)

    #Prever os proximos 5 mins
    future = model.make_future_dataframe(periods=5, freq='min')
    forecast = model.predict(future)

    #forecast = model.predict(future)
    Result = pd.DataFrame(data=forecast[['ds','yhat']]).tail()
    Result.columns = ['created_at', 'field']
    field = json.dumps(Result.to_dict('records'))

    return HttpResponse(field,content_type ="application/json")

