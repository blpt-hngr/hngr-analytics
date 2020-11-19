/*
  vanilla JS library for hngr analytics
  ham information service
*/

function getUrlParam(p) {
  const param_dict = getUrlParams()
  if (param_dict && param_dict[p]) {
    return param_dict[p]
  }
  return null
}

function getUrlParams(url) {
  let params = {}
  let url_path = url

  if (!url_path) {
    url_path = window.location.href
  }
  const parts = url_path.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    params[key] = value;
  })
  return params;
}

async function setToken(key='UNKNOWN') {
  window.hngr.key = key
}

async function sendHam(productName='UNKNOWN', 
  eventName='EXTERNAL', payload={}) { 

  const hamURI = 'https://ham.hngr.co/ham.json'
  const headers = {'Content-Type': 'application/json'}
  let params = {'product': productName,
    'event_name': eventName}
  if (payload !== null) {
    params['payload'] = btoa(JSON.stringify(payload))
  }
  var url = new URL(hamURI)

  // support for the 5 major UTM parameters
  const utm_ps = getUrlParam('utm_source')
  if (utm_ps) {
    params['utm_source'] = utm_ps
  }
  const utm_pm = getUrlParam('utm_medium')
  if (utm_pm) {
    params['utm_medium'] = utm_pm
  }
  const utm_pc = getUrlParam('utm_campaign')
  if (utm_pc) { 
    params['utm_campaign'] = utm_pc
  }
  const utm_ct = getUrlParam('utm_content')
  if (utm_ct) {
    params['utm_content'] = utm_ct
  }
  const utm_tt = getUrlParam('utm_term')
  if (utm_tt) {
    params['utm_term'] = utm_tt
  }

  // custom origin flag
  params['origin'] = window.location.href
  params['key'] = window.hngr.key

  // note we will prob have to add a polyfill for this
  url.search = new URLSearchParams(params).toString()
  console.log(url.href)
  fetch(url, {method: 'GET',
    credentials: 'include',
    headers: headers})
    .then(res => {
      res.json().then(json => {
        const pid = json.ham_id
      })
    })
    .catch(err => {console.log('ham err' + err)})
}

window.hngr = {}
window.hngr.send = sendHam
