scangraph
=========

This tool allows to retrieve the position of data points as plotted
on a raster graph.


Usage
-----

Let's assume you want to retrieve the data on this graph:
http://mallit.fr.umn.edu/fr4218/assigns/excelEG/data_plot.gif
(this is just a random image found when looking for "data plot"
in Google Images).

Follow those steps:

#. Download scangraph files.
#. Put the image file in the same directory.
#. Load ``scangraph.html`` in your browser.
#. Click on the "file" field, and select the image file.
   The image file should now appear in the scangraph page.
#. Click on the lower left corner of the graph. This will be ``x0,y0``.
#. Click on the upper right corner of the graph. This will be ``x1,y1``.
#. Enter the coordinates of the two previous points in the corresponding
   text fields.
#. If one (or both) axis uses a logarithmic scale, tick the corresponding
   checkbox.
#. Click on as many points as you want on the image. Each time you click,
   the point coordinates will be added to a list on the right. A red dot
   will be shown on the places where you clicked.

To restart, just hit Ctrl+R in your browser.


Caveats
-------

You cannot remove a point once you have clicked on it, unless you restart
from the beginning.

The tool can only handle the image formats understood by your browser
(obviously).

If you try to load a second image without restarting from the beginning,
unexpected things might happen.

You need a pretty recent browser (supporting <canvas>).

This uses JQuery and JCanvas.

