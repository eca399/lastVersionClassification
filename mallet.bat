call ..\bin\mallet import-dir --input files --output research.mallet --keep-sequence --remove-stopwords
call ..\bin\mallet train-topics  --input research.mallet  --num-topics 20 --optimize-interval 20 --output-state topic-state.gz  --output-topic-keys research_keys.txt --output-doc-topics research_classification.txt
call java ReadClassification
call java ReadKeywords
