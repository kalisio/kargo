FROM ubuntu:trusty
LABEL maintainer "Kalisio <contact@kalisio.com>"

ARG VERSION
ARG PLUGINS

RUN echo "Building GeoServer $VERSION"

ENV DEBIAN_FRONTEND noninteractive

# Install Java
RUN \
  apt-get -y update --fix-missing && \
  apt-get -y install unzip software-properties-common && \
  echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
  add-apt-repository -y ppa:webupd8team/java && \
  apt-get -y update && \
  apt-get install -y oracle-java8-installer gdal-bin libgdal-java && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  rm -rf /var/cache/oracle-jdk8-installer && \
  rm -rf /tmp/* /var/tmp/*

ENV JAVA_HOME /usr/lib/jvm/java-8-oracle

# Get native JAI and ImageIO
RUN \
    cd $JAVA_HOME && \
    wget http://data.boundlessgeo.com/suite/jai/jai-1_1_3-lib-linux-amd64-jdk.bin && \
    echo "yes" | sh jai-1_1_3-lib-linux-amd64-jdk.bin && \
    rm jai-1_1_3-lib-linux-amd64-jdk.bin

RUN \
    cd $JAVA_HOME && \
    export _POSIX2_VERSION=199209 && \
    wget http://data.opengeo.org/suite/jai/jai_imageio-1_1-lib-linux-amd64-jdk.bin && \
    echo "yes" | sh jai_imageio-1_1-lib-linux-amd64-jdk.bin && \
    rm jai_imageio-1_1-lib-linux-amd64-jdk.bin

# Install GeoServer
RUN wget -c https://sourceforge.net/projects/geoserver/files/GeoServer/$VERSION/geoserver-$VERSION-bin.zip -O ~/geoserver.zip &&\
    unzip ~/geoserver.zip -d /opt && mv -v /opt/geoserver* /opt/geoserver && \
    rm ~/geoserver.zip

# Install GeoServer Plugins
RUN for PLUGIN in $PLUGINS; \
    do \
      wget -c https://sourceforge.net/projects/geoserver/files/GeoServer/$VERSION/extensions/geoserver-$VERSION-$PLUGIN-plugin.zip && \
      unzip -o geoserver-$VERSION-$PLUGIN-plugin.zip -d /opt/geoserver/webapps/geoserver/WEB-INF/lib && \
      rm geoserver-$VERSION-$PLUGIN-plugin.zip ; \
    done

# Enable CORS
# Reminder: GeoServer binary is bundled inside Jetty
RUN sed -i '\:</web-app>:i\
    <filter>\
        <filter-name>cross-origin</filter-name>\
        <filter-class>org.eclipse.jetty.servlets.CrossOriginFilter</filter-class>\
    </filter>\
\
    <filter-mapping>\
        <filter-name>cross-origin</filter-name>\
        <url-pattern>/*</url-pattern>\
    </filter-mapping>' /opt/geoserver/webapps/geoserver/WEB-INF/web.xml

# Remove old JAI from geoserver
RUN rm -rf /opt/geoserver/webapps/geoserver/WEB-INF/lib/jai_codec-1.1.3.jar && \
    rm -rf /opt/geoserver/webapps/geoserver/WEB-INF/lib/jai_core-1.1.3.jar && \
    rm -rf /opt/geoserver/webapps/geoserver/WEB-INF/lib/jai_imageio-1.1.jar

# Expose GeoServer's default port
EXPOSE 8080

HEALTHCHECK --interval=5m --timeout=3s \
    CMD curl -f "http://localhost:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities" || exit 1

# Setup environment variables
ENV JAVA_OPTS "-Xms768m -Xmx2048m -XX:+UseConcMarkSweepGC -XX:NewSize=48m"
ENV GDAL_PATH /usr/share/gdal
ENV GDAL_DATA $GDAL_PATH/1.10
ENV GEOSERVER_HOME /opt/geoserver
ENV PATH $GDAL_PATH:$PATH
ENV LD_LIBRARY_PATH $LD_LIBRARY_PATH:/usr/lib/jni:/usr/share/java

CMD ["/opt/geoserver/bin/startup.sh"]