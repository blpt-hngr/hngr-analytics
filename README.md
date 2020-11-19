HNGR ANALYTICS
---------------------
![hngr Logo](cookie.png)

hngr pixel
=================
The hngr pixel can be easily added to any site. It provides limited information however, and cookies are limited in specific browsers (especially Safari on iOS). Place the below tag somewhere near the end of your site's `<body>` section.

```
<img alt="hngr-pixel" src="https://ham.hngr.co/ham.gif"/>
```


Javascript Component
==================
To include our vanilla javascript library you can just load the minified JS file from our CDN. Put the following script tag in your header

```
<script src="https://cdn.hngr.co/hngr.latest.min.js" crossorigin="anonymous"></script>
```

And then, somewhere in your code, preferably near the script set your token like this:
```
  <script>
    window.hngr.setToken('TOKEN')
  </script>
```

Anywhere in your application, if you want to invoke an analytics call to hngr. Just invoke the `window.hngr.send` function:
```
    window.hngr.send('WEB', 'ORDER_PLACED', {'email': 'asdf@asdf.com'})
```

This function accepts three parameters:
- Product Name - The product name should be `WEB` if it is a website, 'ORDERING' if it's an ordering site (or both), 'MOBILE' for mobile products
- Event Name - This is the action/event that is happening
- Payload - Any additional data to append to the request

