---
sidebar_position: 4
---

# Data about epigrams

Let us now have a look at the data available for each epigram. Most of these data are present in the list of epigrams (`alldata['results']`), but each epigram has its own endpoint, structured on the basis of its book and its number.

The _Greek Anthology_ has 16 books, as you can see here:

```python
number_of_books = requests.get('https://anthologiagraeca.org/api/books/').json()['count']

print(number_of_books)
  16
```

An epigram is normally identified by a number (for exemple 1 or 145).

Sometimes there are two or more epigrams for the same number. In these cases letters are used (_e.g_. 132a).

Based on this information the epigram endpoind will be structured as follows:

`/passages/urn:cts:greekLit:tlg7000.tlg001.ag:`+bookNumber`.`+epigramNumber+epigramLetter

> an example from the platform: https://anthologiagraeca.org/passages/urn:cts:greekLit:tlg7000.tlg001.ag:12.132a/

This url is avaiable in the list of epigrams as one can see in the field url of each result (let us take the first one here):

```python
epigrams_url = 'http://anthologiagraeca.org/api/passages/'
epigrams = requests.get(epigrams_url).json()
epigrams['results'][0]['url']
  'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:1.1/?format=json'
```
Let us have a look at the epigram 6.13, which means the epigram number 13 of the book 6:

```python
ep6_13 = requests.get('https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.13').json()

ep6_13
```

<details>
<summary>Results</summary>
<div>

