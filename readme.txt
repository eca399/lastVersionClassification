
Files:
1) XMLReader.java - reads the XML and generates a file for each title in the "files" folder

2) Mallet generated files:
research.mallet - the imported data
research_keys.txt - the categories with their keys
research_classification.txt - the weights of each category in each files
topic-state.gz - the main key word in each article (unused)

3) Generated from the previous generated Mallet files:
keys.js - containing the list of keys for each category (generated by ReadKeywords.java)
count.js - containing the amount for each category (generated by ReadClassification.java)

4) .bat files for windows:
- to compile the java files run the command: "make"
- to run the XMLReader run the command: "run". This will write in the "files" folder a file for each article
- to run the mallet (generating the reaserch* and topic-state.gz files) and then to
run ReadKeywords and ReadClassification run the command: "mallet" 
- to clean the generated files run this command: "clean" (it does not delete files from the "files" folder, only the others files)

So a tipical usage would be:
make
run
mallet
In order to perform these steps, mallet should be installed and dblp.xml should be added in this
folder.

5) bubbles.html - open to view the results. Mouse over over a bubble to see its associated keywords. 

6)detectName.js - tries to name the categories that mallet has found from their associated keywords lists
Bubbles with "..." in their text could not be named.

important: when deleting the files from the "files" folder, keep the "files" folder, do not delete the folder too

note: mallet has a random part in its algorithm, so running multiple times will give slightly different results

keys.js and count.js  in the current state in folder represents the output of ReadKeywords.java and
ReadClassification.java, respectively, in order to have a model of how would the graphic look like.

