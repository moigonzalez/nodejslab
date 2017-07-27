# NodeJs Lab :alembic:

Small subsite for experimenting with NodeJs

![nodejslab demo](images/nodejslab-demo.gif "nodejslab demo")

Hosting NodeJs thorugh Apache
-----

- Create a virtual host adding this line to /etc/apache2/sites-available/nodejslab.<your-site>.conf

```
<VirtualHost *:80>
		DocumentRoot		/var/your/website/url
        ProxyPass        /  http://localhost:8080/
        ProxyPassReverse /  http://localhost:8080/

```

- Start your node server using the [forever](https://www.npmjs.com/package/forever) npm package
