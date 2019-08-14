
edit ~/.pydistutils.cfg

[install]
prefix=

mkdir lib
pip install -t lib music21

caching.py (remove the multiprocessing stuff)

#clean
```
cd music21
rm -rf documentation
cd corpus
rm -rf bach/ beethoven/ ciconia/ corelli/ cpebach/ demos/ essenFolksong/ handel/ haydn/ josquin/ leadSheet/ luca/ miscFolk/ monteverdi/ mozart/ oneills1850/ palestrina/ ryansMammoth/ schoenberg/ schumann schumann_clara/ theoryExercises/ trecento/ verdi/ weber/
rm scala/scl/*.scl
```

dev_appserver.py .
