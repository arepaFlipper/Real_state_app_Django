import os
import environ
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)
# reading the environment variables from .env
env_file = os.path.join(BASE_DIR, '.env')
environ.Env.read_env(env_file)
