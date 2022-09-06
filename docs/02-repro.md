# Reproducible Workflows {#repro}

<div class="right meme"><img src="images/memes/repro_reports.jpg"
     alt="Top left: young spongebob; top right: Using Base R for your analysis and copy pasting your results into tables in Word; middle left: older angry spongebob in workout clothes; middle right: learning how to use dplyr visualize data with ggplot2 and report your analysis in rmarkdown documents; bottom left: muscular spongebob shirtless in a boxing ring; bottom right: wielding the entire might of the tidyverse (with 50 hex stickers)" /></div>

## Learning Objectives {#ilo-repro}

1. Organise a [project](#projects) [(video)](https://youtu.be/y-KiPueC9xw ){class="video"}
2. Create and compile an [Rmarkdown document](#rmarkdown) [(video)](https://youtu.be/EqJiAlJAl8Y ){class="video"}
3. Edit the [YAML header](#yaml) to add table of contents and other options
4. Include a [table](#repro-tables)
5. Include a [figure](#repro-figures)
6. Report the output of an analysis using [inline R](#inline-r)
7. Add a [bibliography](#bibliography) and [citations](#citations)


## Setup {#setup-repro}

You will be given instructions in Section\ \@ref(new-project) below to set up a new project where you will keep all of your class notes. Section\ \@ref(r-markdown) gives instructions to set up an R Markdown script for this chapter. 

For reference, here are the packages we will use in this chapter.


```r
# packages needed for this chapter
library(tidyverse)  # various data manipulation functions
library(knitr)      # for table and image display
library(kableExtra) # for styling tables
library(papaja)     # for APA-style tables
library(gt)         # for fancy tables
library(DT)         # for interactive tables
```

Download the [R Markdown Cheat Sheet](https://www.rstudio.org/links/r_markdown_cheat_sheet).

## Why learn reproducible reports?

Have you ever worked on a report, creating a summary table for the demographics, making beautiful plots, getting the analysis just right, and copying all the relevant numbers into your manuscript, only to find out that you forgot to exclude a test run and have to redo everything?

A<a class='glossary' target='_blank' title='The extent to which the findings of a study can be repeated in some other context' href='https://psyteachr.github.io/glossary/r#reproducibility'>reproducible</a> report fixes this problem. Although this requires a bit of extra effort at the start, it will more than pay you back by allowing you to update your entire report with the push of a button whenever anything changes.

Studies also show that many, if not most, papers in the scientific literature have reporting errors. For example, more than half of over 250,000 psychology papers published between 1985 and 2013 have at least one value that is statistically incompatible (e.g., a p-value that is not possible given a t-value and degrees of freedom) [@nuijten2016prevalence]. Reproducible reports help avoid transcription and rounding errors.

We will make reproducible reports following the principles of [literate programming](https://en.wikipedia.org/wiki/Literate_programming). The basic idea is to have the text of the report together in a single document along with the code needed to perform all analyses and generate the tables. The report is then "compiled" from the original format into some other, more portable format, such as HTML or PDF. This is different from traditional cutting and pasting approaches where, for instance, you create a graph in Microsoft Excel or a statistics program like SPSS and then paste it into Microsoft Word.

## Organising a project {#projects}

First, we need to get organised. <a class='glossary' target='_blank' title='A way to organise related files in RStudio' href='https://psyteachr.github.io/glossary/p#project'>Projects</a> in RStudio are a way to group all of the files you need for one project. Most projects include scripts, data files, and output files like the PDF report created by the script or images. 

### File System

Modern computers tend to hide the file system from users, but we need to understand a little bit about how files are stored on your computer in order to get a script to find your data. Your computer's file system is like a big box (or <a class='glossary' target='_blank' title='A collection or "folder" of files on a computer.' href='https://psyteachr.github.io/glossary/d#directory'>directory</a>) that contains both files and smaller boxes, or "subdirectories". You can specify the location of a file with its name and the names of all the directories it is inside.

For example, if Lisa is looking for a file called `report.Rmd`on their Desktop, they can specify the full file <a class='glossary' target='_blank' title='A string representing the location of a file or directory.' href='https://psyteachr.github.io/glossary/p#path'>path</a> like this: `/Users/lisad/Desktop/report.Rmd`, because the `Desktop` directory is inside the `lisad` directory, which is inside the `Users` directory, which is located at the base of the whole file system. If that file was on *your* desktop, you would probably have a different path unless your user directory is also called `lisad`. You can also use the `~` shortcut to represent the user directory of the person who is currently logged in, like this: `~/Desktop/report.Rmd`.

### Working Directory

Where should you put all of your files? You usually want to have all of your scripts and data files for a single project inside one folder on your computer, the <a class='glossary' target='_blank' title='The filepath where R is currently reading and writing files.' href='https://psyteachr.github.io/glossary/w#working-directory'>working directory</a> for that project. You can organise files in subdirectories inside this main project directory, such as putting all raw data files in a directory called <code class='path'>data</code> and saving any image files to a directory called <code class='path'>images</code>.

Your script should only reference files in three locations, using the appropriate format.

| Where                    | Example                                                          |
|--------------------------|------------------------------------------------------------------|
| on the web               | "<https://psyteachr.github.io/reprores-v3/data/5factor.xlsx>" |
| in the working directory | "5factor.xlsx"                                           |
| in a subdirectory        | "data/5factor.xlsx"                                      |

::: {.warning data-latex=""}
Never set or change your working directory in a script.
:::

R Markdown files will automatically use the same directory the .Rmd file is in as the working directory.

If your script needs a file in a subdirectory of your working directory, such as, <code class='path'>data/5factor.xlsx</code>, load it in using a <a class='glossary' target='_blank' title='The location of a file in relation to the working directory.' href='https://psyteachr.github.io/glossary/r#relative-path'>relative path</a> so that it is accessible if you move the working directory to another location or computer:


```r
dat <- read_csv("data/5factor.xlsx")  # correct
```

Do not load it in using an <a class='glossary' target='_blank' title='A file path that starts with / and is not appended to the working directory' href='https://psyteachr.github.io/glossary/a#absolute-path'>absolute path</a>:


```r
dat <- read_csv("C:/My Files/2020-2021/data/5factor.xlsx")   # wrong
```

::: {.info data-latex=""}
Also note the convention of using forward slashes, unlike the Windows-specific convention of using backward slashes. This is to make references to files work for everyone, regardless of their operating system.
:::

### Naming Things {#naming-things}

Name files so that both people and computers can easily find things. Here are some important principles:

-   file and directory names should only contain letters, numbers, dashes, and underscores, with a full stop (`.`) between the file name and <a class='glossary' target='_blank' title='The end part of a file name that tells you what type of file it is (e.g., .R or .Rmd).' href='https://psyteachr.github.io/glossary/e#extension'>extension</a> (that means no spaces!)
-   be consistent with capitalisation (set a rule to make it easy to remember, like always use lowercase)
-   use underscores (`_`) to separate parts of the file name, and dashes (`-`) to separate words in a section
-   name files with a pattern that alphabetises in a sensible order and makes it easy for you to find the file you're looking for
-   prefix a filename with an underscore to move it to the top of the list, or prefix all files with numbers to control their order

For example, these file names are a mess:

-   <code class='path'>report.doc</code>
-   <code class='path'>report final.doc</code>
-   <code class='path'>Data (Participants) 11-15.xls</code>
-   <code class='path'>Participants Data Nov 12.xls</code>
-   <code class='path'>final report2.doc</code>
-   <code class='path'>project notes.txt</code>
-   <code class='path'>Questionnaire Data November 15.xls</code>

Here is one way to structure them so that similar files have the same structure and it's easy for a human to scan the list or to use code to find relevant files. See if you can figure out what the last one should be.

-   <code class='path'>_project-notes.txt</code>
-   <code class='path'>report_v1.doc</code>
-   <code class='path'>report_v2.doc</code>
-   <code class='path'>report_v3.doc</code>
-   <code class='path'>data_participants_2021-11-12.xls</code>
-   <code class='path'>data_participants_2021-11-15.xls</code>
-   <select class='webex-select'><option value='blank'></option><option value=''>questionnaire-data_2021-11-15.xls</option><option value=''>data-questionnaire-2021_11_15.xls</option><option value='answer'>data_questionnaire_2021-11-15.xls</option><option value=''>data_2021-11-15_questionnaire.xls</option></select>

::: {.try data-latex=""}
Think of other ways to name the files above. Look at some of your own project files and see what you can improve.
:::

### Start a Project {#new-project}

Now that we understand how the file system work and how to name things to make it easier for scripts to access them, we're ready to make our class project. 

First, make a new <a class='glossary' target='_blank' title='A collection or "folder" of files on a computer.' href='https://psyteachr.github.io/glossary/d#directory'>directory</a> where you will keep all of your materials for this class (I called mine `reprores-2022`). You can set this directory to be the default working directory under the General tab of the Global Options. This means that files will be saved here by default if you aren't working in a project. 

::: {.warning data-latex=""}
It can sometimes cause problems if this directory is in OneDrive or if the full file path has special characters or is [more than 260 characters](http://handbook.datalad.org/en/latest/intro/filenaming.html){target='_blank'} on some Windows machines.
:::

Next, choose **`New Project...`** under the **`File`** menu to create a new project called <code class='path'>reprores-class-notes</code>. Make sure you save it inside the directory you just made. RStudio will restart itself and open with this new project directory as the working directory. 


```r
include_graphics(c("images/repro/new_proj_1.png",
                   "images/repro/new_proj_2.png",
                   "images/repro/new_proj_3.png"))
```

<div class="figure" style="text-align: center">
<img src="images/repro/new_proj_1.png" alt="Starting a new project." width="100%" />
<p class="caption">(\#fig:unnamed-chunk-1-1)Starting a new project.</p>
</div><div class="figure" style="text-align: center">
<img src="images/repro/new_proj_2.png" alt="Starting a new project." width="100%" />
<p class="caption">(\#fig:unnamed-chunk-1-2)Starting a new project.</p>
</div><div class="figure" style="text-align: center">
<img src="images/repro/new_proj_3.png" alt="Starting a new project." width="100%" />
<p class="caption">(\#fig:unnamed-chunk-1-3)Starting a new project.</p>
</div>


Click on the Files tab in the lower right pane to see the contents of the project directory. You will see a file called `reprores-class-notes.Rproj`, which is a file that contains all of the project information.You can double-click on it to open up the project. 

::: {.info data-latex=""}
Depending on your settings, you may also see a directory called `.Rproj.user`, which contains your specific user settings. You can ignore this and other "invisible" files that start with a full stop.
:::

## R Markdown

In this lesson, we will learn to make an R Markdown document with a table of contents, appropriate headers, code chunks, tables, images, inline R, and a bibliography. 

::: {.info data-latex=""}
There is a new type of reproducible report format called [quarto](https://quarto.org/){target="_blank"} that is very similar to R Markdown. We won't be using quarto in this class because it has a few small differences that get confusing if you're learning both quarto and R Markdown at the same time, but you should be able to pick up quarto very easily once you've learned R Markdown.
:::

We will use <a class='glossary' target='_blank' title='The R-specific version of markdown: a way to specify formatting, such as headers, paragraphs, lists, bolding, and links, as well as code blocks and inline code.' href='https://psyteachr.github.io/glossary/r#r-markdown'>R Markdown</a> to create reproducible reports, which enables mixing of text and code. A reproducible script will contain sections of code in code blocks. A code block starts and ends with three backtick symbols in a row, with some information about the code between curly brackets, such as `{r chunk-name, echo=FALSE}` (this runs the code, but does not show the text of the code block in the compiled document). The text outside of code blocks is written in <a class='glossary' target='_blank' title='A way to specify formatting, such as headers, paragraphs, lists, bolding, and links.' href='https://psyteachr.github.io/glossary/m#markdown'>markdown</a>, which is a way to specify formatting, such as headers, paragraphs, lists, bolding, and links.

<div class="figure" style="text-align: center">
<img src="images/repro/reproducible_script.png" alt="A screenshot of a script with line numbers, code blocks, and markdown text" width="100%" />
<p class="caption">(\#fig:img-reproducible-script)A reproducible script.</p>
</div>


If you open up a new R Markdown file from a template, you will see an example document with several code blocks in it. To create an HTML or PDF report from an R Markdown (Rmd) document, you compile it.  Compiling a document is called <a class='glossary' target='_blank' title='To create an HTML, PDF, or Word document from an R Markdown (Rmd) document' href='https://psyteachr.github.io/glossary/k#knit'>knitting</a> in RStudio. There is a button that looks like a ball of yarn with needles through it that you click on to compile your file into a report. 

::: {.try data-latex=""}
Create a new R Markdown file from the **`File > New File > R Markdown...`** menu. Change the title and author, save the file as `02-repro.Rmd`, then click the knit button to create an html file.
:::

### YAML Header {#yaml}

The <a class='glossary' target='_blank' title='A structured format for information' href='https://psyteachr.github.io/glossary/y#yaml'>YAML</a> header is where you can set several options. 

```
---
title: "My Demo Document"
author: "Me"
output:
  html_document:
    toc: true
    toc_float:
      collapsed: false
      smooth_scroll: false
    number_sections: false
bibliography: refs.bib
csl: apa.csl
---
```

::: {.info data-latex=""}
Try changing the values from `false` to `true` to see what the options do.
:::

The `df_print: kable` option prints data frames using `knitr::kable`. You'll learn below how to further customise tables.

The built-in bootswatch themes are: default, cerulean, cosmo, darkly, flatly, journal, lumen, paper, readable, sandstone, simplex, spacelab, united, and yeti. You can [view and download more themes](https://bootswatch.com/4/).

<div class="figure" style="text-align: center">
<img src="images/repro/bootswatch.png" alt="Light themes in versions 3 and 4." width="100%" />
<p class="caption">(\#fig:img-bootswatch)Light themes in versions 3 and 4.</p>
</div>


### Setup

When you create a new R Markdown file in RStudio using the default template, a setup chunk is automatically created.

<div class='verbatim'><pre class='sourceCode r'><code class='sourceCode R'>&#96;&#96;&#96;{r setup, include=FALSE}</code></pre>

```r
knitr::opts_chunk$set(echo = TRUE)
```

<pre class='sourceCode r'><code class='sourceCode R'>&#96;&#96;&#96;</code></pre></div>

You can set more default options for code chunks here. See the [knitr options documentation](https://yihui.name/knitr/options/){target="_blank"} for explanations of the possible options.

<div class='verbatim'><pre class='sourceCode r'><code class='sourceCode R'>&#96;&#96;&#96;{r setup, include=FALSE}</code></pre>

```r
knitr::opts_chunk$set(
  fig.width  = 8, 
  fig.height = 5, 
  fig.path   = 'images/',
  echo       = FALSE, 
  warning    = TRUE, 
  message    = FALSE,
  cache      = FALSE
)
```

<pre class='sourceCode r'><code class='sourceCode R'>&#96;&#96;&#96;</code></pre></div>

The code above sets the following options:

* `fig.width  = 8` : default figure width is 8 inches (you can change this for individual figures)
* `fig.height = 5` : default figure height is 5 inches
* `fig.path   = 'images/'` : figures are saved in the directory "images"
* `echo       = FALSE` : do not show code chunks in the rendered document
* `warning    = FALSE` : do not show any function warnings
* `message    = FALSE` : do not show any function messages
* `cache      = FALSE` : run all the code to create all of the images and objects each time you knit (set to `TRUE` if you have time-consuming code)


Find a list of the current chunk options by typing <code><span><span class='fu'><a target='_blank' href='https://rdrr.io/r/utils/str.html'>str</a></span><span class='op'>(</span><span class='fu'>knitr</span><span class='fu'>::</span><span class='va'><a target='_blank' href='https://rdrr.io/pkg/knitr/man/opts_chunk.html'>opts_chunk</a></span><span class='op'>$</span><span class='fu'>get</span><span class='op'>(</span><span class='op'>)</span><span class='op'>)</span></span></code> in the console.


You can also add the packages you need in this chunk using <code><span><span class='kw'><a target='_blank' href='https://rdrr.io/r/base/library.html'>library</a></span><span class='op'>(</span><span class='op'>)</span></span></code>. Often when you are working on a script, you will realize that you need to load another add-on package. Don't bury the call to `library(package_I_need)` way down in the script. Put it in the top, so the user has an overview of what packages are needed.

::: {.try data-latex=""}
We'll be using function from the package <code class='package'>tidyverse</code>, so load that in your setup chunk.
:::

### Structure {#structure}

If you include a table of contents (`toc`), it is created from your document headers. Headers in <a class='glossary' target='_blank' title='A way to specify formatting, such as headers, paragraphs, lists, bolding, and links.' href='https://psyteachr.github.io/glossary/m#markdown'>markdown</a> are created by prefacing the header title with one or more hashes (`#`). 

Use the following structure when developing your own analysis scripts: 

* load in any add-on packages you need to use
* define any custom functions
* load or simulate the data you will be working with
* work with the data
* save anything you need to save

::: {.try data-latex=""}
Delete the default text and add some structure to your document by creating headers and subheaders. We're going to load some data, create a summary table, plot the data, and analyse it.
:::

### Code Chunks

You can include <a class='glossary' target='_blank' title='A section of code in an R Markdown file' href='https://psyteachr.github.io/glossary/c#chunk'>code chunks</a> that create and display images, tables, or computations to include in your text. Let's start by loading some data.

First, create a code chunk in your document. This code loads some data from the web. 


```r
pets <- read_csv("https://psyteachr.github.io/reprores/data/pets.csv",
                 show_col_types = FALSE)
```


You can add comments inside R chunks with the hash symbol (`#`). The R interpreter will ignore characters from the hash to the end of the line.


```r
# simulating new data

n <- nrow(pets) # the total number of pet
mu <- mean(pets$score) # the mean score for all pets
sd <- sd(pets$score) # the SD for score for all pets

simulated_scores <- rnorm(n, mu, sd)
```

It's usually good practice to start a code chunk with a comment that explains what you're doing there, especially if the code is not explained in the text of the report.

If you name your objects clearly, you often don't need to add clarifying comments. For example, if I'd named the three objects above `total_pet_n`, `mean_score` and `sd_score`, I would omit the comments.

It's a bit of an art to comment your code well. The best way to develop this skill is to read a lot of other people's code and have others review your code. 

### In-line R {#inline-r}

Now let's analyse the pets data to see if cats are heavier than ferrets. First we'll run the analysis code. Then we'll save any numbers we might want to use in our manuscript to variables and round them appropriately. Finally, we'll use <code><span><span class='fu'>glue</span><span class='fu'>::</span><span class='fu'><a target='_blank' href='https://glue.tidyverse.org/reference/glue.html'>glue</a></span><span class='op'>(</span><span class='op'>)</span></span></code> to format a results string.


```r
# analysis
cat_weight <- filter(pets, pet == "cat") %>% pull(weight)
ferret_weight <- filter(pets, pet == "ferret") %>% pull(weight)
weight_test <- t.test(cat_weight, ferret_weight)

# round individual values you want to report
t <- weight_test$statistic %>% round(2)
df <- weight_test$parameter %>% round(1)
p <- weight_test$p.value %>% round(3)
# handle p-values < .001
p_symbol <- ifelse(p < .001, "<", "=")
if (p < .001) p <- .001

# format the results string
weight_result <- glue::glue("t = {t}, df = {df}, p {p_symbol} {p}")
```

You can insert the results into a paragraph with inline R code that looks like this: 

<pre><code>Cats were significantly heavier than ferrets (&#96;r weight_result&#96;).</code></pre>

**Rendered text:**  
Cats were significantly heavier than ferrets (t = 18.42, df = 180.4, p < 0.001). 



### Tables {#repro-tables}

Next, create a code chunk where you want to display a table of the descriptives (e.g., Participants section of the Methods). We'll use tidyverse functions you will learn in the [data wrangling lectures](#tidyr) to create summary statistics for each group.


```r
summary_table <- pets %>%
  group_by(pet) %>%
  summarise(
    n = n(),
    mean_weight = mean(weight),
    mean_score = mean(score)
  )

# print
summary_table
```

<div class="kable-table">

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> pet </th>
   <th style="text-align:right;"> n </th>
   <th style="text-align:right;"> mean_weight </th>
   <th style="text-align:right;"> mean_score </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> cat </td>
   <td style="text-align:right;"> 300 </td>
   <td style="text-align:right;"> 9.371613 </td>
   <td style="text-align:right;"> 90.23667 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> dog </td>
   <td style="text-align:right;"> 400 </td>
   <td style="text-align:right;"> 19.067974 </td>
   <td style="text-align:right;"> 99.98250 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> ferret </td>
   <td style="text-align:right;"> 100 </td>
   <td style="text-align:right;"> 4.781569 </td>
   <td style="text-align:right;"> 111.78000 </td>
  </tr>
</tbody>
</table>

</div>

::: {.warning data-latex=""}
The table above will print in tibble format in the interactive view, but will use the format from the `df_print` setting in the YAML header when you knit. 
:::


The table above is OK, but it could be more reader-friendly by changing the column labels, rounding the means, and adding a caption. You can use <code><span><span class='fu'>knitr</span><span class='fu'>::</span><span class='fu'><a target='_blank' href='https://rdrr.io/pkg/knitr/man/kable.html'>kable</a></span><span class='op'>(</span><span class='op'>)</span></span></code> for this, or more specialised functions from other packages to format your tables.

<!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'knitr')">knitr</button>
  <button class="tablinks" onclick="openCity(event, 'kableExtra')">kableExtra</button>
  <button class="tablinks" onclick="openCity(event, 'papaja')">papaja</button>
  <button class="tablinks" onclick="openCity(event, 'gt')">gt</button>
  <button class="tablinks" onclick="openCity(event, 'DT')">DT</button>
</div>

<!-- Tab content -->
<div id="knitr" class="tabcontent">


```r
newnames <- c("Pet Type", "N", "Mean Weight", "Mean Score")

knitr::kable(summary_table, 
             digits = 2, 
             col.names = newnames,
             caption = "Summary statistics for the pets dataset.")
```

<table>
<caption>(\#tab:kable-demo)Summary statistics for the pets dataset.</caption>
 <thead>
  <tr>
   <th style="text-align:left;"> Pet Type </th>
   <th style="text-align:right;"> N </th>
   <th style="text-align:right;"> Mean Weight </th>
   <th style="text-align:right;"> Mean Score </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> cat </td>
   <td style="text-align:right;"> 300 </td>
   <td style="text-align:right;"> 9.37 </td>
   <td style="text-align:right;"> 90.24 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> dog </td>
   <td style="text-align:right;"> 400 </td>
   <td style="text-align:right;"> 19.07 </td>
   <td style="text-align:right;"> 99.98 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> ferret </td>
   <td style="text-align:right;"> 100 </td>
   <td style="text-align:right;"> 4.78 </td>
   <td style="text-align:right;"> 111.78 </td>
  </tr>
</tbody>
</table>

</div>

<!-- Tab content -->
<div id="kableExtra" class="tabcontent">

The [kableExtra](https://haozhu233.github.io/kableExtra/awesome_table_in_html.html) package gives you a lot of flexibility with table display.


```r
library(kableExtra)

kable(summary_table, 
      digits = 2, 
      col.names = c("Pet Type", "N", "Weight", "Score"),
      caption = "Summary statistics for the pets dataset.") |>
  kable_classic() |>
  kable_styling(full_width = FALSE, font_size = 20) |>
  add_header_above(c(" " = 2, "Means" = 2)) |>
  kableExtra::row_spec(2, bold = TRUE, background = "lightyellow")
```

<table class=" lightable-classic table" style='font-family: "Arial Narrow", "Source Sans Pro", sans-serif; margin-left: auto; margin-right: auto; font-size: 20px; width: auto !important; margin-left: auto; margin-right: auto;'>
<caption style="font-size: initial !important;">(\#tab:kableExtra-demo)Summary statistics for the pets dataset.</caption>
 <thead>
<tr>
<th style="empty-cells: hide;" colspan="2"></th>
<th style="padding-bottom:0; padding-left:3px;padding-right:3px;text-align: center; " colspan="2"><div style="border-bottom: 1px solid #111111; margin-bottom: -1px; ">Means</div></th>
</tr>
  <tr>
   <th style="text-align:left;"> Pet Type </th>
   <th style="text-align:right;"> N </th>
   <th style="text-align:right;"> Weight </th>
   <th style="text-align:right;"> Score </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> cat </td>
   <td style="text-align:right;"> 300 </td>
   <td style="text-align:right;"> 9.37 </td>
   <td style="text-align:right;"> 90.24 </td>
  </tr>
  <tr>
   <td style="text-align:left;font-weight: bold;background-color: lightyellow !important;"> dog </td>
   <td style="text-align:right;font-weight: bold;background-color: lightyellow !important;"> 400 </td>
   <td style="text-align:right;font-weight: bold;background-color: lightyellow !important;"> 19.07 </td>
   <td style="text-align:right;font-weight: bold;background-color: lightyellow !important;"> 99.98 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> ferret </td>
   <td style="text-align:right;"> 100 </td>
   <td style="text-align:right;"> 4.78 </td>
   <td style="text-align:right;"> 111.78 </td>
  </tr>
</tbody>
</table>

</div>

<!-- Tab content -->
<div id="papaja" class="tabcontent">

[papaja](https://crsh.github.io/papaja_man/reporting.html#tables) helps you create APA-formatted manuscripts, including tables.


```r
papaja::apa_table(summary_table, 
                  col.names = c("Pet Type", "N", "Weight", "Score"),
                  caption = "Summary statistics for the pets dataset.",
                  col_spanners = list("Means" = c(3, 4)))
```

<caption>(\#tab:papaja-demo)</caption>

<div custom-style='Table Caption'>*Summary statistics for the pets dataset.*</div>


Pet Type   N     Weight   Score  
---------  ----  -------  -------
cat        300   9.37     90.24  
dog        400   19.07    99.98  
ferret     100   4.78     111.78 

</div>

<!-- Tab content -->
<div id="gt" class="tabcontent">

The [gt](https://gt.rstudio.com/index.html) package allows for even more customisation.


```r
library(gt)

gt(summary_table, caption = "Summary statistics for the pets dataset.") |>
  fmt_number(columns = c(mean_weight, mean_score),
            decimals = 2) |>
  cols_label(pet = "Pet Type", 
             n = "N", 
             mean_weight = "Weight", 
             mean_score = "Score") |>
  tab_spanner(label = "Means",
              columns = c(mean_weight, mean_score)) |>
 opt_stylize(style = 6, color = "blue")
```

```{=html}
<div id="pxyzclwvzy" style="overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', 'Fira Sans', 'Droid Sans', Arial, sans-serif;
}

#pxyzclwvzy .gt_table {
  display: table;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  color: #333333;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  background-color: #FFFFFF;
  width: auto;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #5F5F5F;
  border-right-style: none;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #5F5F5F;
  border-left-style: none;
  border-left-width: 2px;
  border-left-color: #D3D3D3;
}

#pxyzclwvzy .gt_heading {
  background-color: #FFFFFF;
  text-align: center;
  border-bottom-color: #FFFFFF;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
}

#pxyzclwvzy .gt_title {
  color: #333333;
  font-size: 125%;
  font-weight: initial;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-color: #FFFFFF;
  border-bottom-width: 0;
}

#pxyzclwvzy .gt_subtitle {
  color: #333333;
  font-size: 85%;
  font-weight: initial;
  padding-top: 0;
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-color: #FFFFFF;
  border-top-width: 0;
}

#pxyzclwvzy .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #5F5F5F;
}

#pxyzclwvzy .gt_col_headings {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #5F5F5F;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #5F5F5F;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
}

#pxyzclwvzy .gt_col_heading {
  color: #FFFFFF;
  background-color: #0076BA;
  font-size: 100%;
  font-weight: normal;
  text-transform: inherit;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
  vertical-align: bottom;
  padding-top: 5px;
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  overflow-x: hidden;
}

#pxyzclwvzy .gt_column_spanner_outer {
  color: #FFFFFF;
  background-color: #0076BA;
  font-size: 100%;
  font-weight: normal;
  text-transform: inherit;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 4px;
  padding-right: 4px;
}

#pxyzclwvzy .gt_column_spanner_outer:first-child {
  padding-left: 0;
}

#pxyzclwvzy .gt_column_spanner_outer:last-child {
  padding-right: 0;
}

#pxyzclwvzy .gt_column_spanner {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #5F5F5F;
  vertical-align: bottom;
  padding-top: 5px;
  padding-bottom: 5px;
  overflow-x: hidden;
  display: inline-block;
  width: 100%;
}

#pxyzclwvzy .gt_group_heading {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: initial;
  text-transform: inherit;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #5F5F5F;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #5F5F5F;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
  vertical-align: middle;
}

#pxyzclwvzy .gt_empty_group_heading {
  padding: 0.5px;
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: initial;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #5F5F5F;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #5F5F5F;
  vertical-align: middle;
}

#pxyzclwvzy .gt_from_md > :first-child {
  margin-top: 0;
}

#pxyzclwvzy .gt_from_md > :last-child {
  margin-bottom: 0;
}

#pxyzclwvzy .gt_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  margin: 10px;
  border-top-style: none;
  border-top-width: 1px;
  border-top-color: #D5D5D5;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D5D5D5;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D5D5D5;
  vertical-align: middle;
  overflow-x: hidden;
}

#pxyzclwvzy .gt_stub {
  color: #333333;
  background-color: #89D3FE;
  font-size: 100%;
  font-weight: initial;
  text-transform: inherit;
  border-right-style: solid;
  border-right-width: 2px;
  border-right-color: #D5D5D5;
  padding-left: 5px;
  padding-right: 5px;
}

#pxyzclwvzy .gt_stub_row_group {
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: initial;
  text-transform: inherit;
  border-right-style: solid;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
  padding-left: 5px;
  padding-right: 5px;
  vertical-align: top;
}

#pxyzclwvzy .gt_row_group_first td {
  border-top-width: 2px;
}

#pxyzclwvzy .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#pxyzclwvzy .gt_first_summary_row {
  border-top-style: solid;
  border-top-color: #5F5F5F;
}

#pxyzclwvzy .gt_first_summary_row.thick {
  border-top-width: 2px;
}

#pxyzclwvzy .gt_last_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #5F5F5F;
}

#pxyzclwvzy .gt_grand_summary_row {
  color: #333333;
  background-color: #D5D5D5;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#pxyzclwvzy .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #5F5F5F;
}

#pxyzclwvzy .gt_striped {
  background-color: #EDF7FC;
}

#pxyzclwvzy .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #5F5F5F;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #5F5F5F;
}

#pxyzclwvzy .gt_footnotes {
  color: #333333;
  background-color: #FFFFFF;
  border-bottom-style: none;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 2px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
}

#pxyzclwvzy .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding-left: 4px;
  padding-right: 4px;
  padding-left: 5px;
  padding-right: 5px;
}

#pxyzclwvzy .gt_sourcenotes {
  color: #333333;
  background-color: #FFFFFF;
  border-bottom-style: none;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 2px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
}

#pxyzclwvzy .gt_sourcenote {
  font-size: 90%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
}

#pxyzclwvzy .gt_left {
  text-align: left;
}

#pxyzclwvzy .gt_center {
  text-align: center;
}

#pxyzclwvzy .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

#pxyzclwvzy .gt_font_normal {
  font-weight: normal;
}

#pxyzclwvzy .gt_font_bold {
  font-weight: bold;
}

#pxyzclwvzy .gt_font_italic {
  font-style: italic;
}

#pxyzclwvzy .gt_super {
  font-size: 65%;
}

#pxyzclwvzy .gt_footnote_marks {
  font-style: italic;
  font-weight: normal;
  font-size: 75%;
  vertical-align: 0.4em;
}

#pxyzclwvzy .gt_asterisk {
  font-size: 100%;
  vertical-align: 0;
}

#pxyzclwvzy .gt_indent_1 {
  text-indent: 5px;
}

#pxyzclwvzy .gt_indent_2 {
  text-indent: 10px;
}

#pxyzclwvzy .gt_indent_3 {
  text-indent: 15px;
}

#pxyzclwvzy .gt_indent_4 {
  text-indent: 20px;
}

#pxyzclwvzy .gt_indent_5 {
  text-indent: 25px;
}
</style>
<table class="gt_table">
  <caption>(#tab:gt-demo)Summary statistics for the pets dataset.</caption>
  
  <thead class="gt_col_headings">
    <tr>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="2" colspan="1" scope="col">Pet Type</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="2" colspan="1" scope="col">N</th>
      <th class="gt_center gt_columns_top_border gt_column_spanner_outer" rowspan="1" colspan="2" scope="colgroup">
        <span class="gt_column_spanner">Means</span>
      </th>
    </tr>
    <tr>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" scope="col">Weight</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1" scope="col">Score</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr><td class="gt_row gt_left">cat</td>
<td class="gt_row gt_right">300</td>
<td class="gt_row gt_right">9.37</td>
<td class="gt_row gt_right">90.24</td></tr>
    <tr><td class="gt_row gt_left gt_striped">dog</td>
<td class="gt_row gt_right gt_striped">400</td>
<td class="gt_row gt_right gt_striped">19.07</td>
<td class="gt_row gt_right gt_striped">99.98</td></tr>
    <tr><td class="gt_row gt_left">ferret</td>
<td class="gt_row gt_right">100</td>
<td class="gt_row gt_right">4.78</td>
<td class="gt_row gt_right">111.78</td></tr>
  </tbody>
  
  
</table>
</div>
```

</div>


<!-- Tab content -->
<div id="DT" class="tabcontent">

[DT](https://rstudio.github.io/DT/) lets you make interactive data tables. Chapter\ \@ref(interactive-tables) goes into more details about this type of table.


```r
DT::datatable(summary_table, 
              caption = "Summary statistics for the pets dataset.",
              colnames = c("Pet Type", "N", "Weight", "Score")) |>
  DT::formatRound(c("mean_weight", "mean_score"),
                  digits = 2)
```

```{=html}
<div id="htmlwidget-6a2c3f6622f6585a45c5" style="width:100%;height:auto;" class="datatables html-widget"></div>
<script type="application/json" data-for="htmlwidget-6a2c3f6622f6585a45c5">{"x":{"filter":"none","vertical":false,"caption":"<caption>Summary statistics for the pets dataset.<\/caption>","data":[["1","2","3"],["cat","dog","ferret"],[300,400,100],[9.3716129083,19.0679737427696,4.78156944173321],[90.2366666666667,99.9825,111.78]],"container":"<table class=\"display\">\n  <thead>\n    <tr>\n      <th> <\/th>\n      <th>Pet Type<\/th>\n      <th>N<\/th>\n      <th>Weight<\/th>\n      <th>Score<\/th>\n    <\/tr>\n  <\/thead>\n<\/table>","options":{"columnDefs":[{"targets":3,"render":"function(data, type, row, meta) {\n    return type !== 'display' ? data : DTWidget.formatRound(data, 2, 3, \",\", \".\", null);\n  }"},{"targets":4,"render":"function(data, type, row, meta) {\n    return type !== 'display' ? data : DTWidget.formatRound(data, 2, 3, \",\", \".\", null);\n  }"},{"className":"dt-right","targets":[2,3,4]},{"orderable":false,"targets":0}],"order":[],"autoWidth":false,"orderClasses":false}},"evals":["options.columnDefs.0.render","options.columnDefs.1.render"],"jsHooks":[]}</script>
```

</div>

### Images {#repro-figures}

Next, create a code chunk where you want to display an image in your document. Let's put it in the Results section. We'll use some code that you'll learn more about  in the [data visualisation lecture](#ggplot) to show violin-boxplots for the groups.

Notice how the figure caption is formatted in the chunk options.

````

```r
ggplot(pets, aes(pet, score, fill = country)) +
  geom_violin(alpha = 0.5) +
  geom_boxplot(width = 0.25, 
               position = position_dodge(width = 0.9),
               show.legend = FALSE) +
  scale_fill_manual(values = c("orange", "dodgerblue")) +
  xlab("") +
  ylab("Score") +
  theme(text = element_text(size = 20, family = "Times"))
```

<div class="figure" style="text-align: center">
<img src="02-repro_files/figure-html/unnamed-chunk-6-1.png" alt="Figure 1. Scores by pet type and country." width="100%" />
<p class="caption">(\#fig:unnamed-chunk-6)Figure 1. Scores by pet type and country.</p>
</div>
````

<div class="figure" style="text-align: center">
<img src="02-repro_files/figure-html/unnamed-chunk-7-1.png" alt="Figure 1. Scores by pet type and country." width="100%" />
<p class="caption">(\#fig:unnamed-chunk-7)Figure 1. Scores by pet type and country.</p>
</div>

::: {.info data-latex=""}
The last line changes the default text size and font, which can be useful for generating figures that meet a journal's requirements.
:::



You can also include images that you did not create in R using the typical markdown syntax for images: 

```
![All the Things by [Hyperbole and a Half](http://hyperboleandahalf.blogspot.com/)](images/memes/x-all-the-things.png){style="width: 50%"}
```

![All the Things by [Hyperbole and a Half](http://hyperboleandahalf.blogspot.com/)](images/memes/x-all-the-things.png){style="width: 50%"}


### Linked documents

If you need to create longer reports with links between sections, you can edit the YAML to use an output format from the <code class='package'>bookdown</code> package. `bookdown::html_document2` is a useful one that adds figure and table numbers automatically to any figures or tables with a caption and allows you to link to these by reference.

To create links to tables and figures, you need to name the code chunk that created your figures or tables, and then call those names in your inline coding:

<div class='verbatim'><pre class='sourceCode r'><code class='sourceCode R'>&#96;&#96;&#96;{r my-table}</code></pre>

```r
# table code here
```

<pre class='sourceCode r'><code class='sourceCode R'>&#96;&#96;&#96;</code></pre></div>

<div class='verbatim'><pre class='sourceCode r'><code class='sourceCode R'>&#96;&#96;&#96;{r my-figure}</code></pre>

```r
# figure code here
```

<pre class='sourceCode r'><code class='sourceCode R'>&#96;&#96;&#96;</code></pre></div>

```
See Table\ \@ref(tab:my-table) or Figure\ \@ref(fig:my-figure).
```

::: {.warning data-latex=""}
The code chunk names can only contain letters, numbers and dashes. If they contain other characters like spaces or underscores, the referencing will not work.
:::

You can also link to different sections of your report by naming your headings with `{#}`:

```
# My first heading {#heading-1}

## My second heading {#heading-2}

See Section\ \@ref(heading-1) and Section\ \@ref(heading-2)

```
The code below shows how to link text to figures or tables in a full report using the built-in `diamonds` dataset - use your `reports.Rmd` to create this document now. You can see the [HTML output here](demos/html_document2.html).


<div class='webex-solution'><button>Linked document code</button>



````md
---
title: "Linked Document Demo"
output: 
  bookdown::html_document2:
    number_sections: true
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = FALSE,
                      message = FALSE,
                      warning = FALSE)
library(tidyverse)
library(kableExtra)
theme_set(theme_minimal())
```

Diamond price depends on many features, such as:

- cut (See Table\ \@ref(tab:by-cut))
- colour (See Table\ \@ref(tab:by-colour))
- clarity (See Figure\ \@ref(fig:by-clarity))
- carats (See Figure\ \@ref(fig:by-carat))
- See section\ \@ref(conclusion) for concluding remarks

## Tables

### Cut

```{r by-cut}
diamonds %>%
  group_by(cut) %>%
  summarise(avg = mean(price),
            .groups = "drop") %>%
  kable(digits = 0, 
        col.names = c("Cut", "Average Price"),
        caption = "Mean diamond price by cut.") %>%
  kable_material()
```

### Colour

```{r by-colour}
diamonds %>%
  group_by(color) %>%
  summarise(avg = mean(price),
            .groups = "drop") %>%
  kable(digits = 0, 
        col.names = c("Cut", "Average Price"),
        caption = "Mean diamond price by colour.") %>%
  kable_material()
```

## Plots

### Clarity

```{r by-clarity, fig.cap = "Diamond price by clarity"}
ggplot(diamonds, aes(x = clarity, y = price)) +
  geom_boxplot() 
```

### Carats

```{r by-carat, fig.cap = "Diamond price by carat"}
ggplot(diamonds, aes(x = carat, y = price)) +
  stat_smooth()
```

### Concluding remarks {#conclusion}

I am not rich enough to worry about any of this.
````


</div>


This format defaults to numbered sections, so set `number_sections: false` in the <a class='glossary' target='_blank' title='A structured format for information' href='https://psyteachr.github.io/glossary/y#yaml'>YAML</a> header if you don't want this. If you remove numbered sections, links like `\@ref(conclusion)` will show "??", so you need to use URL link syntax instead, like this:

```
See the [last section](#conclusion) for concluding remarks.
```


### Bibliography

There are several ways to do in-text references and automatically generate a [bibliography](https://bookdown.org/yihui/rmarkdown-cookbook/bibliography.html){target="_blank"} in R Markdown. Markdown files need to link to a BibTex file (a plain text file with references in a specific format) that contains the references you need to cite. You specify the name of this file in the YAML header, like `bibliography: refs.bib` and cite references in text using an at symbol and a shortname, like `[@tidyverse]`. You can also include a "csl" style file to format your references in, for example, APA style.

```
---
title: "My Paper"
author: "Me"
output: 
  html_document:
    toc: true
bibliography: refs.bib
csl: apa.csl
```

#### Converting from reference software

Most reference software like EndNote, Zotero or Mendeley have exporting options that can export to BibTeX format. You just need to check the shortnames in the resulting file.

#### Creating a BibTeX File

Most reference software like EndNote, Zotero or Mendeley have exporting options that can export to BibTeX format. You just need to check the shortnames in the resulting file.

You can also make a BibTeX file and add references manually. In RStudio, go to **`File`** > **`New File...`** > **`Text File`** and save the file as "bibliography.bib".

Next, add the line `bibliography: bibliography.bib` to your YAML header.

#### Adding references {#citations}

You can add references to a journal article in the following format:

```
@article{shortname,
  author = {Author One and Author Two and Author Three},
  title = {Paper Title},
  journal = {Journal Title},
  volume = {vol},
  number = {issue},
  pages = {startpage--endpage},
  year = {year},
  doi = {doi}
}
```

See [A complete guide to the BibTeX format](https://www.bibtex.com/g/bibtex-format/){target="_blank"} for instructions on citing books, technical reports, and more.

You can get the reference for an R package using the functions `citation()` and `toBibtex()`. You can paste the bibtex entry into your bibliography.bib file. Make sure to add a short name (e.g., "ggplot2") before the first comma to refer to the reference.


```r
citation(package="ggplot2") %>% toBibtex()
```

```
## @Book{,
##   author = {Hadley Wickham},
##   title = {ggplot2: Elegant Graphics for Data Analysis},
##   publisher = {Springer-Verlag New York},
##   year = {2016},
##   isbn = {978-3-319-24277-4},
##   url = {https://ggplot2.tidyverse.org},
## }
```


[Google Scholar](https://scholar.google.com/) entries have a BibTeX citation option. This is usually the easiest way to get the relevant values, although you have to add the DOI yourself. You can keep the suggested shortname or change it to something that makes more sense to you.

<img src="images/present/google-scholar.png" width="100%" style="display: block; margin: auto;" />


Some journal websites also let you download citations in bibtex format. For example, go to the publisher's page for [Equivalence Testing for Psychological Research: A Tutorial](https://journals.sagepub.com/doi/abs/10.1177/2515245918770963){target="_blank"}, click on the Cite button (in the sidebar or under the bottom Explore More menu), choose BibTeX format, and download the citation. You can open up the file in a text editor and copy the text. It should look like this:

```
@article{doi:10.1177/2515245918770963,
author = {Daniël Lakens and Anne M. Scheel and Peder M. Isager},
title ={Equivalence Testing for Psychological Research: A Tutorial},
journal = {Advances in Methods and Practices in Psychological Science},
volume = {1},
number = {2},
pages = {259-269},
year = {2018},
doi = {10.1177/2515245918770963},

URL = { 
        https://doi.org/10.1177/2515245918770963
    
},
eprint = { 
        https://doi.org/10.1177/2515245918770963
    
}
,
    abstract = { Psychologists must be able to test both for the presence of an effect and for the absence of an effect. In addition to testing against zero, researchers can use the two one-sided tests (TOST) procedure to test for equivalence and reject the presence of a smallest effect size of interest (SESOI). The TOST procedure can be used to determine if an observed effect is surprisingly small, given that a true effect at least as extreme as the SESOI exists. We explain a range of approaches to determine the SESOI in psychological science and provide detailed examples of how equivalence tests should be performed and reported. Equivalence tests are an important extension of the statistical tools psychologists currently use and enable researchers to falsify predictions about the presence, and declare the absence, of meaningful effects. }
}
```

Paste the reference into your bibliography.bib file. Change `doi:10.1177/2515245918770963` in the first line of the reference to a shortname you will use to cite the reference in your manuscript. We'll use `TOSTtutorial`.

#### Citing references {#references}

You can cite references in text like this: 

```
This tutorial uses several R packages [@tidyverse;@rmarkdown].
```

This tutorial uses several R packages [@tidyverse;@rmarkdown].

Put a minus in front of the @ if you just want the year:

```
Lakens, Scheel and Isengar [-@TOSTtutorial] wrote a tutorial explaining how to test for the absence of an effect.
```

Lakens, Scheel and Isengar [-@TOSTtutorial] wrote a tutorial explaining how to test for the absence of an effect.

#### Uncited references

If you want to add an item to the reference section without citing, it, add it to the YAML header like this:

```
nocite: |
  @ref1, @ref2, @ref3
```

Or add all of the items in the .bib file like this:

```
nocite: '@*'
```

#### Citation Styles

You can search a [list of style files](https://www.zotero.org/styles){target="_blank"} for various journals and download a file that will format your bibliography for a specific journal's style. You'll need to add the line `csl: filename.csl` to your YAML header. 

::: {.try data-latex=""}
Add some citations to your bibliography.bib file, reference them in your text, and render your manuscript to see the automatically generated reference section. Try a few different citation style files.
:::

#### Reference Section

By default, the reference section is added to the end of the document. If you want to change the position (e.g., to add figures and tables after the references), include `<div id="refs"></div>` where you want the references. 


::: {.try data-latex=""}
Add in-text citations and a reference list to your report.
:::

### Custom Templates {#custom-templates}

Some packages provide custom R Markdown templates. `reprores` has a Report template that shows all of the possible options in the YAML header, has bibliography and style files, and explains how to set up linked figures and tables. Because it contains multiple files, RStudio will ask you to create a new folder to keep all of the files in.

<div class="figure" style="text-align: center">
<img src="images/custom-rmd.png" alt="The custom R markdown temlate from reprores." width="50%" />
<p class="caption">(\#fig:img-custom-rmd)The custom R markdown temlate from reprores.</p>
</div>

::: {.try data-latex=""}
Start a report with the Report template and knit it. Try changing or deleting options.
:::

## Glossary {#glossary-repro}

<table class="table" style="margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;"> term </th>
   <th style="text-align:left;"> definition </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> [absolute path](https://psyteachr.github.io/glossary/a.html#absolute-path){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A file path that starts with / and is not appended to the working directory </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [chunk](https://psyteachr.github.io/glossary/c.html#chunk){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A section of code in an R Markdown file </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [directory](https://psyteachr.github.io/glossary/d.html#directory){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A collection or "folder" of files on a computer. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [extension](https://psyteachr.github.io/glossary/e.html#extension){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> The end part of a file name that tells you what type of file it is (e.g., .R or .Rmd). </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [knit](https://psyteachr.github.io/glossary/k.html#knit){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> To create an HTML, PDF, or Word document from an R Markdown (Rmd) document </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [markdown](https://psyteachr.github.io/glossary/m.html#markdown){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A way to specify formatting, such as headers, paragraphs, lists, bolding, and links. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [path](https://psyteachr.github.io/glossary/p.html#path){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A string representing the location of a file or directory. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [project](https://psyteachr.github.io/glossary/p.html#project){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A way to organise related files in RStudio </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [r markdown](https://psyteachr.github.io/glossary/r.html#r-markdown){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> The R-specific version of markdown: a way to specify formatting, such as headers, paragraphs, lists, bolding, and links, as well as code blocks and inline code. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [relative path](https://psyteachr.github.io/glossary/r.html#relative-path){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> The location of a file in relation to the working directory. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [reproducibility](https://psyteachr.github.io/glossary/r.html#reproducibility){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> The extent to which the findings of a study can be repeated in some other context </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [working directory](https://psyteachr.github.io/glossary/w.html#working-directory){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> The filepath where R is currently reading and writing files. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [yaml](https://psyteachr.github.io/glossary/y.html#yaml){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A structured format for information </td>
  </tr>
</tbody>
</table>




## Further Resources {#resources-repro}

* [Chapter 27: R Markdown](http://r4ds.had.co.nz/r-markdown.html) in *R for Data Science*
* [R Markdown Cheat Sheet](https://github.com/rstudio/cheatsheets/raw/master/rmarkdown.pdf)
* [R Markdown reference Guide](https://www.rstudio.com/wp-content/uploads/2015/03/rmarkdown-reference.pdf)
* [R Markdown Tutorial](https://rmarkdown.rstudio.com/lesson-1.html)
* [R Markdown: The Definitive Guide](https://bookdown.org/yihui/rmarkdown/) by Yihui Xie, J. J. Allaire, & Garrett Grolemund
* [Project Structure](https://slides.djnavarro.net/project-structure/) by Danielle Navarro
* [How to name files](https://speakerdeck.com/jennybc/how-to-name-files) by Jenny Bryan
* [Papaja](https://crsh.github.io/papaja_man/) Reproducible APA Manuscripts
* [The Turing Way](https://the-turing-way.netlify.app/)
