import os
import nltk

try:
    os.system("pip install -r requirements.txt")
except:
    print('an error occurred while installing dependencies')

try:
    nltk.download('stopwords')
except:
    print('an error occurred while installing nltk resources')
