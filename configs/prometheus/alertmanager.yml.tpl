
route:
  receiver: 'slack'

receivers:
  - name: 'slack'
    slack_configs:
      - send_resolved: true
        api_url: '${SLACK_WEBHOOK_URL}' 
        channel: '${SLACK_CHANNEL}'
        title: '${SUBDOMAIN}'
        text: '{{ if eq .Status "resolved" }}[RESOLVED] {{ end }}{{ .CommonAnnotations.summary }}'
