--- 
title: Data Skills for Reproducible Research
subtitle: "<br><a href='https://doi.org/10.5281/zenodo.6527194'><img src='https://zenodo.org/badge/DOI/10.5281/zenodo.6527194.svg' alt='DOI: 10.5281/zenodo.6527194'></a>"
authors: "Lisa DeBruine & Dale Barr"
date: "2022-09-06"
site: bookdown::bookdown_site
documentclass: book
classoption: oneside # for PDFs
geometry: margin=1in # for PDFs
bibliography: [book.bib, packages.bib]
csl: include/apa.csl
link-citations: yes
description: |
    This book provides an overview of skills needed for reproducible and open research using the statistical programming language R and tidyverse packages. It covers reproducible workflows, data visualisation, data tidying and wrangling, archiving, iteration and functions, probability and data simulations.
url: "https://psyteachr.github.io/reprores-v3"
github-repo: "psyteachr/reprores-v3"
cover-image: "images/logos/logo.png"
apple-touch-icon: "images/logos/apple-touch-icon.png"
apple-touch-icon-size: 180
favicon: "images/logos/favicon.ico"
---

# Overview {-}

<div class="small_right"><img src="images/logos/logo.png" alt="Hex sticker, blue, text: Repro Res" /></div>

This book provides an overview of skills needed for reproducible and open research using the statistical programming language R and tidyverse packages. It covers reproducible workflows, data visualisation, data tidying and wrangling, archiving, iteration and functions, probability and data simulations.

While this book mainly focusses on technical data skills, reproducible and open research is the reason for learning these skills. The following papers provide a great overview of these concepts if you are not already familiar with them.

* [Easing into open science: A guide for graduate students and their advisors](https://doi.org/10.1525/collabra.18684) [@kathawalla2021easing]
* [An open science workflow for more credible, rigorous research](https://psyarxiv.com/wu6sn) [@corker2021open]
* [Seven easy steps to open science](https://doi.org/10.1027/2151-2604/a000387) [@cruwell2019seven]
* [A community-sourced glossary of open scholarship terms](https://doi.org/10.1038/s41562-021-01269-4) [@parsons2022community]

<!--
This book is also available in [PDF](reprores-v3.pdf), [ePub](reprores-v3.epub) and [Kindle](reprores-v3.mobi) formats, but these may have odd formatting where the online book has interactive elements like quizzes and shiny apps.
-->

## Resources {-}

* [Videos](https://www.youtube.com/playlist?list=PLA2iRWVwbpTLa6PIJhCyJbB2XrOStHmvD){target="_blank"}
    Each chapter has several short video lectures for the main learning outcomes. The videos are captioned and watching with the captioning on is a useful way to learn the jargon of computational reproducibility. If you cannot access YouTube, the videos are available by request. The videos were created in 2020, so a few aspects of the RStudio interface or the book text have changed.

* [reprores](https://github.com/psyteachr/reprores-v3){target="_blank"}
    This is a custom R package for this course. You can install it with the code below. It will download all of the packages that are used in the book, along with an offline copy of this book, the shiny apps used in the book, and the exercises.
    
    
    ```r
    devtools::install_github("psyteachr/reprores-v3")
    ```

* [glossary](https://psyteachr.github.io/glossary){target="_blank"}
    Coding and statistics both have a lot of specialist terms. Throughout this book, jargon will be linked to the glossary. Each chapter will end with a table of glossary terms relevant to the chapter.
    
## How to learn data skills {-}

<div class="left meme"><img src="images/memes/gym_sleep.jpg" 
    alt="top text: Me: gonna get to the gym early today, set myself on a regimen, get gains. Also me:; Photo: Man sleeping on gym equipment" /></div>

Learning data skills is kind of like having a gym membership (HT to [Phil McAleer](https://twitter.com/McAleerP) for the analogy). You'll be given state-of-the-art equipment to use and instructions for how to use them, but your data skills won't get any stronger unless you practice. 

Data skills do not require you to memorise lots of code. You will be introduced to many different functions, but the main skill to learn is how to efficiently find the information you need. This will require getting used to the structure of help files and [cheat sheets](https://www.rstudio.com/resources/cheatsheets/){target="_blank"}, learning how to Goggle your problem and choose a helpful solution, and learning how to read error messages.

<div class="right meme"><img src="images/memes/changing-stuff.jpg" 
     alt="Fake O'Reilly-style book cover, line drawing of a kitten; title: Changing Stuff and Seeing What Happens; top text: How to actually learn any new programming concept" /></div>

Learning to code involves making a **lot** of mistakes. These mistakes are completely essential to the process, so try not to feel too frustrated. Many of the chapter exercises will give you broken code to fix so you get experience seeing what common errors look like. As you become a more experienced coder, you might not make fewer errors, but you'll recover from them much faster.


## I found a bug! {-}

This book is a work in progress, so you might find errors. Please help me fix them! The best way is to open an [issue on github](https://github.com/PsyTeachR/reprores-v3/issues){target="_blank"} that describes the error, but you can also [email Lisa](mailto:lisa.debruine@glasgow.ac.uk?subject=reprores).

<div class="meme" style="min-width: 100%; margin: 0.5em 0;"><a href="https://twitter.com/hadleywickham/status/589068687669243905"><img src="images/memes/wickham-shitty-code.png"
     alt="Hadley Wickham @hadleywickham: The only way to write good code is to write tons of shitty code first. Feeling shame about bad code stops you from getting to good code [3:11 PM · Apr 17, 2015·Echofon; 892 Retweets, 55 Quote Tweets, 1,147 Likes]"/></a></div>

## Other Resources {-}

- [RStudio Cheat Sheets](https://www.rstudio.com/resources/cheatsheets/) 
- [Improving Pedagogy through Registered Reports](https://psyarxiv.com/q34k8)
- [Learning Statistics with R](https://learningstatisticswithr-bookdown.netlify.com) by Navarro
- [R for Data Science](http://r4ds.had.co.nz) by Grolemund and Wickham
- [Improving your statistical inferences](https://www.coursera.org/learn/statistical-inferences/) on Coursera
- [swirl](http://swirlstats.com)
- [R for Reproducible Scientific Analysis](http://swcarpentry.github.io/r-novice-gapminder/)
- [codeschool.com](http://tryr.codeschool.com)
- [datacamp](https://www.datacamp.com/courses/free-introduction-to-r)
- [Style guide for R programming](http://style.tidyverse.org)
- [#rstats on twitter](https://twitter.com/search?q=%2523rstats) highly recommended!


