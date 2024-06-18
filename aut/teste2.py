import requests
import time
import random
import json

isDentro = True

while (isDentro == True):
    response = requests.get('http://localhost:3000/api/areaSegura/localizacao/1')
    print('Resposta:', response.json())
    isDentro = response.json()['Status: ']
    if (isDentro == True):
        print('Dados enviados com sucesso!')
        print('Resposta:', response.json())
    else:
        requests.post('http://localhost:3000/api/areaSegura/enviarEmail/1')
        isDentro = False
    time.sleep(1);