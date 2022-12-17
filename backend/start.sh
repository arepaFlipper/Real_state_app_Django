#!/bin/sh

set -o errexit
set -o nounset

# pip install --upgrade pip
# pip install -r ./requirements.txt
echo $(pwd)
django-admin startproject real_state .
python ./manage.py makemigrations
python ./manage.py migrate
python ./manage.py runserver 0.0.0.0:8000


