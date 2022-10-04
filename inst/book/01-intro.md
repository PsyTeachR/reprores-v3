# Getting Started {#intro}

<div class="meme right"><img src="images/memes/rstudio.png" 
     alt="A line drawing of a person looking at a computer with a magnifying glass. The text reads 'I just installed RStudio. I'm a data scientist now.'" /></div>

## Learning Objectives {#ilo-intro}

1. Understand the [RStudio IDE](#rstudio_ide) [(video)](https://youtu.be/CbA6ZVlJE78){class="video"}
2. Type commands into the [console](#console) [(video)](https://youtu.be/wbI4c_7y0kE){class="video"}
3. Understand [coding terms](#coding-terms) and [function syntax](#function_syx) [(video)](https://youtu.be/X5P038N5Q8I){class="video"}
4. Install a [package](#install-package) [(video)](https://youtu.be/u_pvHnqkVCE){class="video"}
5. Know the methods for getting [help](#help)

## Setup {#setup-intro}

Download the [RStudio IDE cheat sheet](https://raw.githubusercontent.com/rstudio/cheatsheets/main/rstudio-ide.pdf).


## R and RStudio

<div class="meme left"><img src="images/intro/new_R_logo.png" /></div>

R is a programming environment for data processing and statistical analysis. We use R in Psychology at the University of Glasgow to promote <a class='glossary' target='_blank' title='Research that documents all of the steps between raw data and results in a way that can be verified.' href='https://psyteachr.github.io/glossary/r#reproducible-research'>reproducible research</a>. This refers to being able to document and reproduce all of the steps between raw data and results. R allows you to write <a class='glossary' target='_blank' title='A plain-text file that contains commands in a coding language, such as R.' href='https://psyteachr.github.io/glossary/s#script'>scripts</a> that combine data files, clean data, and run analyses. There are many other ways to do this, including writing SPSS syntax files, but we find R to be a useful tool that is free, open source, and commonly used by research psychologists.

::: {.info data-latex=""}
See Appendix \@ref(installingr) for more information on on how to install R and associated programs.
:::


### The Base R Console {#rconsole}

If you open up the application called R, you will see an "R Console" window that looks something like this.

<div class="figure" style="text-align: center">
<img src="images/intro/r_console.png" alt="The R Console window." width="100%" />
<p class="caption">(\#fig:img-repl)The R Console window.</p>
</div>

You can close R and never open it again. We'll be working entirely in RStudio in this class.

::: {.warning data-latex=""}
ALWAYS REMEMBER: Launch R though the RStudio IDE

Launch <img src="images/intro/rstudio_icon.png" style="height: 2em; vertical-align: middle;" alt="RStudio.app" /> (RStudio.app), not <img src="images/intro/new_R_logo.png" style="height: 2em; vertical-align: middle;" alt="R.app" /> (R.app).
:::

### RStudio {#rstudio_ide}

[RStudio](http://www.rstudio.com) is an Integrated Development Environment (<a class='glossary' target='_blank' title='Integrated Development Environment: a program that serves as a text editor, file manager, and provides functions to help you read and write code. RStudio is an IDE for R.' href='https://psyteachr.github.io/glossary/i#ide'>IDE</a>). This is a program that serves as a text editor, file manager, and provides many functions to help you read and write R code.

<div class="figure" style="text-align: center">
<img src="images/intro/rstudio.png" alt="The RStudio IDE" width="100%" />
<p class="caption">(\#fig:img-rstudio)The RStudio IDE</p>
</div>

RStudio is arranged with four window <a class='glossary' target='_blank' title='RStudio is arranged with four window "panes".' href='https://psyteachr.github.io/glossary/p#panes'>panes</a>. By default, the upper left pane is the **source pane**, where you view and edit source code from files. The bottom left pane is usually the **console pane**, where you can type in commands and view output messages. The right panes have several different tabs that show you information about your code. You can change the location of panes and what tabs are shown under **`Preferences > Pane Layout`**.

### Configure RStudio

In this class, you will be learning how to do <a class='glossary' target='_blank' title='Research that documents all of the steps between raw data and results in a way that can be verified.' href='https://psyteachr.github.io/glossary/r#reproducible-research'>reproducible research</a>.  This involves writing scripts that completely and transparently perform some analysis from start to finish in a way that yields the same result for different people using the same software on different computers. Transparency is a key value of science, as embodied in the "trust but verify" motto. 

<div class="meme right"><img src="images/memes/forgetting.jpg" 
     alt="Fry from Futurama squinting; top text: Not sure if I have a bad memory; bottom text: Or a bad memory" /></div>

When you do things reproducibly, others can understand and check your work. This benefits science, but there is a selfish reason, too: the most important person who will benefit from a reproducible script is your future self. When you return to an analysis after two weeks of vacation, you will thank your earlier self for doing things in a transparent, reproducible way, as you can easily pick up right where you left off.

There are two tweaks that you should do to your RStudio installation to maximize reproducibility. Go to **`Global Options...`** under the **`Tools`** menu (Cmd-,), and uncheck the box that says **`Restore .RData into workspace at startup`**.  If you keep things around in your workspace, things will get messy, and unexpected things will happen. You should always start with a clear workspace. This also means that you never want to save your workspace when you exit, so set this to **`Never`**. The only thing you want to save are your scripts.

<div class="figure" style="text-align: center">
<img src="images/intro/repro.png" alt="Alter these settings for increased reproducibility." width="66%" />
<p class="caption">(\#fig:img-repro)Alter these settings for increased reproducibility.</p>
</div>

::: {.try data-latex=""}
Your settings should have:

* Restore .RData into workspace at startup: <select class='webex-select'><option value='blank'></option><option value=''>Checked</option><option value='answer'>Not Checked</option></select>
* Save workspace to .RData on exit: <select class='webex-select'><option value='blank'></option><option value=''>Always</option><option value='answer'>Never</option><option value=''>Ask</option></select>
:::


## Console commands {#console}

We are first going to learn about how to interact with the <a class='glossary' target='_blank' title='The pane in RStudio where you can type in commands and view output messages.' href='https://psyteachr.github.io/glossary/c#console'>console</a>. In general, you will be developing R <a class='glossary' target='_blank' title='A plain-text file that contains commands in a coding language, such as R.' href='https://psyteachr.github.io/glossary/s#script'>scripts</a> or <a class='glossary' target='_blank' title='The R-specific version of markdown: a way to specify formatting, such as headers, paragraphs, lists, bolding, and links, as well as code blocks and inline code.' href='https://psyteachr.github.io/glossary/r#r-markdown'>R Markdown</a> files, rather than working directly in the console window. However, you can consider the console a kind of "sandbox" where you can try out lines of code and adapt them until you get them to do what you want. Then you can copy them back into the script editor.

Mostly, however, you will be typing into the script editor window (either into an R script or an R Markdown file) and then sending the commands to the console by placing the cursor on the line and holding down the Ctrl key while you press Enter. The Ctrl+Enter key sequence sends the command in the script to the console.

<div class="meme right"><img src="images/memes/typos.jpg"
     alt="Morpehus from The Matrix; top text: What if I told you; bottom text: Typos are accidents nd accidents happon" /></div>

One simple way to learn about the R console is to use it as a calculator. Enter the lines of code below and see if your results match. Be prepared to make lots of typos (at first).

The first grey box below shows the code you should type; you can click on the clipboard in the upper right of this box to copy all of the contents, but it's better if you practice typing commands at first. The second grey box shows the output of the code in the first box; you can always identify output boxes by the two hashes (`##`) before each line.


```r
1 + 1
```

```
## [1] 2
```

The R console remembers a history of the commands you typed in the past. Use the up and down arrow keys on your keyboard to scroll backwards and forwards through your history. It's a lot faster than re-typing.


```r
1 + 1 + 3
```

```
## [1] 5
```

You can break up mathematical expressions over multiple lines; R waits for a complete expression before processing it.

::: {.info data-latex=""}
Lines that start with a hash (`#`) are <a class='glossary' target='_blank' title=' Comments are text that R will not run as code. You can annotate .R files or chunks in R Markdown files with comments by prefacing each line of the comment with one or more hash symbols (#).' href='https://psyteachr.github.io/glossary/c#comment'>comments</a> and are not run. We'll learn more about comments in Chapter\ \@ref(comments).
:::


```r
# here comes a long expression
# let's break it over multiple lines
1 + 2 + 3 + 4 + 5 + 6 +
    7 + 8 + 9 +
    10
```

```
## [1] 55
```

Text inside quotes is called a <a class='glossary' target='_blank' title='A piece of text inside of quotes.' href='https://psyteachr.github.io/glossary/s#string'>string</a>.


```r
"Good afternoon"
```

```
## [1] "Good afternoon"
```

You can break up text over multiple lines; R waits for a close quote before processing it. If you want to include a double quote inside this quoted string, <a class='glossary' target='_blank' title='Include special characters like " inside of a string by prefacing them with a backslash.' href='https://psyteachr.github.io/glossary/e#escape'>escape</a> it with a backslash.


```r
africa <- "I hear the drums echoing tonight  
But she hears only whispers of some quiet conversation  
She's coming in, 12:30 flight  
The moonlit wings reflect the stars that guide me towards salvation  
I stopped an old man along the way  
Hoping to find some old forgotten words or ancient melodies  
He turned to me as if to say, \"Hurry boy, it's waiting there for you\"

- Toto"

cat(africa) # cat() prints the string
```

```
## I hear the drums echoing tonight  
## But she hears only whispers of some quiet conversation  
## She's coming in, 12:30 flight  
## The moonlit wings reflect the stars that guide me towards salvation  
## I stopped an old man along the way  
## Hoping to find some old forgotten words or ancient melodies  
## He turned to me as if to say, "Hurry boy, it's waiting there for you"
## 
## - Toto
```

## Coding Terms {#coding-terms}

You will encounter a lot of jargon while learning R. This specialised vocabulary can help you to communicate more efficiently about coding and statistics and to search for solutions to problems.

### Objects {#vars}

Often you want to store the result of some computation for later use.  You can store it in an <a class='glossary' target='_blank' title='A word that identifies and stores the value of some data for later use.' href='https://psyteachr.github.io/glossary/o#object'>object</a> (also sometimes called a <a class='glossary' target='_blank' title='(coding): A word that identifies and stores the value of some data for later use; (stats): An attribute or characteristic of an observation that you can measure, count, or describe' href='https://psyteachr.github.io/glossary/v#variable'>variable</a>). An object in R:

* contains only letters, numbers, full stops, and underscores
* starts with a letter or a full stop and a letter
* distinguishes uppercase and lowercase letters (`rickastley` is not the same as `RickAstley`)

The following are valid and different objects:

* `songdata`
* `SongData`
* `song_data`
* `song.data`
* `.song.data`
* `never_gonna_give_you_up_never_gonna_let_you_down`

The following are not valid objects:

* `_song_data`
* `1song`
* `.1song`
* `song data`
* `song-data`

::: {.try data-latex=""}
Which of the following are valid object names?

* <select class='webex-select'><option value='blank'></option><option value='answer'>TRUE</option><option value=''>FALSE</option></select> `slender_man`  
* <select class='webex-select'><option value='blank'></option><option value=''>TRUE</option><option value='answer'>FALSE</option></select> `copy pasta`  
* <select class='webex-select'><option value='blank'></option><option value='answer'>TRUE</option><option value=''>FALSE</option></select> `DOGE`  
* <select class='webex-select'><option value='blank'></option><option value=''>TRUE</option><option value='answer'>FALSE</option></select> `(╯°□°）╯︵ ┻━┻`  
* <select class='webex-select'><option value='blank'></option><option value='answer'>TRUE</option><option value=''>FALSE</option></select> `ErMahGerd`  
* <select class='webex-select'><option value='blank'></option><option value=''>TRUE</option><option value='answer'>FALSE</option></select> `34Rule`  
* <select class='webex-select'><option value='blank'></option><option value=''>TRUE</option><option value='answer'>FALSE</option></select> `panik-kalm-panik`  
* <select class='webex-select'><option value='blank'></option><option value=''>TRUE</option><option value='answer'>FALSE</option></select> `👀`  
* <select class='webex-select'><option value='blank'></option><option value='answer'>TRUE</option><option value=''>FALSE</option></select> `I_am_once_again_asking_you_for_your_support`  
* <select class='webex-select'><option value='blank'></option><option value='answer'>TRUE</option><option value=''>FALSE</option></select> `.this.is.fine.`  
* <select class='webex-select'><option value='blank'></option><option value=''>TRUE</option><option value='answer'>FALSE</option></select> `_is_this_a_pigeon_`  
:::

::: {.tinfo data-latex=""}
Technically, you can name a variable anything if you surround the name with backticks, but this can cause some hard-to-debug problems, so don't do this until you're a confident coder.


```r
`- Is this a bad name?` <- TRUE
```
:::

### Assignment

Use the <a class='glossary' target='_blank' title='The symbol <-, which functions like = and assigns the value on the right to the object on the left' href='https://psyteachr.github.io/glossary/a#assignment-operator'>assignment operator</a> `<-` to assign the value on the right to the object named on the left.


```r
## use the assignment operator '<-'
## R stores the number in the object
x <- 5
```

Now that we have set `x` to a value, we can do something with it:


```r
x * 2
```

```
## [1] 10
```

We can also get R to evaluate an expression and store the result in an object.


```r
boring_calculation <- 2 + 2
```

Note that it doesn't print the result back at you when it's stored. To view the result, just type the object name on a blank line.


```r
boring_calculation
```

```
## [1] 4
```

Once an object is assigned a value, its value doesn't change unless you reassign the object, even if the objects you used to calculate it change. Predict what the code below does and test yourself:


```r
this_year <- 2022
birth_year <- 2000
age <- this_year - birth_year
this_year <- 2023
```

::: {.try data-latex=""}
After all the code above is run:

* `this_year` = <select class='webex-select'><option value='blank'></option><option value=''>22</option><option value=''>23</option><option value=''>2000</option><option value=''>2022</option><option value='answer'>2023</option></select>
* `birth_year` = <select class='webex-select'><option value='blank'></option><option value=''>22</option><option value=''>23</option><option value='answer'>2000</option><option value=''>2022</option><option value=''>2023</option></select>
* `age` = <select class='webex-select'><option value='blank'></option><option value='answer'>22</option><option value=''>23</option><option value=''>2000</option><option value=''>2022</option><option value=''>2023</option></select>
:::



### The environment

Any time you assign something to a new object, R creates a new entry in the <a class='glossary' target='_blank' title='The interactive workspace where your script runs' href='https://psyteachr.github.io/glossary/g#global-environment'>global environment</a>. Objects in the global environment exist until you end your session; then they disappear forever (unless you save them).

Look at the **`Environment`** tab in the upper right pane. It lists all of the objects you have created. Click the broom icon to clear all of the objects and start fresh. You can also use the following functions in the console to view all objects, remove one object, or remove all objects.


```r
ls()            # print the objects in the global environment
rm("x")         # remove the object named x from the global environment
rm(list = ls()) # clear out the global environment
```

::: {.info data-latex=""}
In the upper right corner of the Environment tab, change **`List`** to **`Grid`**. Now you can see the type, length, and size of your objects, and reorder the list by any of these attributes.
:::

### Whitespace

R mostly ignores <a class='glossary' target='_blank' title='Spaces, tabs and line breaks' href='https://psyteachr.github.io/glossary/w#whitespace'>whitespace</a>: spaces, tabs, and line breaks. This means that you can use whitespace to help you organise your code.


```r
# a and b are identical
a <- list(ctl = "Control Condition", exp1 = "Experimental Condition 1", exp2 = "Experimental Condition 2")

# but b is much easier to read
b <- list(ctl  = "Control Condition", 
          exp1 = "Experimental Condition 1", 
          exp2 = "Experimental Condition 2")
```

When you see `>` at the beginning of a line, that means R is waiting for you to start a new command.  However, if you see a `+` instead of `>` at the start of the line, that means R is waiting for you to finish a command you started on a previous line.  If you want to cancel whatever command you started, just press the Esc key in the console window and you'll get back to the `>` command prompt.


```r
# R waits until next line for evaluation
(3 + 2) *
     5
```

```
## [1] 25
```

It is often useful to break up long functions onto several lines.


```r
cat("3, 6, 9, the goose drank wine",
    "The monkey chewed tobacco on the streetcar line",
    "The line broke, the monkey got choked",
    "And they all went to heaven in a little rowboat",
    sep = "  \n")
```

```
## 3, 6, 9, the goose drank wine  
## The monkey chewed tobacco on the streetcar line  
## The line broke, the monkey got choked  
## And they all went to heaven in a little rowboat
```


### Function syntax {#function_syx}

A lot of what you do in R involves calling a <a class='glossary' target='_blank' title='A named section of code that can be reused.' href='https://psyteachr.github.io/glossary/f#function'>function</a> and storing the results. A function is a named section of code that can be reused. 

For example, `sd` is a function that returns the <a class='glossary' target='_blank' title='A descriptive statistic that measures how spread out data are relative to the mean.' href='https://psyteachr.github.io/glossary/s#standard-deviation'>standard deviation</a> of the <a class='glossary' target='_blank' title='A type of data structure that collects values with the same data type, like T/F values, numbers, or strings.' href='https://psyteachr.github.io/glossary/v#vector'>vector</a> of numbers that you provide as the input <a class='glossary' target='_blank' title='A variable that provides input to a function.' href='https://psyteachr.github.io/glossary/a#argument'>argument</a>. Functions are set up like this: 


```r
function_name(argument1, argument2 = "value")
```

The arguments in parentheses can be named (e.g., `argument1 = 10`) or you can skip the names if you put them in the exact same order that they're defined in the function. You can check this by typing `?sd` (or whatever function name you're looking up) into the console and the Help pane will show you the argument order under **Usage**. You can skip arguments that have a <a class='glossary' target='_blank' title='A value that a function uses for an argument if it is skipped.' href='https://psyteachr.github.io/glossary/d#default-value'>default value</a> specified.

Most functions return a value, but may also produce side effects like printing to the console.

To illustrate, the function `rnorm()` generates random numbers from the standard <a class='glossary' target='_blank' title='A symmetric distribution of data where values near the centre are most probable.' href='https://psyteachr.github.io/glossary/n#normal-distribution'>normal distribution</a>. The help page for `rnorm()` (accessed by typing `?rnorm` in the console) shows that it has the syntax 


```r
rnorm(n, mean = 0, sd = 1)
```

where `n` is the number of randomly generated numbers you want, `mean` is the mean of the distribution, and `sd` is the standard deviation. The default mean is 0, and the default standard deviation is 1. There is no default for `n`, which means you'll get an error if you don't specify it:


```r
rnorm()
```

```
## Error in rnorm(): argument "n" is missing, with no default
```

If you want 10 random numbers from a normal distribution with mean of 0 and standard deviation, you can just use the defaults.


```r
rnorm(10)
```

```
##  [1]  1.0776361 -1.5428004 -1.0694126  0.4656785  0.2716471  1.6077680
##  [7] -1.3126246 -0.7284652  0.2781463 -0.4458766
```

If you want 10 numbers from a normal distribution with a mean of 100:


```r
rnorm(10, 100)
```

```
##  [1] 100.46196  98.86046 100.19352  98.78103 100.48892 100.12980  99.81721
##  [8] 100.27994  99.78089 101.32672
```

This would be an equivalent but less efficient way of calling the function:


```r
rnorm(n = 10, mean = 100)
```

```
##  [1] 100.16626  99.45014 100.76694  98.43625 100.91983  98.14420 101.21891
##  [8] 102.08515  99.16165 101.25589
```

We don't need to name the arguments because R will recognize that we intended to fill in the first and second arguments by their position in the function call. However, if we want to change the default for an argument coming later in the list, then we need to name it. For instance, if we wanted to keep the default `mean = 0` but change the standard deviation to 100, we would do it this way:


```r
rnorm(10, sd = 100)
```

```
##  [1] -104.708496 -121.343579   69.986104   -9.516204    7.198781 -195.764591
##  [7]  -38.231374   38.747884  -58.830097 -133.046854
```

Some functions give a list of options after an argument; this means the default value is the first option. The usage entry for the `power.t.test()` function looks like this:


```r
power.t.test(n = NULL, delta = NULL, sd = 1, sig.level = 0.05,
             power = NULL,
             type = c("two.sample", "one.sample", "paired"),
             alternative = c("two.sided", "one.sided"),
             strict = FALSE, tol = .Machine$double.eps^0.25)
```

::: {.try data-latex=""}



* What is the default value for `sd`? <select class='webex-select'><option value='blank'></option><option value='answer'>1</option><option value=''>two.sample</option><option value=''>NULL</option><option value=''>0.05</option></select>
* What is the default value for `type`? <select class='webex-select'><option value='blank'></option><option value=''>one.sample</option><option value=''>NULL</option><option value=''>paired</option><option value='answer'>two.sample</option></select>
* Which is equivalent to <code><span><span class='fu'><a target='_blank' href='https://rdrr.io/r/stats/power.t.test.html'>power.t.test</a></span><span class='op'>(</span><span class='fl'>100</span>, <span class='fl'>0.5</span><span class='op'>)</span></span></code>? <div class='webex-radiogroup' id='radio_SUVVAMCMNR'><label><input type="radio" autocomplete="off" name="radio_SUVVAMCMNR" value=""></input> <span>power.t.test()</span></label><label><input type="radio" autocomplete="off" name="radio_SUVVAMCMNR" value=""></input> <span>power.t.test(n = 100)</span></label><label><input type="radio" autocomplete="off" name="radio_SUVVAMCMNR" value="answer"></input> <span>power.t.test(delta = 0.5, n = 100)</span></label><label><input type="radio" autocomplete="off" name="radio_SUVVAMCMNR" value=""></input> <span>power.t.test(100, 0.5, sig.level = 1, sd = 0.05)</span></label></div>


:::


## Add-on packages {#install-package}

One of the great things about R is that it is **user extensible**: anyone can create a new add-on software package that extends its functionality. There are currently thousands of add-on packages that R users have created to solve many different kinds of problems, or just simply to have fun. There are packages for data visualisation, machine learning, neuroimaging, eyetracking, web scraping, and playing games such as Sudoku.

Add-on packages are not distributed with <a class='glossary' target='_blank' title='The set of R functions that come with a basic installation of R, before you add external packages.' href='https://psyteachr.github.io/glossary/b#base-r'>base R</a>, but have to be downloaded and installed from an archive, in the same way that you would, for instance, download and install PokemonGo on your smartphone.

The main repository where packages reside is called <a class='glossary' target='_blank' title='The Comprehensive R Archive Network: a network of ftp and web servers around the world that store identical, up-to-date, versions of code and documentation for R.' href='https://psyteachr.github.io/glossary/c#cran'>CRAN</a>, the Comprehensive R Archive Network. A package has to pass strict tests devised by the R core team to be allowed to be part of the CRAN archive. You can install from the CRAN archive through R using the <code><span><span class='fu'><a target='_blank' href='https://rdrr.io/r/utils/install.packages.html'>install.packages</a></span><span class='op'>(</span><span class='op'>)</span></span></code> function.

There is an important distinction between **installing** a package and **loading** a package.

### Installing a package 

<div class="meme right"><img src="images/memes/pokemon.gif" alt="Pikachu and Eevee from Pokemon waving and high-five-ing" /></div>

This is done using <code><span><span class='fu'><a target='_blank' href='https://rdrr.io/r/utils/install.packages.html'>install.packages</a></span><span class='op'>(</span><span class='op'>)</span></span></code>. This is like installing an app on your phone: you only have to do it once and the app will remain installed until you remove it. For instance, if you want to use PokemonGo on your phone, you install it once from the App Store or Play Store, and you don't have to re-install it each time you want to use it. Once you launch the app, it will run in the background until you close it or restart your phone. Likewise, when you install a package, the package will be available (but not *loaded*) every time you open up R.

::: {.warning data-latex=""}
You may only be able to permanently install packages if you are using R on your own system; you may not be able to do this on public workstations if you lack the appropriate privileges.
:::

Install the <code class='package'>beepr</code> package on your system. This package plays sounds, so you can set a long script to play a sound to notify you when it is done.


```r
# type this in the console pane
install.packages("beepr")
```

If you don't already have packages like <code class='package'>audio</code> installed, it will also install these <a class='glossary' target='_blank' title='' href='https://psyteachr.github.io/glossary/d#dependency'>dependencies</a> for you. If you don't get an error message at the end, the installation was successful. 

::: {.dangerous data-latex=""}
Never install a package from inside a script. Only do this from the console pane.
:::

### Loading a package

This is done using <code><span><span class='kw'><a target='_blank' href='https://rdrr.io/r/base/library.html'>library</a></span><span class='op'>(</span><span class='va'>packagename</span><span class='op'>)</span></span></code>. This is like **launching** an app on your phone: the functionality is only there where the app is launched and remains there until you close the app or restart. Likewise, when you run <code><span><span class='kw'><a target='_blank' href='https://rdrr.io/r/base/library.html'>library</a></span><span class='op'>(</span><span class='va'>packagename</span><span class='op'>)</span></span></code> within a session, the functionality of the package referred to by `packagename` will be made available for your R session. The next time you start R, you will need to run the <code><span><span class='kw'><a target='_blank' href='https://rdrr.io/r/base/library.html'>library</a></span><span class='op'>(</span><span class='op'>)</span></span></code> function again if you want to access its functionality.

You can load the functions in <code class='package'>beepr</code> for your current R session as follows:


```r
library(beepr)
```

You might get some red text when you load a package, this is normal. It is usually warning you that this package has functions that have the same name as other packages you've already loaded.

Now you can run the function `beepr::beep()`.


```r
beepr::beep() # default sound
beepr::beep(sound = "mario") # change the sound argument
```

::: {.info data-latex=""}
You can use the convention `package::function()` to indicate in which add-on package a function resides. For instance, if you see <code><span><span class='fu'>readr</span><span class='fu'>::</span><span class='fu'><a target='_blank' href='https://readr.tidyverse.org/reference/read_delim.html'>read_csv</a></span><span class='op'>(</span><span class='op'>)</span></span></code>, that refers to the function <code><span><span class='fu'>read_csv</span><span class='op'>(</span><span class='op'>)</span></span></code> in the <code class='package'>readr</code> add-on package.
:::

### Tidyverse

<code class='package'>tidyverse</code>is a meta-package that loads several packages we'll be using in almost every script:

- <code class='package'>ggplot2</code> for data visualisation (Chapter\ \@ref(ggplot))
- <code class='package'>readr</code> for data import (Chapter\ \@ref(data))
- <code class='package'>tibble</code> for tables (Chapter\ \@ref(data))
- <code class='package'>tidyr</code> for data tidying (Chapter\ \@ref(tidyr))
- <code class='package'>dplyr</code> for data manipulation (Chapters\ \@ref(joins) and\ \@ref(dplyr))
- <code class='package'>purrr</code> for repeating things (Chapter\ \@ref(func))
- <code class='package'>stringr</code> for <a class='glossary' target='_blank' title='A piece of text inside of quotes.' href='https://psyteachr.github.io/glossary/s#string'>strings</a>
- <code class='package'>forcats</code> for <a class='glossary' target='_blank' title='A data type where a specific set of values are stored with labels; An explanatory variable manipulated by the experimenter' href='https://psyteachr.github.io/glossary/f#factor'>factors</a>

### Install from GitHub

Many R packages are not yet on <a class='glossary' target='_blank' title='The Comprehensive R Archive Network: a network of ftp and web servers around the world that store identical, up-to-date, versions of code and documentation for R.' href='https://psyteachr.github.io/glossary/c#cran'>CRAN</a> because they are still in development. Increasingly, datasets and code for papers are available as packages you can download from github. You'll need to install the <code class='package'>devtools</code> package to be able to install packages from github. Check if you have a package installed by trying to load it (e.g., if you don't have devtools installed, <code><span><span class='kw'><a target='_blank' href='https://rdrr.io/r/base/library.html'>library</a></span><span class='op'>(</span><span class='va'><a target='_blank' href='https://devtools.r-lib.org/'>devtools</a></span><span class='op'>)</span></span></code> will display an error message) or by searching for it in the packages tab in the lower right pane. All listed packages are installed; all checked packages are currently loaded.

<div class="figure" style="text-align: center">
<img src="images/intro/packages.png" alt="Check installed and loaded packages in the packages tab in the lower right pane." width="100%" />
<p class="caption">(\#fig:img-packages)Check installed and loaded packages in the packages tab in the lower right pane.</p>
</div>


```r
# install devtools if you get
# Error in loadNamespace(name) : there is no package called ‘devtools’
# install.packages("devtools")
devtools::install_github("psyteachr/reprores-v3")
```

After you install the <code class='package'>reprores</code> package, load it using the <code><span><span class='kw'><a target='_blank' href='https://rdrr.io/r/base/library.html'>library</a></span><span class='op'>(</span><span class='op'>)</span></span></code> function. You can then try out some of the functions below.


```r
library(reprores)

# opens a local copy of this book in your web browser
book()

# opens a shiny app that lets you see how simulated data would look in different plot styles
app("plotdemo")

# creates and opens a file containing the exercises for this chapter
exercise(1)
```


::: {.try data-latex=""}
How many different ways can you find to discover what functions are available in the <code class='package'>reprores</code> package?
:::

<code class='package'>reprores</code> contains datasets that we will be using in future lessons. <code><span><span class='fu'>getdata</span><span class='op'>(</span><span class='op'>)</span></span></code> creates a directory called <code class='path'>data</code> with all of the class datasets.


```r
# loads the disgust dataset
data("disgust")

# shows the documentation for the built-in dataset `disgust`
?disgust

# saves datasets into a "data" folder in your working directory
getdata("data")
```

## Getting help {#help}

<div class="right meme"><img src="images/memes/code_baby.jpg"
     alt = "Medieval drawing of a woman labelled 'you' holding a an ugly baby labelled 'your code'. They are looking at each other with dismay. Text at the bottom reads: when you run your code and it doesn't do what you expected it would do" /></div>

You will feel like you need a *lot* of help when you're starting to learn. This won't really go away, and it isn't supposed to. Experienced coders are also constantly looking things up; it's impossible to memorise everything. The goal is to learn enough about the structure of R that you can look things up quickly. This is why there is so much specialised jargon in coding; it's easier to google "<a class='glossary' target='_blank' title='To combine strings or vectors.' href='https://psyteachr.github.io/glossary/c#concatenate'>concatenating</a> <a class='glossary' target='_blank' title='A type of data structure that collects values with the same data type, like T/F values, numbers, or strings.' href='https://psyteachr.github.io/glossary/v#vector'>vectors</a> in R" than "putting together groups of things that are the same kind of data in R".

### Function Help

Start up help in a browser using the function `help.start()`.

If a function is in <a class='glossary' target='_blank' title='The set of R functions that come with a basic installation of R, before you add external packages.' href='https://psyteachr.github.io/glossary/b#base-r'>base R</a> or a loaded <a class='glossary' target='_blank' title='A group of R functions.' href='https://psyteachr.github.io/glossary/p#package'>package</a>, you can use the `help("function_name")` function or the `?function_name` shortcut to access the help file. If the package isn't loaded, specify the package name as the second argument to the help function.


```r
# these methods are all equivalent ways of getting help
help("rnorm")
?rnorm
help("rnorm", package="stats") 
```

When the package isn't loaded or you aren't sure what package the function is in, use the shortcut `??function_name`.

::: {.try data-latex=""}

* What is the first argument to the `mean` function? <select class='webex-select'><option value='blank'></option><option value=''>trim</option><option value=''>na.rm</option><option value=''>mean</option><option value='answer'>x</option></select>
* What package is `read_excel` in? <select class='webex-select'><option value='blank'></option><option value=''>readr</option><option value='answer'>readxl</option><option value=''>base</option><option value=''>stats</option></select>
:::

### Googling

If the function help doesn't help, or you're not even sure what function you need, try Googling your question. It will take some practice to be able to use the right jargon in your search terms to get what you want. It helps to put "R" or "rstats", or "tidyverse" in the search text, or the name of the relevant package, like <code class='package'>ggplot2</code>. 

### Vignettes

Many packages, especially [tidyverse](https://www.tidyverse.org/packages/){target="_blank"} ones, have helpful websites with vignettes explaining how to use their functions. Some of the vignettes are also available inside R. 

```r
# opens a list of available vignettes
vignette(package = "ggplot2")

# opens a specific vignette in the Help pane
vignette("ggplot2-specs", package = "ggplot2")
```

### Asking for Help

<div class="meme right" style="min-width:60%;"><img src="images/memes/help-no-photos.png"
     alt="top left: Geordi from star trek looking sceptical with hand up; top right: photo of a laptop screen with a code error; bottom left: Geordi looking pleased and pointing; bottom right: the error explained in text with formatting" /></div>

If all else fails, you can ask for help. See Appendix\ \@ref(getting-help) for advice on how to share code when asking for help on the class Teams channel or other web-based forums. It also has a section on how to make a <a class='glossary' target='_blank' title='A reproducible example that is the smallest, completely self-contained example of your problem or question.' href='https://psyteachr.github.io/glossary/r#reprex'>reprex</a> to make it easier for others to understand and reproduce your problem (and often solve it yourself in the process) . 

TL;DR: copy and paste code that's giving you trouble, please don't send screenshots and definitely not photos of your screen.


## Glossary  {#glossaryintro}

Each chapter ends with a glossary table defining the jargon introduced in this chapter. The links below take you to the [glossary book](https://psyteachr.github.io/glossary), which you can also download for offline use.


```r
# install the glossary package (only once)
devtools::install_github("psyteachr/glossary")

# open the glossary offline 
glossary::book()
```


<table class="table" style="margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;"> term </th>
   <th style="text-align:left;"> definition </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> [argument](https://psyteachr.github.io/glossary/a.html#argument){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A variable that provides input to a function. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [assignment operator](https://psyteachr.github.io/glossary/a.html#assignment-operator){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> The symbol 
  </td>
</tr>
  <tr>
   <td style="text-align:left;"> [base r](https://psyteachr.github.io/glossary/b.html#base-r){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> The set of R functions that come with a basic installation of R, before you add external packages. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [comment](https://psyteachr.github.io/glossary/c.html#comment){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> Comments are text that R will not run as code. You can annotate .R files or chunks in R Markdown files with comments by prefacing each line of the comment with one or more hash symbols (#). </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [concatenate](https://psyteachr.github.io/glossary/c.html#concatenate){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> To combine strings or vectors. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [console](https://psyteachr.github.io/glossary/c.html#console){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> The pane in RStudio where you can type in commands and view output messages. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [cran](https://psyteachr.github.io/glossary/c.html#cran){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> The Comprehensive R Archive Network: a network of ftp and web servers around the world that store identical, up-to-date, versions of code and documentation for R. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [default value](https://psyteachr.github.io/glossary/d.html#default-value){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A value that a function uses for an argument if it is skipped. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [dependency](https://psyteachr.github.io/glossary/d.html#dependency){class="glossary" target="_blank"} </td>
   <td style="text-align:left;">  </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [escape](https://psyteachr.github.io/glossary/e.html#escape){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> Include special characters like " inside of a string by prefacing them with a backslash. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [factor](https://psyteachr.github.io/glossary/f.html#factor){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A data type where a specific set of values are stored with labels; An explanatory variable manipulated by the experimenter </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [function](https://psyteachr.github.io/glossary/f.html#function){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A named section of code that can be reused. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [global environment](https://psyteachr.github.io/glossary/g.html#global-environment){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> The interactive workspace where your script runs </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [ide](https://psyteachr.github.io/glossary/i.html#ide){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> Integrated Development Environment: a program that serves as a text editor, file manager, and provides functions to help you read and write code. RStudio is an IDE for R. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [normal distribution](https://psyteachr.github.io/glossary/n.html#normal-distribution){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A symmetric distribution of data where values near the centre are most probable. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [object](https://psyteachr.github.io/glossary/o.html#object){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A word that identifies and stores the value of some data for later use. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [package](https://psyteachr.github.io/glossary/p.html#package){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A group of R functions. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [panes](https://psyteachr.github.io/glossary/p.html#panes){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> RStudio is arranged with four window "panes". </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [r markdown](https://psyteachr.github.io/glossary/r.html#r-markdown){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> The R-specific version of markdown: a way to specify formatting, such as headers, paragraphs, lists, bolding, and links, as well as code blocks and inline code. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [reprex](https://psyteachr.github.io/glossary/r.html#reprex){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A reproducible example that is the smallest, completely self-contained example of your problem or question. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [reproducible research](https://psyteachr.github.io/glossary/r.html#reproducible-research){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> Research that documents all of the steps between raw data and results in a way that can be verified. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [script](https://psyteachr.github.io/glossary/s.html#script){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A plain-text file that contains commands in a coding language, such as R. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [standard deviation](https://psyteachr.github.io/glossary/s.html#standard-deviation){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A descriptive statistic that measures how spread out data are relative to the mean. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [string](https://psyteachr.github.io/glossary/s.html#string){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A piece of text inside of quotes. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [variable](https://psyteachr.github.io/glossary/v.html#variable){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> (coding): A word that identifies and stores the value of some data for later use; (stats): An attribute or characteristic of an observation that you can measure, count, or describe </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [vector](https://psyteachr.github.io/glossary/v.html#vector){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> A type of data structure that collects values with the same data type, like T/F values, numbers, or strings. </td>
  </tr>
  <tr>
   <td style="text-align:left;"> [whitespace](https://psyteachr.github.io/glossary/w.html#whitespace){class="glossary" target="_blank"} </td>
   <td style="text-align:left;"> Spaces, tabs and line breaks </td>
  </tr>
</tbody>
</table>



## Further Resources {#resources-intro}

* [Chapter 1: Introduction](http://r4ds.had.co.nz/introduction.html) in *R for Data Science*
* [RStudio IDE Cheatsheet](https://github.com/rstudio/cheatsheets/raw/master/rstudio-ide.pdf)
* [RStudio Cloud](https://rstudio.cloud/){target="_blank"}
