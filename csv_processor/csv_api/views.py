import csv, os, json
from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings

# Create your views here.
def process_csv(request):
    file_path = os.path.join(settings.BASE_DIR, 'csv_api/static/br-mg.csv')
    with open(file_path, 'r', encoding='utf-8') as fi:
        csv_reader = csv.reader(fi)
        response_text = [row[0] for row in csv_reader]
        # os.linesep will ensure cross-platform compatibility for line breaks
        # response_text is an array
        # response_text = os.linesep.join(first_col_data)
        """ but you will not need it when you are returning data as a json. If you 
        return the result using os.linesep you will get a long string separated by
        \r\n and this is not what you want """
        # print(json.dumps(response_text))
        return HttpResponse(json.dumps(response_text), content_type='application/json; charset=utf-8')
