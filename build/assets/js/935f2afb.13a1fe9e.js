"use strict";(self.webpackChunkapi_ap=self.webpackChunkapi_ap||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Greek Anthology project","href":"https://rochdly.github.io/doc-API-AP/docs/intro","docId":"intro"},{"type":"category","label":"Documentation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Access the API","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/access-the-api","docId":"documentation/access-the-api"},{"type":"link","label":"The endpoint \\"passages\\"","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/the-endpoint-passages","docId":"documentation/the-endpoint-passages"},{"type":"link","label":"Pagination","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/pagination","docId":"documentation/pagination"},{"type":"link","label":"Data about epigrams","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/data-about-epigrams","docId":"documentation/data-about-epigrams"},{"type":"link","label":"Images of the manuscript (Codex Palatinus 23)","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/images-of-the-manuscrit","docId":"documentation/images-of-the-manuscrit"},{"type":"link","label":"Texts","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/texts","docId":"documentation/texts"},{"type":"link","label":"Authors","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/authors","docId":"documentation/authors"},{"type":"link","label":"Keywords","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/keywords","docId":"documentation/keywords"},{"type":"link","label":"Cities (places)","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/cities","docId":"documentation/cities"},{"type":"link","label":"Scholia","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/scholia","docId":"documentation/scholia"},{"type":"link","label":"Comments","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/comments","docId":"documentation/comments"},{"type":"link","label":"External references","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/external-references","docId":"documentation/external-references"},{"type":"link","label":"Internal references","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/internal-references","docId":"documentation/internal-references"},{"type":"link","label":"Wikidata and other identifiers","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/wikidata","docId":"documentation/wikidata"},{"type":"link","label":"Manuscript Annotation API","href":"https://rochdly.github.io/doc-API-AP/docs/documentation/manuscrit-annotation","docId":"documentation/manuscrit-annotation"}],"href":"https://rochdly.github.io/doc-API-AP/docs/category/documentation"}]},"docs":{"documentation/access-the-api":{"id":"documentation/access-the-api","title":"Access the API","description":"We will start by importing different useful libraries and define our first variables for the requests.","sidebar":"tutorialSidebar"},"documentation/authors":{"id":"documentation/authors","title":"Authors","description":"An epigram is almost always associated to one or more authors (since the attributions are often uncertain):","sidebar":"tutorialSidebar"},"documentation/cities":{"id":"documentation/cities","title":"Cities (places)","description":"An epigram can be associated with some places (cities or countries or whatever can have geocoordinates). Epigram 6.13 has no cities associated. Let us look to another epigram:","sidebar":"tutorialSidebar"},"documentation/comments":{"id":"documentation/comments","title":"Comments","description":"An epigram can have comments, a sort of footnotes about the epigram as a whole of some part of it. These comments can be multilingual and they sometimes contain some markdown markup:","sidebar":"tutorialSidebar"},"documentation/data-about-epigrams":{"id":"documentation/data-about-epigrams","title":"Data about epigrams","description":"Let us now have a look at the data available for each epigram. Most of these data are present in the list of epigrams (alldata[\'results\']), but each epigram has its own endpoint, structured on the basis of its book and its number.","sidebar":"tutorialSidebar"},"documentation/external-references":{"id":"documentation/external-references","title":"External references","description":"An epigram can be linked to some external source. The idea of the project is to develop an edition which can take into account some \\"weak links\\" between the anthological material and some other cultural artefacts. This links are subjective and they do not want to be considered as \\"scientific\\". They can be link to a pop song, for example.","sidebar":"tutorialSidebar"},"documentation/images-of-the-manuscrit":{"id":"documentation/images-of-the-manuscrit","title":"Images of the manuscript (Codex Palatinus 23)","description":"For each epigram, the corresponding iiif images of the manuscript can be found under the key manuscript (a high quality digitization of the codex palatinus 23 is available on the website of the Palatinate Library of Heidelberg).","sidebar":"tutorialSidebar"},"documentation/internal-references":{"id":"documentation/internal-references","title":"Internal references","description":"Internal references are links between epigrams of the anthology. The relationship is symmetrical.","sidebar":"tutorialSidebar"},"documentation/keywords":{"id":"documentation/keywords","title":"Keywords","description":"Each epigram can be associated with keywords.","sidebar":"tutorialSidebar"},"documentation/manuscrit-annotation":{"id":"documentation/manuscrit-annotation","title":"Manuscript Annotation API","description":"We will shortly describe the API developped by the Palatine Library of Heidelberg regarding the annotation of the manuscript.","sidebar":"tutorialSidebar"},"documentation/pagination":{"id":"documentation/pagination","title":"Pagination","description":"As you might have noticed, all of the information are not displayed on the block above: the list is pagined and one can navigate the pages using the values of next and previous.","sidebar":"tutorialSidebar"},"documentation/scholia":{"id":"documentation/scholia","title":"Scholia","description":"On the Codex Palatinus 23, scholia are often associated to epigrams. Those scholia are also rendered on the platform and hence on the API.","sidebar":"tutorialSidebar"},"documentation/texts":{"id":"documentation/texts","title":"Texts","description":"Each epigram has a list of texts wich are associated to it. All the epigrams in our database should have at least the greek text. An epigram can have more than one greek editions of the text and a set of translations in different languages :","sidebar":"tutorialSidebar"},"documentation/the-endpoint-passages":{"id":"documentation/the-endpoint-passages","title":"The endpoint \\"passages\\"","description":"The first endpoint (passages) is the most important : it contains a list of all the epigrams. Let us have a look at it.","sidebar":"tutorialSidebar"},"documentation/wikidata":{"id":"documentation/wikidata","title":"Wikidata and other identifiers","description":"Almost all the objects in our data are aligned with a wikidata id. It is the case for authors, keywords and cities. The wikidata id can be found in the field alternative_urns.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Greek Anthology project","description":"For a digital and collaborative edition of the Greek Anthology","sidebar":"tutorialSidebar"}}}')}}]);