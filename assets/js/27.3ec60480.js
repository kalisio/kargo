(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{539:function(a,t,s){"use strict";s.r(t);var e=s(13),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"using-gdal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-gdal"}},[a._v("#")]),a._v(" Using GDAL")]),a._v(" "),s("p",[s("strong",[a._v("Kargo")]),a._v(" provides a "),s("a",{attrs:{href:"https://www.gdal.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("GDAL"),s("OutboundLink")],1),a._v(" docker image shipped with a set of additional tools:")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.imagemagick.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("ImageMagick"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/icetan/sqlitepipe",target:"_blank",rel:"noopener noreferrer"}},[a._v("sqlitepipe"),s("OutboundLink")],1)])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("The "),s("strong",[a._v("GDAL")]),a._v(" image extends the official "),s("a",{attrs:{href:"https://hub.docker.com/r/osgeo/gdal",target:"_blank",rel:"noopener noreferrer"}},[a._v("OSGEO image"),s("OutboundLink")],1),a._v(".")])]),a._v(" "),s("h2",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[a._v("#")]),a._v(" Basic usage")]),a._v(" "),s("p",[a._v("Simply run the following command on a given worker node:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$docker")]),a._v(" run  -v /path/to/your/data:/data -t -i kalisio/gdal:3.4.0 /bin/bash\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cd")]),a._v(" /data\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gdalinfo")]),a._v(" path/to/my/dataset\n")])])]),s("p",[a._v("If you need to access another container you will need to run the GDAL container within the same network. For instance, the following command will allow you to link the GDAL container to an existing "),s("code",[a._v("Postgis")]),a._v(" container in the network "),s("code",[a._v("kargo")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$docker")]),a._v(" run --network"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("kargo  -v /mnt/data:/data -t -i kalisio/gdal:3.4.0 /bin/bash\n")])])]),s("p",[a._v("If you need to use the "),s("strong",[a._v("rclone")]),a._v(", you may need to share your configuration:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$docker")]),a._v(" run  -v /path/to/your/data:/data /home/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/.config/rclone/rclone.conf:/root/.config/rclone/rclone.conf -t -i kalisio/gdal:3.4.0 /bin/bash\n")])])]),s("h2",{attrs:{id:"use-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[a._v("#")]),a._v(" Use cases")]),a._v(" "),s("h3",{attrs:{id:"how-to-post-process-an-mbtiles-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-post-process-an-mbtiles-file"}},[a._v("#")]),a._v(" How to post process an MBTiles file ?")]),a._v(" "),s("p",[a._v("The "),s("strong",[a._v("gdal")]),a._v(" image comes with the "),s("a",{attrs:{href:"https://github.com/icetan/sqlitepipe",target:"_blank",rel:"noopener noreferrer"}},[a._v("sqlitepipe"),s("OutboundLink")],1),a._v(" utility that can be used for this purpose. The following example shows how to use "),s("strong",[a._v("sqlitepipe")]),a._v(" and "),s("a",{attrs:{href:"https://www.imagemagick.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("ImageMagick"),s("OutboundLink")],1),a._v(" to make white pixels transparent on all of the tiles stored within the MBTiles file.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$sqlite3")]),a._v(" my-mbtiles.mbtiles\nsqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("UPDATE tiles SET "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("tile_data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pipe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("tile_data, "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/usr/bin/convert'")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'-transparent'")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'white'")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'png:-'")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'png:-'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nsqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("VACUUM tiles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nsqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".quit\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("According the size of the MBTiles to process you may encounter some memory errors and have such an output: "),s("code",[a._v("Error: database or disk is full")]),a._v("\nYou should tell "),s("strong",[a._v("sqlite")]),a._v(" to use a free disk space to work with the temp files:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("sqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" pragma temp_store "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nsqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" pragma temp_store_directory "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/directory/with/lots/of/space'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),s("h3",{attrs:{id:"how-to-create-a-tile-index-from-an-s3-mosaic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-tile-index-from-an-s3-mosaic"}},[a._v("#")]),a._v(" How to create a tile index from an S3 mosaic ?")]),a._v(" "),s("ol",[s("li",[a._v("list the tiles in a file while prefixing the tile path with the driver "),s("code",[a._v("viss3")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rclone")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("://"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("bucket"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $2}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/^/\\/vsis3\\/kalisio-map-data\\/<bucket>\\/<path>\\//'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tiles.txt\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("Create the tile index")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gdaltindex")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("mosaic"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".shp --optfile tiles.txt\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("To use "),s("strong",[a._v("GDAL")]),a._v(" utilities with your S3 bucket, you need to set the following environment variables:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_SECRET_ACCESS_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("xxxxxxxxxxx\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_ACCESS_KEY_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("xxxxxx\n")])])]),s("p",[a._v("And in case of an alternative S3 compatible storage:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_ENDPOINT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("s3.fr-par.scw.cloud "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# in case of alternative S3 compatible storage")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_REGION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("fr-par                "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# in case of alternative S3 compatible storage")]),a._v("\n")])])])]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("Create the "),s("strong",[a._v("MapServer")]),a._v(" index")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$shptree")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("mosaic"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".shp\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("In addition you will probably need to provide some parameters, such as "),s("code",[a._v("wcs_extent")]),a._v(" and "),s("code",[a._v("wcs_resolution")]),a._v(". You can get them by building a "),s("a",{attrs:{href:"https://gdal.org/drivers/raster/vrt.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("VRT"),s("OutboundLink")],1),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gdalbuildvrt")]),a._v(" -input_file_list tiles.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("mosaic"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".vrt\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gdalinfo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("mosaic"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".vrt\n")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);