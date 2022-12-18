#!/bin/sh

set -o errexit
set -o nounset

# pip install --upgrade pip
# pip install -r ./requirements.txt
# django-admin startproject real_state .
# python ./manage.py startapp accounts
python ./manage.py makemigrations
python ./manage.py migrate
python ./manage.py runserver 0.0.0.0:8000


