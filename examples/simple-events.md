
Simple Example & Event Reporting
========

Add this below the `</head>` in your site html. This will load the hngr analytics javascript library into a window object on the client-side of your application.

```
<script src="https://cdn.hngr.co/js/hngr.latest.min.js" crossorigin="anonymous"></script>
```

Then, within your code send events using the following javascript code where `site_name` is the identifier you're using for your site (usually your name), `event_name` is the specific event you are coding for and `payload` is the data that will be transmitted with the event back to our infrastructure.
```
window.hngr.send(site_name, event_name, payload={})
```

Events to Instrument
============

The best setup has instruments evented at the following points

- Session Creation (`event_name=SESSION_START`)
- Physical Location Entered (`event_name=LOCATION_INFO`)
- First (or all) Items Add to Cart  (`event_name=ADD_TO_CART`)
- Conversion/Order Placed (`event_name=ORDER_PLACED`) - Payload should be data pertaining to the order in the format specified below:

```
{
  "order_id": ORDER_ID,
  "first_name": FIRST_NAME,
  "last_name": LAST_NAME,
  "email": EMAIL,
  "phone": PHONE,
  "order_total": TOTAL (float),
  "cart": {}
}
```


Contact and Questions
============

Kevan Loy (kevan@hngr.co)
Tom Hayden (tom@hngr.co)
