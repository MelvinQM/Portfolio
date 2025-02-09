#!/bin/sh

# Install Certbot
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot

# # Define variables
DOMAIN="melvinmoes.com"
# EMAIL="your-email@example.com"
certbot --nginx -d $DOMAIN

# # Generate SSL certificate (non-interactive mode)
# certbot certonly --nginx --non-interactive --agree-tos --email $EMAIL -d $DOMAIN

# # Set correct permissions
# chmod -R 755 /etc/letsencrypt

# Reload Nginx to apply changes
nginx -s reload

echo "SSL certificate setup completed!"