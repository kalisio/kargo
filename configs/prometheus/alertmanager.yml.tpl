route:
  receiver: 'slack'

receivers:
  - name: 'slack'
    slack_configs:
      - send_resolved: true
        api_url: '${SLACK_WEBHOOK_URL}' 
        channel: '${SLACK_CHANNEL}'
        title: '${SUBDOMAIN}'
        # override title_link with empty string to prevent alertmanager to add one.
        title_link: ''
        # prevent slack from making a link to the subdomain
        mrkdwn_in: [ 'text' ]
        text: '{{ if eq .Status "resolved" }}[RESOLVED] {{ end }}{{ .CommonAnnotations.summary }}'
