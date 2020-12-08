  scrape_configs:
  - job_name: '${MONGORS_NAME}'
    static_configs:
    - targets: ['${MONGORS_NAME}0-exporter:9216', '${MONGORS_NAME}1-exporter:9216', '${MONGORS_NAME}2-exporter:9216']