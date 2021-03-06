"""
Exporter for exporting notebooks to Sphinx 'HowTo' style latex.  Latex 
formatted for use with PDFLatex.
"""
#-----------------------------------------------------------------------------
# Copyright (c) 2013, the IPython Development Team.
#
# Distributed under the terms of the Modified BSD License.
#
# The full license is in the file COPYING.txt, distributed with this software.
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Imports
#-----------------------------------------------------------------------------

from IPython.utils.traitlets import Unicode
from IPython.config import Config

# local import
from music21.ext.nbconvert.exporters import latex

from music21.ext.nbconvert.transformers.sphinx import SphinxTransformer

#-----------------------------------------------------------------------------
# Classes
#-----------------------------------------------------------------------------

class SphinxHowtoExporter(latex.LatexExporter):
    """
    Exports Sphinx "HowTo" LaTeX documents.  The Sphinx "HowTo" exporter 
    produces short document format latex for use with PDFLatex.
    """
    
    template_file = Unicode(
            'sphinx_howto', config=True,
            help="Name of the template file to use")

    _default_config = Config({
        'SphinxTransformer': {'enabled':True}
        })

    def __init__(self, transformers=None, filters=None, config=None, **kw):

        c = self.default_config
        if config:
            c.merge(config)

        super(SphinxHowtoExporter, self).__init__(
                                    transformers=transformers,
                                    filters=filters,
                                    config=c,
                                    **kw)



    def _register_transformers(self):
        
        #Register the transformers of the base class.
        super(SphinxHowtoExporter, self)._register_transformers()
        
        #Register sphinx latex transformer
        self.register_transformer(SphinxTransformer) 
                    
