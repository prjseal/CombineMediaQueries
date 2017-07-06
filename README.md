## Combine Media Queries ##

Let's say you have a css file which is the result of some sass, and you don't want to use sass anymore, you just want to edit the css. Well you end up with loads of media queries throughout the css file. This project uses another project to group those media queries for you.

This project implements a grunt task which you can find [here](https://github.com/buildingblocks/grunt-combine-media-queries)

With this implementation you can just put a css file in the **source** folder, run the task `grunt cmq` and it will generate a file in the **destination** folder with all of the media queries grouped together.

Just download the project, run `npm install` and then run `grunt cmq` or you can just double click on **run.bat** and it will run the command for you.