```
{'id': 394,
 'book': {'url': 'https://anthologiagraeca.org/api/books/5/', 'number': 6},
 'fragment': 13,
 'sub_fragment': '',
 'urn': 'urn:cts:greekLit:tlg7000.tlg001.ag:6.13',
 'url': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.13/',
 'web_url': '/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.13/',
 'manuscripts': ['http://digi.ub.uni-heidelberg.de/iiif/2/cpgraec23%3A142.jpg/pct:10.614886731391586,73.26114119117034,50.355987055016186,4.664723032069971/full/0/default.jpg',
  'http://digi.ub.uni-heidelberg.de/iiif/2/cpgraec23%3A143.jpg/pct:30.37231055564613,13.349681305818653,51.660362990702126,7.613758509494807/full/0/default.jpg'],
 'texts': [{'url': 'https://anthologiagraeca.org/api/texts/1463/',
   'language': 'grc',
   'text': '????? ?????????????? ?????? ??????????? ????? ???????????? ??????????? ???????????????,\n????????????? ??????, ??????????? ??????????? ???????? ?????????????????:\n????? ???????? ??????? ????????????? ???????????? ????????, ??????????? ????? ???????????\n????????????????????, ?????????????? ????? ??? ???????????? ?????????????????.\n?????????? ????? ????? ??????? ?????????? ??????? ??????????? ????????????????? ???????????,\n????? ????? ??????? ?????????????, ????? ????? ??????? ?????????????. '},
  {'url': 'https://anthologiagraeca.org/api/texts/1464/',
   'language': 'ita',
   'text': 'Tre fratelli ti hanno dedicato queste reti,\nPan cacciatore, ognuna proveniente da una caccia differente.\nPigre queste di uccelli, Damis queste,\ndi bestie feroci, Cleitore, il terzo, di animali marini.\nIn cambio dai una caccia fortunata al primo in aria\nal secondo nei boschi e al terzo sulle rive.'},
  {'url': 'https://anthologiagraeca.org/api/texts/1465/',
   'language': 'fra',
   'text': "Ces trois fr??res t'ont d??di?? ces filets,\nPan chasseur, chacun issu d'une chasse diff??rente.\nPigres celles-ci, d'oiseaux, Damis celle-ci,\nde b??tes f??roces, Cl??itor, le troisi??me, d'animaux marins.\nEn ??change donne une bonne chasse au premier dans l'air,\nau deuxi??me dans les bois et au troisi??me sur les rivages."},
  {'url': 'https://anthologiagraeca.org/api/texts/1466/',
   'language': 'fra',
   'text': "Les trois fr??res t'ont consacr??, chasseur Pan, ces filets, pris par chacun ?? son genre de chasse: Pigr??s, pour les oiseaux; Damis, pour les quadrup??des; Cl??itor, pour le peuple de la mer. Envoie-leur en ??change une bonne chasse ?? l'un par les airs, au second par les bois, ?? l'autre par les gr??ves."},
  {'url': 'https://anthologiagraeca.org/api/texts/1467/',
   'language': 'eng',
   'text': 'Huntsman Pan, the three brothers dedicated these nets to thee, each from a different chase: Pigres these from fowl, Damis these from beast, and Clitor his from the denizens of the deep. In return for which send them easily caught game, to the first through the air, to the second through the woods, and to the third through the shore-water.'}],
 'authors': [{'url': 'https://anthologiagraeca.org/api/authors/19/',
   'tlg_id': 'tlg-1458',
   'names': [{'name': 'Leonidas of Tarentum', 'language': 'eng'},
    {'name': '???????????????? ??? ?????????????????????', 'language': 'grc'},
    {'name': 'Leonida di Taranto', 'language': 'ita'},
    {'name': '????????????????? ??????????????????????????', 'language': 'grc'},
    {'name': "L??onidas d'Alexandrie", 'language': 'fra'},
    {'name': 'Leonidas of Alexandria', 'language': 'eng'}]}],
 'cities': [],
 'keywords': [{'url': 'https://anthologiagraeca.org/api/keywords/1/',
   'names': [{'name': 'distique ??l??giaque', 'language': 'fra'},
    {'name': 'distico elegiaco', 'language': 'ita'},
    {'name': 'Elegiac couplet', 'language': 'eng'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/1/',
    'names': [{'name': 'Formes m??triques', 'language': 'fra'},
     {'name': 'Metric forms', 'language': 'eng'},
     {'name': 'Metra', 'language': 'lat'},
     {'name': 'Forme metriche', 'language': 'ita'},
     {'name': 'Formas m??tricas', 'language': 'por'}]}},
  {'url': 'https://anthologiagraeca.org/api/keywords/4/',
   'names': [{'name': '??poque hell??nistique', 'language': 'fra'},
    {'name': 'epoca ellenistica', 'language': 'ita'},
    {'name': 'hellenistic period', 'language': 'eng'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/4/',
    'names': [{'name': '??poques', 'language': 'fra'},
     {'name': 'Periods', 'language': 'eng'},
     {'name': 'Tempora', 'language': 'lat'},
     {'name': 'Periodi', 'language': 'ita'},
     {'name': '??pocas', 'language': 'por'}]}},
  {'url': 'https://anthologiagraeca.org/api/keywords/73/',
   'names': [{'name': 'Valid?? par William', 'language': 'fra'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/11/',
    'names': [{'name': 'Validation', 'language': 'fra'},
     {'name': 'Validation', 'language': 'eng'},
     {'name': 'Contralectus', 'language': 'lat'},
     {'name': 'Validazione', 'language': 'ita'},
     {'name': 'Valida????o', 'language': 'por'}]}},
  {'url': 'https://anthologiagraeca.org/api/keywords/186/',
   'names': [{'name': 'dedicatory', 'language': 'eng'},
    {'name': 'votif (anath??matique)', 'language': 'fra'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/3/',
    'names': [{'name': 'Genres', 'language': 'fra'},
     {'name': 'Genres', 'language': 'eng'},
     {'name': 'Genera', 'language': 'lat'},
     {'name': 'Generi', 'language': 'ita'},
     {'name': 'G??neros', 'language': 'por'}]}},
  {'url': 'https://anthologiagraeca.org/api/keywords/234/',
   'names': [{'name': 'Damis', 'language': 'eng'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',
    'names': [{'name': 'Personnes cit??es', 'language': 'fra'},
     {'name': 'Quoted persons', 'language': 'eng'},
     {'name': 'Homines memorati', 'language': 'lat'},
     {'name': 'Persone citate', 'language': 'ita'},
     {'name': 'Pessoas citadas', 'language': 'por'}]}},
  {'url': 'https://anthologiagraeca.org/api/keywords/270/',
   'names': [{'name': 'Chasse', 'language': 'fra'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/10/',
    'names': [{'name': 'Motifs', 'language': 'fra'},
     {'name': 'Motifs', 'language': 'eng'},
     {'name': 'Themata', 'language': 'lat'},
     {'name': 'Motivi', 'language': 'ita'},
     {'name': 'Motivos', 'language': 'por'}]}},
  {'url': 'https://anthologiagraeca.org/api/keywords/492/',
   'names': [{'name': 'Pan', 'language': 'eng'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/7/',
    'names': [{'name': 'Divinit??s', 'language': 'fra'},
     {'name': 'Deities', 'language': 'eng'},
     {'name': 'Divinitates', 'language': 'lat'},
     {'name': 'Divinit??', 'language': 'ita'},
     {'name': 'Divindades', 'language': 'por'}]}},
  {'url': 'https://anthologiagraeca.org/api/keywords/574/',
   'names': [{'name': '????????????', 'language': 'grc'},
    {'name': 'Pigr??s', 'language': 'fra'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',
    'names': [{'name': 'Personnes cit??es', 'language': 'fra'},
     {'name': 'Quoted persons', 'language': 'eng'},
     {'name': 'Homines memorati', 'language': 'lat'},
     {'name': 'Persone citate', 'language': 'ita'},
     {'name': 'Pessoas citadas', 'language': 'por'}]}},
  {'url': 'https://anthologiagraeca.org/api/keywords/575/',
   'names': [{'name': '??????????????', 'language': 'grc'},
    {'name': 'Cl??itor', 'language': 'fra'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/9/',
    'names': [{'name': 'Personnes cit??es', 'language': 'fra'},
     {'name': 'Quoted persons', 'language': 'eng'},
     {'name': 'Homines memorati', 'language': 'lat'},
     {'name': 'Persone citate', 'language': 'ita'},
     {'name': 'Pessoas citadas', 'language': 'por'}]}}],
 'scholia': [{'book': 6,
   'fragment': 13,
   'sub_fragment': '',
   'number': 1,
   'url': 'https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:6.13.1/'},
  {'book': 6,
   'fragment': 13,
   'sub_fragment': '',
   'number': 2,
   'url': 'https://anthologiagraeca.org/api/scholia/urn:cts:greekLit:tlg5011.tlg001.sag:6.13.2/'}],
 'comments': [{'description': ['# Fresque de Pomp??i\n\n Cette ??pigramme est repr??sent??e, selon Gutzwiller, dans une fresque de Pomp??i'],
   'language': ['fra']},
  {'description': ["# Imitations de 6.13\n\n C'est vraisemblablement cette pi??ce de L??onidas qui a inspir?? les ??pigr. 11-16 et 179-187, entre autres 14 (d'Antipater) et 16 (d'Archias), qui n'en sont que des imitations assez serviles. Elle ??tait, en tous cas, une des plus classiques de toute la s??rie; car c'est celle-l?? qu'on avait grav??e sur le mur d'une maison de Pomp??i pour servir de l??gende ?? une sc??ne o?? ??tait peinte cette offrande de trois chasseurs; mais il ne subsiste, des trois distiques que comportait l'inscription, que cinq lettres diss??min??es et les six premi??res du v. 6; et il a fallu toute la perspicacit?? de Dilthey pour y reconna??tre des fragments de notre ??pigramme. \n-P. Waltz "],
   'language': ['fra']}],
 'external_references': [],
 'internal_references': [{'to_passage': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.11/',
   'reference_type': 'Default'},
  {'to_passage': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.14/',
   'reference_type': 'Default'},
  {'to_passage': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.179/',
   'reference_type': 'Default'},
  {'to_passage': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.186/',
   'reference_type': 'Default'},
  {'to_passage': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:6.187/',
   'reference_type': 'Default'}],
 'media': []}
 ```

