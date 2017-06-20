var keystone = require('keystone');
var Publication = keystone.list('publications');

exports.generateReport = function(req, res) {
  Publication.model.find().populate('publicationLine industry sector commoditys')
    .exec(function(err, results) {
        if (err) return res.apiError('Error generating report', err);

        res.header("Content-Disposition", "attachment;filename=report.csv");
        res.set('Content-Type', 'application/octet-stream');
        res.type("text/csv");

        var CSV = '';

        if (req.query.cols.charAt(0) == '1') {
          CSV += 'Title';
        }
        if (req.query.cols.charAt(1) == '1') {
          CSV += ',Publication Type';
        }
        if (req.query.cols.charAt(2) == '1') {
          CSV += ',Publication Line';
        }
        if (req.query.cols.charAt(3) == '1') {
          CSV += ',Publisher';
        }
        if (req.query.cols.charAt(4) == '1') {
          CSV += ',Publication Year';
        }
        if (req.query.cols.charAt(5) == '1') {
          CSV += ',Description';
        }
        if (req.query.cols.charAt(6) == '1') {
          CSV += ',Industry';
        }
        if (req.query.cols.charAt(7) == '1') {
          CSV += ',Sector';
        }
        if (req.query.cols.charAt(8) == '1') {
          CSV += ',Commodity';
        }
        if (req.query.cols.charAt(9) == '1') {
          CSV += ',Technical Editor';
        }
        if (req.query.cols.charAt(10) == '1') {
          CSV += ',Volume Editor'
        }
        if (req.query.cols.charAt(11) == '1') {
          CSV += ',Layout Artist'
        }
        if (req.query.cols.charAt(12) == '1') {
          CSV += ',ISSN'
        }
        if (req.query.cols.charAt(13) == '1') {
          CSV += ',ISBN'
        }
        if (req.query.cols.charAt(14) == '1') {
          CSV += ',Printer'
        }
        if (req.query.cols.charAt(15) == '1') {
          CSV += ',Format'
        }
        if (req.query.cols.charAt(16) == '1') {
          CSV += ',Number of Pages'
        }
        if (req.query.cols.charAt(17) == '1') {
          CSV += ',Price'
        }
        if (req.query.cols.charAt(18) == '1') {
          CSV += ',Downloads'
        }

        if (CSV.charAt(0) == ',') {
          CSV = CSV.substring(1, CSV.length);
        }
        CSV += '\n';

        results.forEach(function(pub) {
          var csvLine = ''

          if (req.query.cols.charAt(0) == '1') {
            csvLine += pub.title;
          }
          if (req.query.cols.charAt(1) == '1') {
            csvLine += ',' + pub.publicationType;
          }
          if (req.query.cols.charAt(2) == '1') {
            csvLine += ',' + (pub.publicationLine? pub.publicationLine.name : '');
          }
          if (req.query.cols.charAt(3) == '1') {
            csvLine += ',' + pub.publisher
          }
          if (req.query.cols.charAt(4) == '1') {
            csvLine += ',' + pub.publicationYear
          }
          if (req.query.cols.charAt(5) == '1') {
            csvLine += ',' + pub.description
          }
          if (req.query.cols.charAt(6) == '1') {
            csvLine += ',' + (pub.industry ? pub.industry.name : '')
          }
          if (req.query.cols.charAt(7) == '1') {
            csvLine += ',' + (pub.sector ? pub.sector.name : '')
          }
          if (req.query.cols.charAt(8) == '1') {
            csvLine += ',' + (pub.commodity ? pub.commodity.name : '')
          }
          if (req.query.cols.charAt(9) == '1') {
            csvLine += ',' + pub.technicalEditor
          }
          if (req.query.cols.charAt(10) == '1') {
            csvLine += ',' + pub.volumeEditor
          }
          if (req.query.cols.charAt(11) == '1') {
            csvLine += ',' + pub.layoutArtist
          }
          if (req.query.cols.charAt(12) == '1') {
            csvLine += ',' + pub.ISSN
          }
          if (req.query.cols.charAt(13) == '1') {
            csvLine += ',' + pub.ISBN
          }
          if (req.query.cols.charAt(14) == '1') {
            csvLine += ',' + pub.printer
          }
          if (req.query.cols.charAt(15) == '1') {
            csvLine += ',' + pub.format
          }
          if (req.query.cols.charAt(16) == '1') {
            csvLine += ',' + pub.numberOfPages
          }
          if (req.query.cols.charAt(17) == '1') {
            csvLine += ',' + pub.price
          }
          if (req.query.cols.charAt(18) == '1') {
            csvLine += ',' + pub.downloads
          }

          if (csvLine.charAt(0) == ',') {
            csvLine = csvLine.substring(1, csvLine.length);
          }

          CSV += csvLine + "\n"
        });

        res.send(CSV);
      });
}
