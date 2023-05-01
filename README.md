# summaryApp

summaryApp is a Django web application that uses [OpenAI's GPT-3 API](https://platform.openai.com/docs/api-reference/gpt-3) to summarize articles obtained from the [News API](https://newsapi.org/) and scraped with [BeautifulSoup 4](https://pypi.org/project/beautifulsoup4/). For frontend [ReactJS](https://react.dev/) is used.

## Prerequisites

To run summaryApp, you will need to have Python 3.7 or later installed on your system. You will also need a [OpenAI API key](https://platform.openai.com/account/api-keys) and [News API key](https://newsapi.org/docs/get-started)

## Installation

1. Clone the repository - `git clone https://github.com/luisKisters/summaryApp`
2. Run [`setup.py`](https://github.com/luisKisters/summaryApp/blob/master/setup.py) - `python3 setup.py`
3. Put your [OpenAI API key](https://platform.openai.com/account/api-keys) key into [summarize/api_key.txt](https://github.com/luisKisters/summaryApp/blob/master/summarize/api_key.txt) and your [News API key](https://newsapi.org/docs/get-started) into [article/api_key.txt](https://github.com/luisKisters/summaryApp/blob/master/article/api_key.txt)

## Starting
1. Start Django Server - `python3 manage.py runserver`
2. Go in your browser to [localhost:8000/](http://localhost:8000/) (don't go to [127.0.0.1:8000/](http://127.0.0.1:8000/) this isn't working)

## Design 
 [![Click here to open Figma design](https://github.com/luisKisters/summaryApp/blob/master/FigmaDesign.png)](https://www.figma.com/file/cDJzr3brGZjv5UTEu6uZZb/summaryApp?node-id=0%3A1&t=RHAEOObHPoZbFvds-1)


## Flowchart 
 [![Click here to open Lucidspark flowchart](https://github.com/luisKisters/summaryApp/blob/master/LucidsparkFlowchart.png)](https://lucid.app/lucidspark/703976a1-331a-49f3-9179-cc9ee31bae16/edit?viewport_loc=-1545%2C45%2C2248%2C1153%2C0_0&invitationId=inv_ad92cf59-9cc3-4d6b-a18f-4893af71582d)
 
 ## ToDo
- [ ] Make selecting article topic and time period work
  - [ ] Stop summarizing articles from [localhost:8000/](http://localhost:8000/) because this returns article with default parameters and not selected parameters
- [ ] Explain how to use API in [README.md](https://github.com/luisKisters/summaryApp/blob/master/README.md)
- [ ] Start using [GitHub Issues](https://github.com/luisKisters/summaryApp/issues) instead of ToDo list for issues/nugs/errors
- [ ] Add tests 
- [ ] Add workflows
- [ ] Add automated build
- [ ] (Summarize.jsx) Add that if the the API request to http://localhost:8000/api/summary/EN/100/ doesn't return statusText: 'OK' the error gets displayed in 
- [ ] Make visiting Django webserver over [127.0.0.1:8000/](http://127.0.0.1:8000/) possible 
  - [ ] Add [127.0.0.1:8000/](http://127.0.0.1:8000/) to [ALLOWED_HOSTS](https://github.com/luisKisters/summaryApp/blob/master/summaryApp/settings.py#L28)
  - [ ] Solve `CSRF verification failed. Request aborted.` error on [127.0.0.1:8000/](http://127.0.0.1:8000/) when trying to generate a summary 
- [ ] Use priority system for tasks with colors
- [ ] Maybe start using a software for tasks 
- [ ] Add that if article_api.py returns no articles, display an error
- [ ] Automatically sort solved ToDos/Tasks to bottom of [Todo_list.md](https://github.com/luisKisters/summaryApp/blob/master/Todo_list.md)
- [x] Add README.md
- [x] Change summary API response format to so that it only returns the summary, not the article 

[ToDo list file](https://github.com/luisKisters/summaryApp/blob/master/Todo_list.MD)