</div>
</details>

```python
ep12_132a = requests.get('https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:12.132a').json()

ep12_132a
```

<details>
<summary>Results</summary>
<div>

```
{'id': 3199,
 'book': {'url': 'https://anthologiagraeca.org/api/books/8/', 'number': 12},
 'fragment': 132,
 'sub_fragment': 'a',
 'urn': 'urn:cts:greekLit:tlg7000.tlg001.ag:12.132a',
 'url': 'https://anthologiagraeca.org/api/passages/urn:cts:greekLit:tlg7000.tlg001.ag:12.132a/',
 'web_url': '/passages/urn:cts:greekLit:tlg7000.tlg001.ag:12.132a/',
 'manuscripts': ['http://digi.ub.uni-heidelberg.de/iiif/2/cpgraec23%3A589.jpg/pct:11.78916,41.5646,60.6891,16.87853/full/0/default.jpg'],
 'texts': [{'url': 'https://anthologiagraeca.org/api/texts/6328/',
   'language': 'grc',
   'text': '??? ????????? ??????????????????, ????? ????? ????????? ??????? ????? ??????????? ??????????,\n ????????? ????? ???????????????????, ?????????????? ???????????????????????.\n???? ??????????????; ??????? ????????????????? ???????? ????? ?????????????????? ???????????\n ???????????????, ??????? ??????????? ????? ???????? ??????? ??????????????;\n\n                  ??????? ???????????; ??????? ??????????? ??????????? ??????????????? ????????????????,\n??????? ??????? ??????? ????????????? ???????????????? ??????????.\n ?????????? ???????????? ???????????: ???????? ??????? ??????????. ????????? ??????????????\n????? ???????????, ?????????? ???????????????? ????????????.'},
  {'url': 'https://anthologiagraeca.org/api/texts/11852/',
   'language': 'eng',
   'text': 'O sore-afflicted soul, now thou bumest in the fire and now thou revivest, recovering thy breath. Why dost thou weep? When thou didst nurse merciless Love in thy bosom knewest thou not that he was being nursed for thy bane ? Didst thou not know it ? Now learn to know the pay of thy good nursing, receiving from him fire and cold snow therewith. Thyself thou hast chosen this ; bear the pain. Thou sufferest the due guerdon of what thou hast done, burnt by his boiling honey.'},
  {'url': 'https://anthologiagraeca.org/api/texts/11856/',
   'language': 'fra',
   'text': 'Oh\xa0! mon ??me accabl??e de souffrances, tant??t c???est le feu qui te br??le, tant??t tu reprends vie en retrouvant le souffle\xa0! Tu pleures\xa0? Lorsque dans ton sein tu nourrissais l???impitoyable Amour, ne savais-tu pas que c?????tait contre toi que tu le nourrissais\xa0? Tu ne le savais pas\xa0? Vois maintenant le salaire de tes bons soins\xa0: tu re??ois tout ensemble feu et neige glac??e\xa0! C???est toi, toi qu???il l???a choisi\xa0! Supporte ta douleur\xa0! Juste souffrance de tes actes, la br??lure du miel ardent\xa0!'}],
 'authors': [{'url': 'https://anthologiagraeca.org/api/authors/2/',
   'tlg_id': 'tlg-1492',
   'names': [{'name': '??????????????????', 'language': 'grc'},
    {'name': 'Meleager', 'language': 'eng'},
    {'name': 'M??l??agre', 'language': 'fra'}]}],
 'cities': [],
 'keywords': [{'url': 'https://anthologiagraeca.org/api/keywords/1/',
   'names': [{'name': 'distique ??l??giaque', 'language': 'fra'},
    {'name': 'distico elegiaco', 'language': 'ita'},
    {'name': 'Elegiac couplet', 'language': 'eng'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/1/',
    'names': [{'name': 'Formes m??triques', 'language': 'fra'},
     {'name': 'Metric forms', 'language': 'eng'},
     {'name': 'Metra', 'language': 'lat'},
     {'name': 'Forme metriche', 'language': 'ita'},
     {'name': 'Formas m??tricas', 'language': 'por'}]}},
  {'url': 'https://anthologiagraeca.org/api/keywords/3/',
   'names': [{'name': 'erotic', 'language': 'eng'},
    {'name': '??rotic', 'language': 'fra'},
    {'name': 'erotico', 'language': 'ita'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/3/',
    'names': [{'name': 'Genres', 'language': 'fra'},
     {'name': 'Genres', 'language': 'eng'},
     {'name': 'Genera', 'language': 'lat'},
     {'name': 'Generi', 'language': 'ita'},
     {'name': 'G??neros', 'language': 'por'}]}},
  {'url': 'https://anthologiagraeca.org/api/keywords/4/',
   'names': [{'name': '??poque hell??nistique', 'language': 'fra'},
    {'name': 'epoca ellenistica', 'language': 'ita'},
    {'name': 'hellenistic period', 'language': 'eng'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/4/',
    'names': [{'name': '??poques', 'language': 'fra'},
     {'name': 'Periods', 'language': 'eng'},
     {'name': 'Tempora', 'language': 'lat'},
     {'name': 'Periodi', 'language': 'ita'},
     {'name': '??pocas', 'language': 'por'}]}},
  {'url': 'https://anthologiagraeca.org/api/keywords/181/',
   'names': [{'name': 'Couronne de M??l??agre', 'language': 'fra'}],
   'category': {'url': 'https://anthologiagraeca.org/api/keyword_categories/14/',
    'names': [{'name': 'Collections', 'language': 'fra'},
     {'name': 'Collections', 'language': 'eng'},
     {'name': 'Collecteana', 'language': 'lat'},
     {'name': 'Collezioni', 'language': 'ita'},
     {'name': 'Cole????es', 'language': 'por'}]}}],
 'scholia': [],
 'comments': [],
 'external_references': [],
 'internal_references': [],
 'media': []}
```

</div>
</details>

The epigram's number is in the key `fragment` and the letter (when it has one) in the key `sub_fragment`.
