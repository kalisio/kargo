MAP
    NAME "${INFRA}"

    EXTENT -180 -90 180 90
    UNITS METERS

    # RESOLUTION and DEFRESOLUTION default to 96. If you
    # change RESOLUTION to some other value, also change
    # DEFRESOLUTION. See
    # http://mapserver.org/development/rfc/ms-rfc-55.html
    RESOLUTION 96 ## Also set in Openlayers especially for legends
    DEFRESOLUTION 96

    # MAXSIZE shouldn't be less than 5000 for MF print on A3
    MAXSIZE 5000

    IMAGECOLOR 255 255 255
    STATUS ON

    #FONTSET "fonts.conf"
    #SYMBOLSET "symbol.sym"

    OUTPUTFORMAT
        NAME jpeg
        DRIVER "AGG/JPEG"
        MIMETYPE "image/jpeg"
        IMAGEMODE RGB
        EXTENSION "jpeg"
        FORMATOPTION "QUALITY=85"
    END

    OUTPUTFORMAT
        NAME png
        DRIVER AGG/PNG
        MIMETYPE "image/png"
        IMAGEMODE RGBA
        EXTENSION "png"
        FORMATOPTION "INTERLACE=OFF"
        FORMATOPTION "QUANTIZE_DITHER=OFF"
        FORMATOPTION "QUANTIZE_FORCE=ON"
        FORMATOPTION "QUANTIZE_COLORS=256"
    END

    OUTPUTFORMAT
        NAME "geojson"
        DRIVER "OGR/GEOJSON"
        EXTENSION "json"
        MIMETYPE "application/json; subtype=geojson; charset=utf-8"
        FORMATOPTION "STORAGE=stream"
        FORMATOPTION "FORM=SIMPLE"
        FORMATOPTION "LCO:COORDINATE_PRECISION=8"
        FORMATOPTION "LCO:NATIVE_DATA=YES"
        FORMATOPTION "LCO:WRITE_BBOX=YES"
    END

    OUTPUTFORMAT
        NAME "geotiff16"
        DRIVER "GDAL/GTiff"
        MIMETYPE "image/tiff"
        IMAGEMODE "INT16"
        EXTENSION "tif"
    END

    CONFIG "AWS_S3_ENDPOINT" "${AWS_S3_ENDPOINT}"
    CONFIG "AWS_REGION" "${AWS_REGION}"
    CONFIG "AWS_ACCESS_KEY_ID" "${AWS_ACCESS_KEY_ID}"
    CONFIG "AWS_SECRET_ACCESS_KEY" "${AWS_SECRET_ACCESS_KEY}"
    CONFIG "VSI_CACHE" "TRUE"
    CONFIG "VSI_CACHE_SIZE" "50000000"
    CONFIG "GDAL_DISABLE_READDIR_ON_OPEN" "TRUE"
    CONFIG "CPL_VSIL_CURL_ALLOWED_EXTENSIONS" ".tif .geojson .cog"

    PROJECTION
        "init=epsg:4326"
    END

    WEB
        METADATA
            "ows_keywordlist" "Kargo Kalisio"
            "ows_abstract" "Kalisio ${INFRA} OWS server"
            "ows_fees" "none"
            "ows_contactperson" "Kalisio"
            "ows_contactposition" "support"
            "ows_contactvoicetelephone" ""
            "ows_contactfacsimiletelephone" ""
            "ows_address" ""
            "ows_city" "Castelnaudary"
            "ows_stateorprovince" "Occitanie"
            "ows_postcode" "11400"
            "ows_country" "France"
            "ows_contactelectronicmailaddress" "support@kalisio.com"
            "ows_service_onlineresource" "https://mapserver.${INFRA}.kalisio.xyz/cgi-bin/ows?"
            "ows_hoursofservice" "We are reachable from 8 am until 6 pm "
            "ows_contactinstructions" "Please contact us by email or using our slack channel: https://kalisio.slack.com/messages"
            "ows_accessconstraints" ""
            "ows_enable_request" "*"
            "ows_srs" "EPSG:4326 EPSG:2154 EPSG:3857"
            "wms_title" "Kargo WMS server"
            "wms_encoding" "UTF-8"
            "wms_onlineresource" "https://api.${INFRA}.kalisio.xyz/mapserver"
            "wfs_title" "Kargo WFS server"
            "wfs_enable_request" "!*"
            "wfs_encoding" "UTF-8"
            "wfs_getfeature_formatlist" "gml,geojson"
            "wcs_label" "Kargo WCS server"
        END
    END

    LEGEND
        LABEL
        ENCODING "UTF-8"
        TYPE TRUETYPE
        FONT "Arial"
        SIZE 9
        END
    END

    INCLUDE "srtm.map"
    INCLUDE "dem.map"
    INCLUDE "ign_mask.map"
    INCLUDE "ign_bdortho5m.map"
    INCLUDE "ign_highres.map"
    INCLUDE "po_france0s3.map"
    INCLUDE "po_monde5s.map"

END
